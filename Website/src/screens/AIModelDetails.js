import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

function AIModelDetails({ route }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const { modelName } = route.params;

  const selectImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.uri) {
        setSelectedImage(response);
      }
    });
  };

  const makePrediction = async () => {
    // Implement the API call to your AI model here
    // Use the code from the screenshot as a reference
    // Remember to handle errors and loading states
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{modelName}</Text>
      <Button title="Select Image" onPress={selectImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage.uri }} style={styles.image} />
      )}
      <Button title="Make Prediction" onPress={makePrediction} disabled={!selectedImage} />
      {prediction && <Text style={styles.prediction}>{prediction}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  prediction: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default AIModelDetails;