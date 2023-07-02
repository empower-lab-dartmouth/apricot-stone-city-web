import make from '../../core/util/make'

const rideTaxi = make.module({
    id: 'taxi-ride',
    submodules: [],
    convoSegments: [
        {
            id: 'taxiride',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol, a curious traveler, embarked on a journey to a new city. As she arrived at the bustling airport, she decided to take a taxi to her hotel. In this taxi ride, Carol unwittingly became a metaphor for the AI concept of illustrating the steps involved in constructing a classifier or predictor using machine learning. The taxi represented the machine learning process, and Carol\'s destination, the hotel, symbolized the desired outcome—a well-performing classifier or predictor. Just like the different steps in machine learning, each phase of the taxi ride depicted an essential aspect of the AI process. As Carol delved deeper into her metaphorical exploration, she unraveled five fundamental ideas about machine learning classifiers and predictors: Idea 1: Data Preprocessing - Just like Carol sharing her intended hotel location with the taxi driver, data preprocessing involves cleaning, transforming, and preparing the data for analysis in machine learning. Idea 2: Feature Selection - Carol selecting specific topics and features to discuss with the taxi driver represents the process of feature selection in machine learning, where relevant and informative features are chosen from the available data to build an effective model. Idea 3: Model Training - The taxi driver using their knowledge of the city\'s streets, traffic patterns, and shortcuts to navigate efficiently represents model training in machine learning, where the model learns patterns, relationships, and rules from the selected features. Idea 4: Model Evaluation - Carol evaluating the driver\'s performance, noting their ability to follow directions, adapt to road conditions, and choose optimal routes, aligns with model evaluation in machine learning, where the model\'s accuracy, performance, and predictive capabilities are assessed against validation or test data. Idea 5: Deployment - Upon reaching her destination and thanking the driver, Carol\'s completion of the taxi ride represents the deployment of the trained model in real-world applications, where the model is put into action to make predictions or classifications.',
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'choosetopic',
            convo: [
                {
                    type: 'text',
                    text:
                        "Choose a topic to explore",
                },
            ],
            choices: [
                {
                    text: "Data Preprocessing",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['datapreprocessing'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Feature Selection",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['featureselection'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Model Training",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['modeltraining'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Model Evaluation",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['modelevaluation'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Deployment",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['deployment'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Go Home",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['gohome'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'datapreprocessing',
            convo: [
                {
                    type: 'text',
                    text: `Once upon a time, there was a woman named Carol, an adventurous traveler seeking new experiences. As Carol arrived in a vibrant city, she decided to hail a taxi to reach her hotel. Little did she know that this taxi ride would serve as a metaphor for the AI concept of illustrating the steps involved in data preprocessing during machine learning. In this metaphorical journey, the taxi represented the machine learning process, while Carol's destination, the hotel, symbolized the desired outcome—a well-constructed classifier or predictor. Each phase of the taxi ride depicted an essential aspect of data preprocessing, intricately linked to the AI process. As Carol stepped into the taxi, she first conveyed her hotel's location to the driver. This initial interaction mirrored the data collection phase of data preprocessing in machine learning. Just as Carol shared the specific address, data collection involves gathering relevant and comprehensive data for analysis. Next, Carol noticed the driver employing various tools such as a GPS device, maps, and traffic updates to navigate efficiently. This represented the data cleaning and transformation stage of data preprocessing. Just as the driver processed information from multiple sources to make informed decisions, data cleaning involves removing inconsistencies, handling missing values, and transforming the data into a usable format. During the ride, Carol engaged in conversations with the driver, providing additional details about her preferences and requirements. This represented data integration in the data preprocessing stage. Similar to Carol integrating her preferences into the conversation, data integration involves merging and combining different datasets to create a comprehensive and unified dataset. As the taxi weaved through the bustling city streets, the driver filtered out irrelevant information, focusing on key landmarks and road signs. This filtering process metaphorically depicted data reduction in data preprocessing, where irrelevant or redundant data is eliminated to improve efficiency and enhance model performance. Finally, upon reaching her hotel, Carol thanked the driver for the pleasant ride and stepped out of the taxi, symbolizing the completion of the data preprocessing phase. Similar to how Carol's journey was made smoother by the driver's effective use of data, data preprocessing streamlines the raw data, making it ready for the subsequent stages of machine learning, such as feature extraction, model training, and evaluation. In this metaphorical story, Carol's taxi ride beautifully illustrated the AI concept of data preprocessing, showcasing the importance of data collection, cleaning, integration, reduction, and the transformative effect it has on the journey towards constructing a well-performing classifier or predictor.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'featureselection',
            convo: [
                {
                    type: 'text',
                    text: 'In this metaphorical tale, the taxi represented the machine learning process, while Carol\'s hotel symbolized the desired outcome—a well-constructed classifier or predictor. Each phase of the taxi ride depicted an essential aspect of feature selection, intricately linked to the AI process. As Carol stepped into the taxi, she noticed a variety of objects and decorations carefully chosen by the driver to create a pleasant ambiance. This initial observation mirrored the importance of feature selection in machine learning. Just as the taxi driver selected specific objects to create a welcoming environment, feature selection involves identifying and selecting the most informative and relevant features from the available data. During the ride, Carol engaged in conversations with the driver, discussing specific topics and experiences related to the city. This exchange of information metaphorically represented the process of feature extraction. Just as Carol extracted relevant information from the driver\'s knowledge, feature extraction involves transforming raw data into a more meaningful representation, highlighting the essential characteristics for the classifier or predictor. Carol also noticed that the taxi driver paid attention to specific landmarks and signs to navigate efficiently through the city. This act of focusing on relevant information symbolized the process of feature engineering. Similar to the taxi driver\'s expertise in selecting significant landmarks, feature engineering involves creating new features or transforming existing ones to enhance the model\'s predictive power. As the taxi traversed the city\'s busy streets, Carol appreciated the driver\'s ability to distinguish between different road conditions and adjust their driving style accordingly. This discerning nature paralleled the importance of feature selection in model training. Just as the driver selected the most appropriate driving techniques for different road conditions, feature selection in model training involves choosing the relevant features that contribute most to accurate predictions. Finally, upon reaching her hotel, Carol thanked the driver for the pleasant ride, representing the completion of the feature selection process. Similar to how Carol\'s journey was enhanced by the driver\'s careful selection of relevant information, feature selection optimizes the model\'s performance by choosing the most informative features, reducing noise, and improving the accuracy and efficiency of the classifier or predictor. In this metaphorical story, Carol\'s taxi ride beautifully illustrated the AI concept of feature selection, emphasizing the importance of identifying, extracting, engineering, and training with the most relevant features to construct a well-performing classifier or predictor.',
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'modeltraining',
            convo: [
                {
                    type: 'text',
                    text: `In this metaphorical tale, the taxi represented the machine learning process, while Carol\'s hotel symbolized the desired outcome—a well-trained model capable of making accurate predictions. Each phase of the taxi ride depicted a crucial aspect of model training, intricately linked to the AI process. As Carol stepped into the taxi, she provided the driver with the hotel address, establishing the initial connection and setting the destination. This initial interaction paralleled the process of data preparation, where the dataset is prepared by cleaning, transforming, and organizing the data for training. During the ride, Carol observed how the taxi driver expertly navigated the city\'s streets, relying on their experience, knowledge, and intuition. This represented the model\'s ability to learn patterns, relationships, and rules from the training data, forming the foundation of model training. Carol noticed that the taxi driver adapted their driving style to the traffic conditions, smoothly maneuvering through busy intersections and congested roads. This adaptation represented the model\'s capacity to adjust its parameters and optimize its performance based on the input data, fine-tuning its predictions during the training process. In the taxi, Carol also noticed that the driver occasionally encountered unfamiliar roads or detours. However, the driver quickly adapted and found alternative routes to reach the destination efficiently. This adaptability mirrored the concept of generalization in model training, where the model can accurately predict outcomes for unseen or new instances based on patterns learned from the training data. Finally, as Carol reached her hotel, she thanked the driver for the safe and pleasant journey. This represented the completion of the model training process, where the trained model is ready to make predictions or classifications based on the knowledge gained from the training data. In this metaphorical story, Carol\'s taxi ride beautifully illustrated the AI concept of model training, showcasing the importance of data preparation, learning from the training data, adapting to different scenarios, generalizing to new instances, and ultimately producing a well-trained model capable of accurate predictions.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'modelevaluation',
            convo: [
                {
                    type: 'text',
                    text: `In this metaphorical tale, the taxi represented the machine learning process, while Carol\'s hotel symbolized the desired outcome—a well-constructed model capable of accurate predictions. Each phase of the taxi ride depicted a crucial aspect of model evaluation, intricately linked to the AI process. As Carol stepped into the taxi, she informed the driver of her hotel\'s address, establishing the starting point for the journey. This initial interaction mirrored the concept of data splitting in model evaluation, where the dataset is divided into training and testing sets. The training set is used to train the model, while the testing set is utilized to evaluate its performance. During the ride, Carol paid attention to various factors that determined the taxi driver\'s skill and efficiency, such as adherence to traffic rules, route selection, and overall driving experience. These factors represented the evaluation metrics used to assess the model\'s performance. Just as Carol observed and evaluated the driver\'s behavior, model evaluation involves using metrics like accuracy, precision, recall, and F1 score to measure the model\'s ability to make accurate predictions. Carol also noticed how the taxi driver adjusted their driving style based on her preferences and comfort. This adaptability represented the process of hyperparameter tuning during model evaluation. Similar to the driver fine-tuning their approach to match Carol\'s preferences, hyperparameter tuning involves adjusting the model\'s parameters to optimize its performance and achieve the desired outcomes. During the ride, Carol engaged in conversations with the driver, providing feedback on the driving experience. This feedback served as validation and validation sets in model evaluation, where the model\'s performance is assessed on unseen data, ensuring its generalizability beyond the training and testing sets. Finally, as Carol arrived at her hotel, she thanked the driver for a smooth and enjoyable ride. This act symbolized the completion of the model evaluation process, where the model\'s performance is assessed, and adjustments can be made if necessary. In this metaphorical story, Carol\'s taxi ride beautifully illustrated the AI concept of model evaluation, highlighting the importance of data splitting, evaluation metrics, hyperparameter tuning, and validation in assessing and improving the performance of a classifier or predictor. Just as Carol reached her hotel safely and with satisfaction, the aim of model evaluation is to ensure that the constructed model performs accurately and reliably in real-world scenarios.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'deployment',
            convo: [
                {
                    type: 'text',
                    text: `In this metaphorical tale, the taxi symbolized the machine learning process, while Carol\'s hotel represented the desired outcome—a functional and deployed model capable of making predictions or classifications. Each phase of the taxi ride represented a crucial aspect of model deployment, intricately linked to the AI process. As Carol stepped into the taxi, she conveyed her hotel\'s address to the driver, initiating the journey towards her destination. This initial interaction mirrored the process of model preparation, where the trained model is prepared for deployment by packaging it with any necessary dependencies or configurations. During the ride, Carol observed the taxi driver\'s expertise and adherence to traffic rules, ensuring a smooth and safe journey. Similarly, during model deployment, it is essential to ensure that the model functions properly in real-world scenarios, handling input data and generating accurate predictions or classifications. Carol noticed how the taxi driver effortlessly navigated through the city, adapting to changing traffic conditions and choosing optimal routes to avoid delays. This adaptability and optimization represented the concept of model optimization during deployment, where the model\'s performance is fine-tuned and refined to achieve the best possible results. Throughout the journey, Carol also appreciated the driver\'s effective communication and responsiveness to her requests, fostering a sense of trust and reliability. Similarly, during model deployment, it is crucial to have robust communication channels and mechanisms in place to handle user input, provide feedback, and ensure the model\'s responsiveness to real-time needs. Finally, as Carol arrived at her hotel, she thanked the driver for a pleasant and successful journey. This act symbolized the completion of the model deployment process, where the trained and optimized model is integrated into a production environment, ready to be used by end-users for predictions or classifications. In this metaphorical story, Carol\'s taxi ride beautifully illustrated the AI concept of model deployment, highlighting the significance of model preparation, handling real-world scenarios, optimization, effective communication, and integration into a production environment. Just as Carol reached her hotel with satisfaction, the aim of model deployment is to provide a functional and reliable solution that meets the needs of users and delivers accurate predictions or classifications in real-world settings.`,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'gohome',
            convo: [
                {
                    type: 'text',
                    text: `Carol arrived at the hotel! Now test your knowledge before following Carol to explore Apricot Stone City`,
                },
            ],
            choices: [
                {
                    text: 'Question 1',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Question 2',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Question 3',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Question 4',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Question 5',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q1',
            convo: [
                {
                    type: 'text',
                    text: `What did Carol's initial search for a taxi in the story represent in the context of machine learning?`,
                },
            ],
            choices: [
                {
                    text: 'Data preprocessing',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Feature selection',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model training',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model evaluation',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q1incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q2',
            convo: [
                {
                    type: 'text',
                    text: `That's correct! Next question:
                    In the story, when Carol considered factors like the taxi driver\'s availability and proximity, what step of the machine learning process does it relate to?`,
                },
            ],
            choices: [
                {
                    text: 'Feature selection',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Data preprocessing',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model training',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model evaluation',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q2incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q3',
            convo: [
                {
                    type: 'text',
                    text: `That’s correct! Next question: During Carol's interaction with the taxi driver, what aspect of the AI concept did her conversation and observations correspond to?`,
                },
            ],
            choices: [
                {
                    text: 'Feature selection',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Data preprocessing',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model training',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model evaluation.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q3incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        
        {
            id: 'q4',
            convo: [
                {
                    type: 'text',
                    text: `That’s correct! Next question: In the story, what does the representative's questioning process represent?`,
                },
            ],
            choices: [
                {
                    text: 'Feature selection',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Data preprocessing',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model training',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model evaluation.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q4incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q5',
            convo: [
                {
                    type: 'text',
                    text: `That’s correct! Next question: Which stage of the AI process involves gathering and preparing data?`,
                },
            ],
            choices: [
                {
                    text: 'Data preprocessing',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['completed'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Feature selection',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model training',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Model evaluation.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q5incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'completed',
            convo: [
                {
                    type: 'text',
                    text: `Great job! Let’s continue the journey`,
                },
            ],
            choices: [
                {
                    text: 'Walk to Destination',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'walk-to-destination',
                                        'walk',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Taxi to Destination',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'taxi-to-destination',
                                        'taxitodestination',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                
                
            ],
        },

    ],
})

export default rideTaxi
