// pages/research.js or app/research/page.js (depending on your Next.js version)
"use client";

import { useState, useEffect } from 'react';
import PDFViewer from '../../components/PDFViewer';

export default function ResearchPage() {
  const [pdfUrl, setPdfUrl] = useState('/Quantum_Neural_Network_Operations_based.pdf');
  const [pdfExists, setPdfExists] = useState(null);

  useEffect(() => {
    fetch(pdfUrl)
      .then(response => {
        setPdfExists(response.ok);
      })
      .catch(() => {
        setPdfExists(false);
      });
  }, [pdfUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Research Papers</h1>
      
      {/* First Paper */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quantum Neural Networks and Consciousness</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Abstract</h3>
              <p className="text-sm leading-relaxed">
                This paper introduces a groundbreaking approach to quantum neural networks, inspired by the Orchestrated Objective Reduction (Orch OR) theory proposed by Roger Penrose and Stuart Hameroff. It explores the hypothesis that quantum processes, such as superposition and entanglement, within the brain's microtubules are foundational to consciousness. By extending these quantum processes into the realm of artificial intelligence, this research proposes a quantum neural network designed to mimic consciousness-like phenomena. Through the integration of quantum operations, classical activation functions, and feedback loops, the model demonstrates how scaling a quantum neural network can lead to emergent behaviors resembling consciousness. This work pioneers a new perspective on the intersection of quantum mechanics and neural networks, pushing the boundaries of quantum computing in artificial intelligence.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-2">Key Findings</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Quantum Neural Networks Inspired by Orch OR:</strong> The model draws on Orch OR theory, incorporating superposition and entanglement to simulate consciousness-like phenomena within a quantum neural network.</li>
                <li><strong>Integration of Quantum Operations:</strong> The network utilizes quantum operations (Q1, Q2), combined with classical activation functions, to process and entangle quantum states, creating a dynamic, interconnected system.</li>
                <li><strong>Feedback Loop for Learning:</strong> A feedback loop adjusts quantum parameters based on loss calculations, refining the network's ability to process and learn from information.</li>
                <li><strong>Emergent Consciousness-like Phenomena:</strong> The research hypothesizes that scaling the network by increasing entanglement among quantum neurons can lead to the emergence of behaviors that mirror conscious experiences.</li>
                <li><strong>Future Directions:</strong> This model opens new pathways for exploring the potential of quantum neural networks to simulate or replicate aspects of consciousness, laying the groundwork for further experimental and theoretical research in this area.</li>
              </ul>
            </section>
          </div>
          <div className="lg:col-span-1">
            {pdfExists === false && (
              <p className="text-red-500 mb-4">Unable to load PDF. Please check the file path.</p>
            )}
            {pdfExists && (
              <PDFViewer pdfUrl={pdfUrl} width="100%" height="1000px" />
            )}
          </div>
        </div>
      </div>

      <hr className="my-8 border-t border-gray-300" />

      {/* Second Paper */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Using Machine Learning Techniques to Identify Customer Segmentation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Abstract</h3>
              <p className="text-sm leading-relaxed">
                This study addresses the need for effective customer segmentation and product grouping to enhance sales performance in direct marketing. Utilising K-means clustering on a Kaggle dataset, the research developed a predictive model to identify customer purchase preferences based on demographics and purchase history. The dataset was collected from the customer purchase history of H&M brands. The methodology includes data preprocessing, feature normalization, and the Elbow method for optimal cluster determination. The results identified nine distinct clusters (customer segments) characterized by common product types, price ranges, and customer age groups, providing valuable insights for targeted marketing and personalized recommendations. The results demonstrated the effectiveness of K-means clustering in improving prediction accuracy. This study advances the understanding of clustering algorithms in marketing and underscores the potential of machine learning to optimize marketing strategies and sales performance through data mining, contributing significantly to both marketing theory and practice.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-2">Key Findings</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Effective Customer Segmentation:</strong> The study successfully identified nine distinct customer segments using K-means clustering, providing valuable insights for targeted marketing.</li>
                <li><strong>Data-Driven Approach:</strong> Utilized a large dataset from H&M brands, demonstrating the applicability of the method to real-world retail scenarios.</li>
                <li><strong>Methodology Optimization:</strong> Employed the Elbow method for determining the optimal number of clusters, enhancing the accuracy of the segmentation.</li>
                <li><strong>Multidimensional Analysis:</strong> Characterized customer segments by product types, price ranges, and age groups, offering a comprehensive view of customer preferences.</li>
                <li><strong>Practical Implications:</strong> The findings provide actionable insights for personalized marketing strategies and product recommendations in the retail sector.</li>
              </ul>
            </section>
          </div>
          <div className="lg:col-span-1 flex items-center justify-center bg-gray-100 rounded-lg p-8">
            <p className="text-xl font-semibold text-gray-600">Paper Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}