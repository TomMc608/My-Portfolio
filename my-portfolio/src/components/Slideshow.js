// /src/components/Slideshow.js
"use client";

import React, { useState } from "react";
import styles from "./Slideshow.module.css"; // Ensure this CSS module exists

const slides = [
    {
      code: `class DataModule(LightningDataModule):
      def __init__(self, transform, batch_size=32, num_workers=4):
          super().__init__()
          self.root_dir = dir0
          self.transform = transform
          self.batch_size = batch_size
          self.num_workers = num_workers
  
      def setup(self, stage=None):
          dataset = datasets.ImageFolder(root=self.root_dir, transform=self.transform)
          self.class_names = dataset.classes
          n_data = len(dataset)
          n_train = int(0.7 * n_data)
          n_val = int(0.15 * n_data)
          n_test = n_data - n_train - n_val
          self.train_dataset, self.val_dataset, self.test_dataset = random_split(dataset, [n_train, n_val, n_test])
  
      def train_dataloader(self):
          return DataLoader(self.train_dataset, batch_size=self.batch_size, shuffle=True, num_workers=self.num_workers, pin_memory=True)
  
      def val_dataloader(self):
          return DataLoader(self.val_dataset, batch_size=self.batch_size, num_workers=self.num_workers, pin_memory=True)
  
      def test_dataloader(self):
          return DataLoader(self.test_dataset, batch_size=self.batch_size, num_workers=self.num_workers, pin_memory=True)
  `,
    },
    {
      code: `class VisionTransformer(LightningModule):
      def __init__(self, class_names):
          super(VisionTransformer, self).__init__()
          self.model = vit_b_16(weights=ViT_B_16_Weights.IMAGENET1K_V1)
          self.model.heads.head = nn.Linear(self.model.heads.head.in_features, len(class_names))
  
      def forward(self, X):
          X = self.model(X)
          return F.log_softmax(X, dim=1)
  
      def training_step(self, batch, batch_idx):
          X, y = batch
          y_hat = self(X)
          loss = F.cross_entropy(y_hat, y)
          self.log("train_loss", loss)
          return loss
  
      def validation_step(self, batch, batch_idx):
          X, y = batch
          y_hat = self(X)
          loss = F.cross_entropy(y_hat, y)
          acc = (y_hat.argmax(dim=1) == y).float().mean()
          self.log("val_loss", loss)
          self.log("val_acc", acc)
  
      def test_step(self, batch, batch_idx):
          X, y = batch
          y_hat = self(X)
          loss = F.cross_entropy(y_hat, y)
          acc = (y_hat.argmax(dim=1) == y).float().mean()
          self.log("test_loss", loss)
          self.log("test_acc", acc)
  
      def configure_optimizers(self):
          optimizer = torch.optim.AdamW(self.parameters(), lr=0.0001)
          lr_scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=10)
          return {'optimizer': optimizer, 'lr_scheduler': lr_scheduler}`,
    },
    {
      code: `class ResNet(LightningModule):
      def __init__(self, class_names):
          super(ResNet, self).__init__()
          self.model = resnet50(weights=ResNet50_Weights.IMAGENET1K_V2)
          self.model.fc = nn.Linear(self.model.fc.in_features, len(class_names))
  
      def forward(self, X):
          X = self.model(X)
          return F.log_softmax(X, dim=1)
  
      def training_step(self, batch, batch_idx):
          X, y = batch
          y_hat = self(X)
          loss = F.cross_entropy(y_hat, y)
          self.log("train_loss", loss)
          return loss
  
      def validation_step(self, batch, batch_idx):
          X, y = batch
          y_hat = self(X)
          loss = F.cross_entropy(y_hat, y)
          acc = (y_hat.argmax(dim=1) == y).float().mean()
          self.log("val_loss", loss)
          self.log("val_acc", acc)
  
      def test_step(self, batch, batch_idx):
          X, y = batch
          y_hat = self(X)
          loss = F.cross_entropy(y_hat, y)
          acc = (y_hat.argmax(dim=1) == y).float().mean()
          self.log("test_loss", loss)
          self.log("test_acc", acc)
  
      def configure_optimizers(self):
          optimizer = torch.optim.AdamW(self.parameters(), lr=0.0001)
          lr_scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=10)
          return {'optimizer': optimizer, 'lr_scheduler': lr_scheduler}`,
    },
    {
      code: `def clear_gpu_memory():
      torch.cuda.empty_cache()
      torch.cuda.reset_peak_memory_stats()
  
  def eta_callback(epoch_idx, total_epochs, epoch_start_time):
      elapsed_time = time.time() - epoch_start_time
      remaining_time = elapsed_time * (total_epochs - epoch_idx - 1)
      eta = time.strftime("%H:%M:%S", time.gmtime(remaining_time))
      print(f"Epoch {epoch_idx + 1}/{total_epochs} completed. ETA: {eta}", end="\r")`,
    },
    {
      code: `def train_and_test_model(model_class, model_name, transform, device, epochs=100):
      datamodule = DataModule(transform=transform)
      datamodule.setup()
      
      model = model_class(class_names=datamodule.class_names).to(device)
      
      checkpoint_callback = ModelCheckpoint(
          monitor="val_acc",
          dirpath=f"/kaggle/working/{model_name}",
          filename=f"{model_name}" + "-{epoch:02d}-{val_acc:.2f}",
          save_top_k=1,
          mode="max"
      )
      
      trainer = Trainer(
          max_epochs=epochs,
          devices=1 if device.type == 'cuda' else None,
          accelerator="gpu" if device.type == 'cuda' else "cpu",
          log_every_n_steps=5,
          precision="16-mixed",
          callbacks=[checkpoint_callback]
      )
  
      for epoch_idx in range(epochs):
          epoch_start_time = time.time()
          trainer.fit(model, datamodule)
          eta_callback(epoch_idx, epochs, epoch_start_time)
      
      print("\nTesting the trained model...")
      test_results = trainer.test(model, dataloaders=datamodule.test_dataloader())
  
      final_model_path = f"/kaggle/working/{model_name}_final_model.pth"
      torch.save(model.state_dict(), final_model_path)
      print(f"Final model saved to: {final_model_path}")
  
      results_df = pd.DataFrame(test_results)
      results_path = f"/kaggle/working/{model_name}_test_results.csv"
      results_df.to_csv(results_path, index=False)
      print(f"Test results saved to: {results_path}")
  
      clear_gpu_memory()
  
  if __name__ == '__main__':
      transform_with_crop = transforms.Compose([
          transforms.RandomRotation(10),
          transforms.RandomHorizontalFlip(),
          transforms.RandomVerticalFlip(),
          transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2, hue=0.1),
          transforms.Resize(224),
          transforms.CenterCrop(224),
          transforms.ToTensor(),
          transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
      ])
  
      print("Training VisionTransformer model with CenterCrop for 100 epochs...")
      train_and_test_model(VisionTransformer, "VisionTransformer_with_crop", transform_with_crop, device, epochs=300)
  
      print("Training ResNet50 model with CenterCrop for 100 epochs...")
      train_and_test_model(ResNet, "ResNet50_with_crop", transform_with_crop, device, epochs=1)`,
    },
    {
      code: `// Code snippet for slide 6`,
    },
    {
      code: `// Code snippet for slide 7`,
    },
  ];
  
export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.slide}>
        <pre className={styles.code}>
          <code>{slide.code}</code>
        </pre>
      </div>
      <div className={styles.buttons}>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}
