import make from '../../core/util/make'

const missingBag = make.module({
    id: 'missing-bags',
    submodules: [],
    convoSegments: [
        {
            id: 'miss-bag',
            convo: [
                {
                    type: 'text',
                    text:
                        'Once upon a time, there was a woman named Carol, a seasoned traveler with a zest for exploring the world. On her latest adventure, she found herself at an airport, excitedly awaiting the start of her journey. However, as she anxiously stood at the baggage claim, her heart sank when she realized that her bags were missing. Distressed and unsure of what to do, Carol decided to call the airport\'s customer service for assistance. Little did she know that her experience with the customer service representative would provide her with a profound metaphor for the world of artificial intelligence and the concept of data preprocessing. As Carol delved deeper into her metaphorical exploration, she unraveled five fundamental ideas about supervised/unsupervised learning algorithms: Idea 1: Data Preprocessing - The customer service representative\'s questions and instructions to Carol, aimed at extracting relevant information, filtering out unnecessary details, addressing inconsistencies, and merging multiple data sources, mirror the process of data preprocessing, ensuring the suitability and quality of the collected data for further analysis. Idea 2: Data Collection - The process of gathering information about Carol\'s missing bags, including details such as color, size, design, distinguishing features, flight details, baggage tags, and interactions with airport staff, represents the collection of data necessary for analysis. Idea 3: Feature Extraction - The questions asked by the representative to identify key attributes of Carol\'s bags, such as color, size, design, and distinguishing features, represent the extraction of important characteristics or features from the collected data, a crucial step in both data preprocessing and AI model training. Idea 4: Model Training - The escalation of Carol\'s case to the appropriate department for further investigation symbolizes the training of a model on the refined and processed data. It involves using a supervised or unsupervised learning algorithm to analyze the information gathered, understand patterns, and make predictions or classifications to resolve the problem at hand. Idea 5: Model Evaluation - Carol\'s anticipation and hope for a resolution reflect the importance of model evaluation. After the model is trained and applied to the real-world data, its effectiveness and accuracy in resolving the issue (locating the missing bags) need to be assessed, similar to evaluating the performance of an AI model using appropriate metrics and techniques.',
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
                    text: "Data Collection",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['datacollection'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Feature Extraction",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['featureextraction'],
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
                    text: `As Carol described her situation over the phone, she couldn't help but draw a parallel between her missing bags and the objects that AI algorithms seek to recognize and classify. Just as data preprocessing is an essential step in training a model on real-world data, Carol saw her call to the customer service representative as a way of preprocessing the information and preparing it for further analysis. The customer service representative asked Carol a series of questions to gather crucial details about her missing bags. What was the color, size, and design of the bags? Were there any distinguishing features or unique identifiers? These questions were like the initial steps of data preprocessing, where raw data is transformed and organized to ensure its suitability for analysis. Carol realized that, much like data preprocessing, the questions asked by the customer service representative aimed to extract relevant information from her description, filtering out unnecessary details and focusing on key attributes. The representative was essentially performing a form of feature extraction, identifying the important characteristics that could help locate Carol's missing bags. As the conversation continued, the representative instructed Carol to provide additional information, such as her flight details, baggage tags, and any recent interactions with airport staff. These steps were reminiscent of data cleaning and data integration processes in data preprocessing, where inconsistencies are addressed, missing values are handled, and multiple data sources are merged for a more comprehensive analysis. With each question and answer, Carol sensed the gradual refinement of the information, much like the way data preprocessing refines raw data to make it more suitable for AI algorithms. She appreciated the representative's meticulous approach and saw the importance of this preprocessing phase in resolving her issue effectively. Finally, after the customer service representative had gathered all the necessary information, Carol was assured that her case would be escalated to the appropriate department for further investigation. She felt a glimmer of hope, knowing that just as data preprocessing sets the stage for accurate analysis, her detailed description had provided the foundation for a focused search and potential recovery of her missing bags. Leaving the airport with a mix of anticipation and gratitude, Carol couldn't help but marvel at the unexpected connection between her experience and the world of artificial intelligence. She understood that just as data preprocessing is crucial in training models on real-world data and evaluating results, her interaction with the customer service representative represented the initial steps of refining information to ultimately resolve her predicament. With a renewed appreciation for the significance of data preprocessing, Carol left the airport with a deeper understanding of how this vital step could unlock solutions and insights, both in the world of AI and in her own real-life adventures. The bags may have been missing, but the valuable lesson she had learned would stay with her forever.'`,
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
            id: 'datacollection',
            
            convo: [
                {
                    type: 'text',
                    text: 'Feeling a wave of worry and uncertainty wash over her, Carol swiftly took action and approached the airport customer service desk. Little did she know that her encounter with the customer service representative would offer a profound metaphor for the world of artificial intelligence and the concept of data collection. As Carol explained her predicament to the customer service representative, she couldn\'t help but draw a parallel between her missing bags and the objects that AI algorithms seek to recognize and classify. Just as data collection is a crucial step in training a model on real-world data, Carol saw her interaction with the representative as a form of data collection, gathering essential information to aid in the resolution of her bag dilemma. The customer service representative, acting as the data collector, attentively listened to Carol\'s description of her missing bags. They asked a series of questions to extract pertinent details about the bags. What was the color, size, and design of the bags? Did they have any unique features or identifiers? These questions mirrored the process of collecting data for analysis, ensuring that the necessary information was obtained to aid in locating Carol\'s missing bags. Carol realized that, much like data collection, the questions posed by the representative aimed to capture relevant attributes and characteristics of her bags. Each piece of information contributed to a comprehensive understanding of the bags\' distinctive features, aiding in their identification and potential recovery. The representative\'s meticulousness in gathering accurate and specific data resonated with the precision required in AI data collection. As the conversation progressed, the representative recorded the details provided by Carol, noting them down meticulously. Each description, from the color and size to the unique identifiers, was akin to collecting structured data, creating a foundation for subsequent analysis. Carol appreciated the importance of precise and comprehensive data collection, knowing that it played a vital role in the success of AI models trained on real-world data. Once the customer service representative had gathered all the necessary details, Carol felt a glimmer of hope. She understood that the comprehensive data collected would serve as valuable input for further analysis and decision-making. The representative assured her that the information would be forwarded to the appropriate department for investigation, much like data collected for AI algorithms is prepared for processing and analysis. Leaving the customer service desk with a sense of reassurance, Carol couldn\'t help but reflect on the parallels between her experience and the world of artificial intelligence. She recognized the importance of meticulous data collection, which laid the foundation for accurate analysis and decision-making. Just as her detailed description had been carefully collected to aid in resolving her bag situation, data collection in AI sets the stage for training models on real-world data and evaluating results. With a newfound appreciation for the significance of data collection, Carol left the airport determined to embark on her adventure with renewed hope. Although her bags were missing, she understood the importance of capturing and documenting relevant information, both in her real-life situation and in the world of AI. The bags may have gone astray, but the valuable lesson she learned about data collection would stay with her on her future journeys.',
                },
                {
                    type: 'text',
                    text: 'Use this mini-game to explore more about training data: spelling-ai.onrender.com',
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
            id: 'featureextraction',
            convo: [
                {
                    type: 'text',
                    text: `Frustrated and worried, Carol quickly approached the airport customer service desk and explained her predicament to the representative. Little did she know that her encounter with the representative would provide a captivating metaphor for the world of artificial intelligence, specifically the concept of feature extraction. As Carol described her missing bags to the customer service representative, she couldn't help but draw a parallel between her bags and the objects that AI algorithms aim to recognize and categorize. Just as feature extraction is a crucial step in training AI models on real-world data, Carol saw her interaction with the representative as a process of extracting important features from her bag situation. The customer service representative, playing the role of an AI algorithm, attentively listened to Carol's description and asked specific questions to extract relevant features of her bags. They inquired about the color, size, shape, unique identifiers, and any distinguishing characteristics. These questions symbolized the process of feature extraction, where essential attributes are identified and isolated from the overall data. Carol realized that, much like feature extraction, the representative's questions were aimed at capturing the distinctive elements of her bags. Each piece of information contributed to a refined understanding of the bags' unique features, just as feature extraction helps identify the most relevant characteristics for AI algorithms. As Carol answered the representative's questions, she observed how the details provided contributed to a clearer picture of her missing bags. The color, size, and unique identifiers formed a set of features that could be used to distinguish her bags from others. The representative's thoroughness in extracting and documenting these features reminded Carol of the precision required in AI algorithms when extracting relevant attributes from real-world data. With each additional feature shared, Carol felt a glimmer of hope. She understood that the extracted features were crucial for subsequent analysis and decision-making. The representative assured her that the gathered information would be used to aid in locating her bags, akin to how feature extraction prepares the data for AI algorithms to make informed decisions based on the identified features. As Carol bid farewell to the customer service desk, a sense of optimism accompanied her despite her missing bags. She couldn't help but appreciate the parallel between her experience and the world of artificial intelligence. The process of feature extraction she encountered at the airport desk echoed the importance of extracting relevant attributes from real-world data in AI models. With this newfound understanding, Carol left the airport with a glimmer of hope, knowing that the extracted features of her bags would aid in their recovery. While her journey had hit a temporary bump, she carried with her a valuable lesson about the significance of feature extraction in AI algorithms. The bags might be missing, but the knowledge she gained would stay with her as she continued to explore the world, both in her travels and in her understanding of the captivating realm of artificial intelligence.`,
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
                    text: `As Carol meandered through the ancient streets, she was enthralled by the statues that adorned the city's squares and parks. These majestic sculptures seemed to possess a captivating aura, each with a story etched into its very being. Little did Carol know that her journey would lead her to uncover a profound metaphor for the world of artificial intelligence, specifically the concept of evaluation metrics in classification. With every statue she encountered, Carol couldn't help but draw parallels between the process of recognizing these unique objects and the evaluation of AI models. In her mind, each statue represented a dataset, and the act of pointing at and observing them was akin to the evaluation of a model's performance. As Carol raised her hand to point at a regal statue standing tall in the city square, she imagined herself as an AI model attempting to accurately classify the object. Just as evaluation metrics assessed the model's accuracy and effectiveness, Carol contemplated the criteria she could use to judge the statue. She considered the statue's proportions, the level of detail in its craftsmanship, and the emotions it evoked within her. In the world of AI, evaluation metrics played a crucial role in quantifying a model's performance. Similarly, Carol recognized the need for well-defined criteria to assess the artistic merit of the statues. She mused over the idea of using metrics such as the statue's visual impact, historical significance, and the emotions it stirred in observers as potential evaluation measures. Carol continued her journey, encountering statues of various sizes and styles. Some were grand and imposing, while others exuded an air of delicate elegance. With each statue, she contemplated different evaluation metrics that could capture their essence. She considered metrics like uniqueness, cultural significance, and craftsmanship intricacy, realizing that evaluating an AI model's performance involved a similar process of selecting appropriate metrics to measure its effectiveness in classifying diverse objects. The realization dawned upon Carol that just as the choice of evaluation metrics in AI influenced the understanding and improvement of models, the selection of meaningful criteria would enrich her perception of the statues. It would enable her to appreciate the nuances and artistry encapsulated within each sculpted masterpiece. As the day drew to a close, Carol found herself reflecting on the enchanting journey through Yerevan's statue-filled streets. She felt a deep sense of appreciation for the connection she had discovered between the evaluation metrics in AI and her own evaluation of the statues. Each statue had become a canvas, a reflection of the intricate world of classification and the significance of choosing the right criteria to measure success. With a heart brimming with newfound insights, Carol returned home from her Armenian expedition, carrying with her a deeper understanding of the evaluation metrics that shaped both the world of AI and her own exploration of art and culture. The statues of Yerevan had become more than mere sculptures; they had become a symbol of the power of evaluation metrics to unravel the hidden stories and appreciate the beauty that lay within the world around us.`,
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
                    text: `Determined to find her belongings, Carol hurriedly dialed the airport's customer service number. Little did she know that her encounter with the customer service representative would serve as a metaphor for the world of artificial intelligence, specifically the concept of model evaluation. As Carol explained her situation to the representative, she couldn't help but draw a parallel between her missing bags and the objects that AI algorithms aim to recognize and categorize. In her mind, the representative acted as an AI model, undergoing evaluation to determine their effectiveness in assisting her. The customer service representative, assuming the role of the AI model, attentively listened to Carol's concerns and gathered relevant information about her bags. They asked specific questions about the bags' description, contents, and any distinguishing features. This process mirrored the evaluation phase of an AI model, where its performance is assessed against predefined criteria. Carol realized that, much like model evaluation, the representative's questions aimed to gauge their ability to address her concerns. The representative's knowledge, empathy, and problem-solving skills were like the evaluation metrics used in AI, which measure the model's effectiveness in fulfilling its intended purpose. As the conversation progressed, Carol observed the representative's attentiveness and their efforts to resolve her situation. The representative demonstrated their expertise by asking further probing questions, seeking additional information that could aid in locating her bags. This mirrored the iterative nature of model evaluation, where multiple tests and assessments are conducted to ensure the model's performance is optimal. With each interaction, Carol witnessed the representative's commitment to finding a solution. The representative's determination to assist her, coupled with their efficient questioning and problem-solving skills, gave Carol hope. She recognized the importance of comprehensive model evaluation in AI, where the effectiveness and reliability of the model are assessed to ensure it meets the desired objectives. As Carol bid farewell to the customer service representative, a sense of gratitude washed over her. Despite her bags still being missing, she appreciated the metaphorical journey into the realm of AI model evaluation. The representative's dedication and evaluation of their performance mirrored the meticulous process of evaluating AI models trained on real-world data. Leaving the airport with a renewed sense of hope, Carol carried with her the understanding that model evaluation is crucial in both real-life situations and the world of artificial intelligence. Although her bags were yet to be found, she recognized the significance of assessing the performance of AI models against predefined criteria to ensure their effectiveness in addressing real-world challenges. As Carol continued her journey, she marveled at the parallels between her experience and the intricate world of AI. The missing bags became a symbol of the importance of thorough evaluation and continuous improvement, reminding her of the quest for excellence in both human interactions and the realm of intelligent algorithms.`,
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
                    text: `Carol has found her bags! Now test your knowledge before following Carol to explore Apricot Stone City`,
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
                    text: `In the story, what problem did Carol encounter at the airport?`,
                },
            ],
            choices: [
                {
                    text: 'She experienced issues with Data Collection.',
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
                    text: 'Her bags went through inadequate Data Preprocessing.',
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
                    text: 'Feature Extraction caused her bags to go missing.',
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
                    text: 'Model Evaluation failed to locate her bags.',
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
                    text: `That’s correct! Next question: What is the purpose of data preprocessing in AI?`,
                },
            ],
            choices: [
                {
                    text: 'To clean and transform the data for analysis.',
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
                    text: 'To evaluate the performance of the model.',
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
                    text: 'To extract useful features from the data.',
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
                    text: 'To collect relevant data for training.',
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
                    text: `That’s correct! Next question: Which stage of the AI process involves determining the effectiveness of the trained model?`,
                },
            ],
            choices: [
                {
                    text: 'Data Preprocessing.',
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
                    text: 'Data Collection.',
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
                    text: 'Feature Extraction.',
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
                    text: 'Model Evaluation.',
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
                    text: 'The importance of Data Preprocessing.',
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
                    text: 'The significance of Model Training.',
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
                    text: 'The effectiveness of Feature Extraction.',
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
                    text: 'The thoroughness of Data Collection.',
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
                    text: 'Data Collection.',
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
                    text: 'Data Preprocessing.',
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
                    text: 'Feature Extraction.',
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
                    text: 'Model Training.',
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
                    text: 'Carol rides taxi to hotel',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'taxi-ride',
                                        'taxiride',
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

export default missingBag
