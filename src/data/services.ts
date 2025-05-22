export interface ServiceData {
  id: string;
  title: string;
  description: string[];
  image: string;
}

export const services: ServiceData[] = [
  {
    id: "home-decoration",
    title: "मूर्ती सजावट पॅकेज",
    description: [
      "गणपती मूर्ती देकोरेशन",
      "जन्माष्टमी स्पेशल पॅकेज",
      "कृष्णा मूर्ती डेकोरेशन",
    ],
    image: "/service-1.jpg"
  },
  {
    id: "door-decor",
    title: "दिव्य दोन दरवाजा",
    description: [
      "पारंपरिक पद्धत अनुसार",
      "सुंदर फुलांचा वापर",
      "उच्च कोटीची कारागिरी",
    ],
    image: "/service-2.jpg"
  },
  {
    id: "wall-painting",
    title: "वॉल पेंटिंग",
    description: [
      "व्यावसायिक दर्जा अनुभवी",
      "सुंदर डिझाईन",
      "रिझनेबल व योग्य दरामध्ये",
      "तुमच्या इच्छेप्रमाणे",
    ],
    image: "/service-3.jpg"
  }
];
