import make from '../../core/util/make'

const onThePlane = make.module({
    id: 'on-the-plane',
    submodules: [],
    convoSegments: [
        {
            id: 'opening',
            convo: [
                {
                    type: 'text',
                    text:
                        'Once upon a time, there was a woman named Carol. She was a curious soul with a heart full of wanderlust. Carol embarked on a journey to Apricot Stone City in Armenia, and this time, she chose to travel by train. As she settled into her seat, her eyes filled with excitement for the adventures that awaited her. Supervised learning, Carol thought, was just like teaching an AI model to recognize different objects in the clouds. She imagined sitting in a field, pointing at clouds and labeling them as "bird," "tree," or "car." The AI model would then learn from these labeled examples and gradually become better at identifying objects in the clouds.As Carol delved deeper into her metaphorical exploration, she unraveled five fundamental ideas about supervised learning: Idea 1: Training with labeled data - Carol realized that just like a model in supervised learning, she needed labeled examples to understand the objects within the clouds. Each cloud formation served as a guide, enabling her to learn and identify the patterns associated with specific objects. Idea 2: Generalization - Carol understood that the aim of supervised learning, like her cloud recognition, was not limited to mere memorization. It involved the ability to generalize and apply the learned patterns to new and unseen instances, allowing her to identify familiar objects even in different cloud formations. Idea 3: Model selection - Similar to the importance of choosing the right model architecture and algorithm in supervised learning, Carol acknowledged the significance of honing her observation techniques. She experimented with different approaches, adapting her strategies to improve her accuracy in recognizing objects within the clouds. Idea 4: Evaluation metrics - Carol realized the importance of evaluating her progress. Just as models in supervised learning are assessed using metrics, she assessed her own abilities in cloud recognition. Accuracy, precision, and recall became her guiding principles to measure her success and identify areas for improvement. Idea 5: Optimization techniques - Carol discovered the value of optimization techniques in supervised learning, mirroring her own efforts to refine her observation skills. She adjusted her focus, identified relevant features within the clouds, and fine-tuned her parameters to enhance her ability to recognize objects accurately.',
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
                    text: "Training with labeled data",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['training'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Generalization",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['generalization'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Model selection",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['modelselection'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Evaluation metrics",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['evaluationmetrics'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Optimization techniques",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['optimizationtechniques'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Land the plane already!",
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
            id: 'training',
            convo: [
                {
                    type: 'text',
                    text: `Labeled data, Carol thought, was like attaching tags to the clouds, providing them with names and identities. In supervised learning, it was crucial to have labeled examples to train the AI model effectively. Just like Carol labeled clouds as "bird," "tree," or "car," the AI model required data points with clear annotations to understand and learn from. Carol understood that the quality and accuracy of the labeled data played a vital role. If she mistakenly labeled a cloud as a bird when it was actually a tree, the AI model might learn the wrong associations. Similarly, in supervised learning, ensuring correct and consistent labeling was essential to avoid misleading the model and to enable it to make accurate predictions. As Carol contemplated further, she realized that having a diverse range of labeled examples was equally important. If she only labeled clouds as birds and ignored other objects, the AI model might struggle to recognize anything other than birds. Similarly, in supervised learning, a broad and representative set of labeled data allowed the model to learn from various instances, enabling it to make predictions on a wide range of objects and scenarios. The process of labeling the clouds, Carol realized, required her expertise and subjective judgment. She had to use her own understanding and perception to assign the appropriate labels. In supervised learning, human expertise was crucial in providing accurate annotations. The labels reflected human knowledge and served as a foundation for the model to learn and replicate that understanding. Carol also understood that creating a large and comprehensive labeled dataset could be time-consuming and labor-intensive. She remembered spending countless hours in the field, observing and labeling different clouds. Similarly, in supervised learning, acquiring and preparing a sufficient amount of high-quality labeled data could require significant effort and resources. With these insights, Carol appreciated the importance of labeled data in training an AI model through supervised learning. The labeled clouds provided a foundation for the model to learn, grow, and make accurate predictions. As her train journey came to an end, Carol carried this newfound appreciation for labeled data with her, ready to explore Apricot Stone City with a deeper understanding of the underlying principles of supervised learning.`,
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
            id: 'generalization',
            convo: [
                {
                    type: 'text',
                    text: 'As Carol delved further into her cloud recognition journey, she began to unravel the profound concept of generalization, a fundamental idea in supervised learning. She realized that her ability to identify familiar objects within different cloud formations mirrored the essence of generalization in AI. Carol noticed that while each cloud formation was unique, there were underlying patterns that persisted across different instances. Just as a model trained with labeled data aims to generalize its predictions to unseen examples, Carol\'s goal was to identify familiar objects even in clouds she had never encountered before. She started to observe the commonalities among the clouds she had labeled. She noticed that certain shapes, such as curves or straight lines, often appeared in clouds that resembled man-made objects. By focusing on these shared features, Carol developed a knack for recognizing familiar objects across various cloud formations. It was as if her mind had learned to extract key features from the labeled examples and apply them to new, unseen clouds. As Carol traveled to different regions, she encountered diverse climates and atmospheric conditions that influenced the appearance of the clouds. She saw how weather patterns and geography shaped the clouds, creating unique formations that challenged her ability to generalize. However, through perseverance and a deep understanding of the underlying patterns, Carol adapted and expanded her generalization skills. Carol realized that generalization was not limited to individual objects but extended to broader categories. For instance, by recognizing the similarities in shape and texture, she could identify clouds as either animals, plants, or inanimate objects. This ability to classify clouds into broader categories showcased her growing generalization capacity. However, Carol understood the importance of striking a balance in generalization. Over-generalizing could lead to mistaking unrelated cloud formations for familiar objects, while under-generalizing might hinder her ability to recognize variations of familiar objects. Just as in supervised learning, she had to find the sweet spot where her ability to generalize was accurate and flexible. Through her exploration of generalization, Carol learned that the true power of supervised learning lay in its ability to transcend specific instances and apply learned patterns to new, unseen examples. It allowed models—and her own mind—to navigate the ever-changing landscape of data and make accurate predictions even in unfamiliar territories. As the plane descended toward Apricot Stone City, Carol marveled at how her understanding of generalization mirrored her imminent arrival in a new city. Just as she had learned to recognize familiar objects within different cloud formations, she was ready to apply her skills in exploring and adapting to the unique wonders that awaited her in Armenia. With a sense of anticipation and a deep appreciation for the concept of generalization, Carol eagerly awaited the moment when the wheels of the plane would touch down, marking the beginning of her remarkable adventure in Apricot Stone City. Little did she know that her metaphorical journey through supervised learning would continue to shape her perception of the world, empowering her to uncover hidden treasures in the most unexpected places.',
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
            id: 'modelselection',
            convo: [
                {
                    type: 'text',
                    text: `As Carol continued her journey towards Apricot Stone City, she delved deeper into the third important idea of supervised learning: model selection. Just as she sought to improve her cloud recognition skills, Carol understood the significance of choosing the right model architecture and algorithm to enhance the accuracy of predictions. Inspired by the complex and diverse cloud formations she had observed during the flight, Carol realized that different objects within the clouds required different strategies to identify. Some objects had distinct shapes and patterns, while others were more subtle and nuanced. Just as a model needs to adapt to the characteristics of the data it is trained on, Carol recognized the need to tailor her approach based on the cloud objects she encountered. Carol began to experiment with various observation techniques and recognition methods. She observed how different approaches, such as focusing on shapes, textures, or colors, yielded varying results. By employing a combination of these strategies, she aimed to optimize her accuracy in identifying objects within the clouds. Furthermore, Carol discovered that the selection of the right features played a crucial role in model performance. Just as a model extracts meaningful features from the data to improve its predictions, Carol learned to identify relevant aspects of the cloud formations. She paid attention to the contours, lines, and details that distinguished one object from another, refining her ability to discern subtle differences. Additionally, Carol recognized that model selection involved considering the trade-offs between simplicity and complexity. She experimented with different levels of intricacy in her recognition techniques, understanding that overly complex approaches might lead to overfitting, where her ability to recognize objects became too specific to her labeled examples. On the other hand, overly simplistic approaches might fail to capture the complexity of cloud objects. Striking the right balance became crucial in optimizing her model. As Carol\'s plane glided closer to Apricot Stone City, she marveled at how her exploration of model selection mirrored her anticipation of exploring the enchanting city. Just as she adjusted her recognition techniques to match the characteristics of different cloud objects, she anticipated adjusting her mindset and approach to fully embrace the culture, history, and beauty of Apricot Stone City. Carol understood that, like in supervised learning, model selection required continuous evaluation and refinement. She welcomed the opportunity to learn from her experiences, fine-tune her strategies, and adapt to new challenges. The journey had become more than just recognizing objects in the clouds—it had become a quest for self-improvement and the pursuit of excellence. With the plane descending towards Apricot Stone City, Carol\'s excitement grew. The lessons she had learned about model selection filled her with a sense of confidence and curiosity for the adventures that lay ahead. As the wheels of the plane touched down, she stepped onto the Armenian soil, ready to embark on an extraordinary exploration, armed with the knowledge that the right model selection and adaptability would be her guiding companions in unraveling the mysteries of Apricot Stone City.`,
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
            id: 'evaluationmetrics',
            convo: [
                {
                    type: 'text',
                    text: `As Carol\'s journey to Apricot Stone City unfolded, she became increasingly aware of the importance of model evaluation in supervised learning. Inspired by the desire to improve her cloud recognition skills, she sought ways to assess the effectiveness of her approaches and make informed decisions. To evaluate her performance, Carol devised a systematic process. She began by collecting a new set of cloud images, carefully selecting a variety of formations that she had not encountered before. These unseen clouds served as her test dataset, representing real-world scenarios where she would encounter unfamiliar objects. With her mental labeled dataset and the test dataset in hand, Carol adopted a rigorous evaluation methodology. She applied her recognition techniques to the test clouds, comparing her predictions to the true objects she had labeled in her mind. She recorded her successes and failures, taking note of where her recognition fell short and where it excelled. Through this evaluation process, Carol gained insights into the strengths and weaknesses of her cloud recognition abilities. She identified patterns in her errors and areas where her predictions were consistently accurate. This feedback allowed her to refine her strategies, focusing on areas that required improvement and reinforcing her strengths. Carol also recognized the significance of using appropriate evaluation metrics. Just as in supervised learning, where metrics like accuracy, precision, recall, and F1 score provide quantitative measures of model performance, she sought ways to quantify her own recognition accuracy. She developed her own set of evaluation metrics, taking into account factors such as the complexity of the objects and the level of certainty in her predictions. By incorporating model evaluation into her cloud recognition journey, Carol gained a deeper understanding of her capabilities and limitations. She recognized that evaluation was not just a one-time process but an ongoing cycle of improvement. Each evaluation provided her with valuable feedback, guiding her towards better recognition techniques and enhancing her overall performance.`,
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
            id: 'optimizationtechniques',
            convo: [
                {
                    type: 'text',
                    text: `As the plane descended towards Apricot Stone City, Carol\'s mind was filled with thoughts of the intricate optimization techniques she had explored during her cloud recognition journey. She couldn\'t help but draw parallels between her own quest and the algorithms used in supervised learning to improve model performance. During her exploration of cloud formations, Carol had encountered various optimization challenges. She realized that simply relying on her initial recognition strategies wouldn\'t suffice to achieve optimal results. Inspired by the notion of optimizing model performance, Carol set out to refine her own approach and push the boundaries of her cloud recognition abilities. One of the first optimization techniques Carol employed was gradient descent. Just as models in supervised learning iteratively adjust their parameters to minimize the loss function, Carol sought to fine-tune her recognition strategies through a series of iterative adjustments. She continuously observed and analyzed cloud formations, making small modifications to her mental models with each encounter. This iterative process allowed her to gradually minimize errors and improve her overall recognition accuracy. As Carol delved deeper into optimization techniques, she also recognized the importance of hyperparameter tuning. Just as models have hyperparameters that control the behavior and performance of the learning algorithm, Carol identified key aspects of her recognition process that could be optimized. She experimented with various approaches, adjusting the thresholds, parameters, and decision-making criteria in her mental recognition models. Through this meticulous tuning process, she aimed to optimize her cloud recognition capabilities, ensuring that she achieved the highest level of accuracy possible. Additionally, Carol embraced the concept of regularization. She understood that overfitting could be mitigated through techniques such as L1 and L2 regularization, which help models generalize better by reducing the impact of overly complex or unnecessary features. In her cloud recognition journey, Carol applied a similar approach by focusing on the most relevant and distinctive aspects of cloud formations while filtering out noise and irrelevant details. This regularization process allowed her to strike a balance between capturing the essential features and avoiding excessive complexity. Inspired by the concept of optimization, Carol also explored ensemble methods. Just as models can be improved by combining multiple individual models, she recognized the potential benefits of combining different recognition strategies. Carol experimented with different approaches, blending her observations of shapes, colors, and textures to form a holistic understanding of cloud formations. By harnessing the strengths of each approach and leveraging their collective insights, she aimed to achieve higher recognition accuracy and robustness. As the plane approached the runway of Apricot Stone City, Carol felt a sense of fulfillment and accomplishment. Her journey through the clouds had not only deepened her understanding of supervised learning but also honed her own abilities in cloud recognition. The optimization techniques she had employed had empowered her to continually refine her strategies, push her limits, and unlock her full potential. Stepping off the plane, Carol carried with her a newfound appreciation for the iterative nature of optimization, both in the realm of artificial intelligence and in her personal growth. She was eager to apply the lessons she had learned to navigate the enchanting streets of Apricot Stone City, knowing that the pursuit of optimization would be a lifelong journey filled with continuous learning and refinement.`,
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
                    text: `Carol has landed! Now test your knowledge before following Carol to explore Apricot Stone City`,
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
                    text: `How did Carol apply regularization in her cloud recognition journey?`,
                },
            ],
            choices: [
                {
                    text: 'She focused on the most relevant and distinctive aspects of cloud formations while filtering out noise.',
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
                    text: 'She combined different recognition strategies to form a holistic understanding.',
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
                    text: 'She adjusted hyperparameters to control the behavior and performance of her recognition models.',
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
                    text: 'She blended observations of shapes, colors, and textures to achieve higher recognition accuracy.',
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
                    What did Carol do to assess the effectiveness of her cloud recognition approaches?`,
                },
            ],
            choices: [
                {
                    text: 'She compared her predictions to true objects using a test dataset.',
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
                    text: 'She relied on qualitative feedback from other observers.',
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
                    text: 'She tested her approaches on familiar cloud formations.',
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
                    text: 'She collected a new set of labeled clouds for training.',
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
                    text: `Why is striking a balance in generalization important in supervised learning?`,
                },
            ],
            choices: [
                {
                    text: 'Under-generalizing leads to accurate predictions in unfamiliar territories.',
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
                    text: 'Under-generalizing allows for greater flexibility in recognizing familiar objects.',
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
                    text: 'Over-generalizing improves the accuracy of predictions.',
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
                    text: 'Over-generalizing leads to mistaking unrelated objects for familiar ones.',
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
                    text: `Why did the size of Carol\'s labeled dataset play a crucial role in her recognition ability?`,
                },
            ],
            choices: [
                {
                    text: 'It enhanced her ability to discern subtle details in cloud formations.',
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
                    text: 'It facilitated the iterative process of refining her understanding.',
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
                    text: 'It reduced confusion and improved the accuracy of her predictions.',
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
                    text: 'It allowed her to discover more patterns and relationships.',
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
                    text: `What did Carol gain from the evaluation process?`,
                },
            ],
            choices: [
                {
                    text: 'Insights into the strengths and weaknesses of her recognition abilities.',
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
                    text: 'larger mental labeled dataset.',
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
                    text: 'A new set of evaluation metrics.',
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
                    text: 'The ability to recognize unfamiliar cloud formations.',
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
                    text: 'Land and gather bags at the airport',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'missing-bags',
                                        'miss-bag',
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

export default onThePlane
