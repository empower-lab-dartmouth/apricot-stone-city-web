import make from '../../core/util/make'

const taxiToDestination = make.module({
    id: 'taxi-to-destination',
    submodules: [],
    convoSegments: [
        {
            id: 'taxitodestination',
            convo: [
                {
                    type: 'text',
                    text:
                        'Once upon a time, there was a woman named Carol who found herself in a bustling city. Carol had a general destination in mind and decided to take a taxi to reach it efficiently. Little did she know that her journey would soon be interrupted by unexpected rain pouring down from the sky. In the realm of artificial intelligence, Carol\'s decision to take a taxi in response to the changing circumstances of the weather can be metaphorically compared to the process of selecting the appropriate type of machine learning algorithm to solve a reasoning problem. Just as Carol considered the weather conditions before choosing the taxi, selecting the right machine learning algorithm involves assessing the specific characteristics and requirements of the problem at hand. As Carol delved deeper into her metaphorical exploration, she unraveled five fundamental ideas about choosing the correct machine learning algorithm for each situation: Idea 1: Availability of labeled training data - Just as Carol considers the availability of taxis to reach her destination, selecting the appropriate machine learning algorithm depends on the presence of labeled training data that matches the problem at hand. Idea 2: Desired output or objective - Similar to how Carol has a general destination in mind, determining the desired output or objective is crucial when selecting a machine learning algorithm to ensure it aligns with the specific problem and its goals. Idea 3: Nature of the problem and data - Just as Carol considers the weather conditions and her surroundings, understanding the nature of the problem and the characteristics of the available data is essential in choosing a machine learning algorithm that can effectively address and analyze the given information. Idea 4: Trade-offs between interpretability and complexity - Like Carol\'s consideration of trade-offs between convenience, cost, and environmental impact when choosing a taxi, selecting a machine learning algorithm involves evaluating the balance between interpretability and complexity, as more complex algorithms may provide better performance but be harder to interpret. Idea 5: Requirements for feedback and decision-making - Carol\'s ability to adapt and adjust her plans in response to the rain reflects the importance of feedback and decision-making in machine learning algorithms, as different types (supervised, unsupervised, or reinforcement learning) have varying capabilities for incorporating feedback and making informed decisions.',
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
                    text: "Availability of labeled training data",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['availability'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Desired output or objective",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['desiredoutput'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Nature of the problem and data",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['nature'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Trade-offs between interpretability and complexity",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['trade-offs'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Requirements for feedback and decision-making",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['requirements'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Arrive at Destination",
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
            id: 'availability',
            convo: [
                {
                    type: 'text',
                    text: `Once upon a time, there was a woman named Carol. Carol had a particular destination in mind and decided to take a taxi to reach it. She knew that taxis would provide her with a reliable and guided journey. However, as Carol embarked on her taxi ride, unexpected rain started pouring down, creating a sudden challenge in her plans. In the realm of AI, selecting the appropriate type of machine learning algorithm to solve a reasoning problem can be likened to Carol\'s decision-making process. Just as Carol considers the availability of taxis to ensure a smooth journey, the concept of availability of labeled training data plays a crucial role in choosing the right algorithm. Labeled training data refers to instances where input data is associated with pre-defined output labels. Similarly, Carol needed clear guidance and information during her taxi ride to make informed decisions. The availability of labeled training data in machine learning allows algorithms to learn from past examples and observations, creating a foundation for accurate predictions and reasoning. In Carol\'s case, the availability of labeled training data can be compared to having clear signage or GPS directions that help her navigate through the rain and reach her destination efficiently. Similarly, in the AI realm, algorithms that rely on supervised learning techniques use labeled training data to make predictions based on known patterns and relationships. Without the availability of labeled training data, just as Carol would have faced difficulty finding her way through the rain without proper guidance, machine learning algorithms might struggle to learn and reason effectively. The quality, quantity, and relevance of labeled training data greatly influence the accuracy and performance of the chosen algorithm. Ultimately, Carol and the concept of availability of labeled training data demonstrate the importance of having reliable and informative inputs to guide decision-making. In the realm of machine learning, algorithms must have access to labeled training data to learn from past experiences and make reasoned predictions to solve complex reasoning problems effectively.`,
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
            id: 'desiredoutput',
            convo: [
                {
                    type: 'text',
                    text: 'In the world of AI, selecting the appropriate type of machine learning algorithm to solve a reasoning problem is like Carol\'s decision to take a taxi. Just as Carol had a desired objective of reaching her destination, the concept of desired output or objective plays a crucial role in choosing the right algorithm. The desired output or objective in machine learning refers to the specific goal or outcome that the algorithm aims to achieve. It serves as a guiding principle, just as Carol\'s destination guided her taxi driver\'s route. The choice of machine learning algorithm depends on the nature of the desired output or objective. In Carol\'s case, her desired output was to safely reach her destination despite the rain. The taxi driver adjusted their route and driving style to ensure Carol\'s safety and maximize efficiency. Similarly, in machine learning, different types of algorithms are suited for specific objectives. Supervised learning algorithms are akin to Carol providing explicit instructions to the taxi driver, such as mentioning preferred routes or landmarks. These algorithms learn from labeled training data, where the desired output is known, and aim to generalize patterns to make accurate predictions. Unsupervised learning algorithms are like Carol giving general directions to the taxi driver without specifying particular routes. These algorithms aim to identify patterns or clusters in the data without predefined desired outputs, uncovering hidden insights and relationships. Reinforcement learning algorithms are analogous to Carol providing feedback and rewards to the taxi driver based on their driving behavior and choices. These algorithms learn through trial and error, maximizing a reward signal, and optimizing decisions in dynamic environments. The selection of the appropriate algorithm depends on the desired output or objective, just as Carol\'s choice of transportation depended on her destination. By defining the desired output clearly, AI practitioners can choose the most suitable algorithm that aligns with their specific problem and maximize the chances of success. In summary, Carol\'s journey in the rain serves as a metaphor for selecting the appropriate type of machine learning algorithm based on the desired output or objective. By understanding and defining the objective clearly, AI practitioners can navigate the vast landscape of algorithms and make informed choices to solve reasoning problems effectively.',
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
            id: 'nature',
            convo: [
                {
                    type: 'text',
                    text: `In the realm of AI, selecting the appropriate type of machine learning algorithm to solve a reasoning problem is similar to Carol\'s decision to choose a taxi. Just as Carol considered the nature of the problem and data she encountered, the concept of the nature of the problem and data plays a vital role in determining the suitable algorithm. The nature of the problem and data in machine learning refers to the characteristics, structure, and patterns present in the dataset, akin to the challenges Carol faced and the information available to her. It helps AI practitioners assess the complexity and requirements of the problem at hand, enabling them to make informed decisions about the algorithm to employ. In Carol\'s case, she faced the challenge of unpredictable weather and the need to navigate through unfamiliar streets. This problem required a flexible approach that could adapt to changing circumstances. Similarly, in machine learning, different types of algorithms are designed to tackle specific problem characteristics and data patterns. Supervised learning algorithms are like Carol relying on a map or GPS to guide the taxi driver. These algorithms require labeled training data, where the desired output is known, and aim to learn patterns to make predictions or classifications based on the provided supervision. Unsupervised learning algorithms are similar to Carol exploring the city without any prior information or guidance. These algorithms analyze the data to uncover hidden patterns, clusters, or structures without the need for labeled examples, providing valuable insights and understanding of the problem space. Reinforcement learning algorithms can be compared to Carol actively learning from her experiences during the journey. They involve an agent interacting with an environment, receiving feedback or rewards based on their actions, and gradually optimizing their decision-making to achieve a defined goal. By understanding the nature of the problem and the data available, AI practitioners can choose the most suitable algorithm, just as Carol chose a taxi to navigate through the city. The characteristics of the problem, such as its complexity, the availability of labeled data, and the desired outcome, guide the selection process. In summary, Carol\'s taxi journey in the rain serves as a metaphor for selecting the appropriate type of machine learning algorithm based on the nature of the problem and data. By carefully considering the problem\'s characteristics and understanding the available data, AI practitioners can make informed decisions, maximizing the algorithm\'s effectiveness and ensuring a successful outcome for solving reasoning problems.`,
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
            id: 'trade-offs',
            convo: [
                {
                    type: 'text',
                    text: `In the realm of AI, selecting the appropriate type of machine learning algorithm to solve a reasoning problem involves considering the trade-offs between interpretability and complexity. This concept can be metaphorically represented by Carol\'s decision to choose between different taxi options, each with its own characteristics. Interpretability in machine learning refers to the ability to understand and explain how the algorithm makes predictions or decisions. Just like a taxi driver who provides clear directions and explanations, interpretable algorithms allow humans to comprehend the reasoning behind the model\'s output. On the other hand, complexity in machine learning refers to the intricacy and sophistication of the algorithm. Complex algorithms can capture intricate patterns and relationships within the data, but they might be challenging to interpret and understand due to their intricate internal workings. Carol faced a similar dilemma while choosing a taxi. Some taxis were straightforward and easy to comprehend, representing interpretable algorithms. These taxis provided clear directions and explanations for each turn, ensuring that Carol understood the route and reasoning behind the driver\'s decisions. However, they might have limited capabilities to handle complex road networks or unique scenarios. Other taxis were more complex, representing algorithms with sophisticated modeling techniques. These taxis could navigate complex road networks, adapt to changing traffic conditions, and optimize the route for maximum efficiency. However, they might lack transparency, making it difficult for Carol to understand the driver\'s decision-making process. To make her decision, Carol had to weigh the trade-offs between interpretability and complexity. She considered the importance of understanding the driver\'s choices versus the efficiency of reaching her destination. Similarly, in AI, practitioners must assess the nature of the problem, the stakeholders\' requirements, and the trade-offs between interpretability and complexity when selecting a machine learning algorithm. In some cases, the problem might demand a high level of interpretability, such as in sensitive domains like healthcare or finance, where understanding the reasoning behind predictions is crucial. In such scenarios, supervised learning algorithms, which often provide more interpretability, might be preferred. In other cases, the problem might involve complex and dynamic patterns, where the primary focus is on performance rather than interpretability. Here, more complex algorithms like deep learning or reinforcement learning, which can handle intricate relationships and adapt to changing circumstances, might be suitable. By considering the trade-offs between interpretability and complexity, AI practitioners can make informed decisions, just as Carol carefully selected the taxi that best suited her needs. They strive to strike a balance between understanding the model\'s reasoning and leveraging its capacity to handle complex reasoning problems. In conclusion, Carol\'s taxi journey in the rain serves as a metaphor for selecting the appropriate type of machine learning algorithm, considering the trade-offs between interpretability and complexity. By understanding the problem requirements, stakeholders\' needs, and the level of interpretability desired, AI practitioners can make the right choice, ensuring a successful solution to reasoning problems.`,
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
            id: 'requirements',
            convo: [
                {
                    type: 'text',
                    text: `As Carol got into the taxi, she noticed a striking similarity between her journey and the process of selecting a machine learning algorithm. Just as she had specific requirements for feedback and decision-making during her taxi ride, AI practitioners consider similar factors when determining which algorithm to use. The concept of requirements for feedback and decision-making in AI relates to the type and availability of feedback or labels provided to the algorithm during the learning process. Feedback plays a crucial role in guiding the algorithm\'s understanding and helping it make accurate predictions or decisions. Different types of machine learning algorithms have varying requirements in terms of the feedback they need to learn effectively. In Carol\'s metaphorical journey, she had different options for receiving feedback and making decisions during her taxi ride, each representing a different type of machine learning algorithm: A) Supervised Learning: Just as Carol could directly instruct the taxi driver, providing specific directions and guidance throughout the journey, supervised learning algorithms rely on labeled training data to learn from examples with clear feedback. This type of algorithm requires a human expert to provide explicit labels or feedback for each input, enabling the model to make accurate predictions based on predefined criteria. B) Unsupervised Learning: Similar to Carol allowing the taxi driver to choose the best route based on their expertise and experience, unsupervised learning algorithms analyze the data without explicit labels or feedback. These algorithms aim to uncover patterns, structures, or relationships within the data on their own, enabling them to make inferences and form clusters or groupings without predefined criteria. C) Reinforcement Learning: Carol experienced reinforcement learning when she engaged in a conversation with the taxi driver, providing feedback in the form of verbal cues, praise for good decisions, or corrective instructions for poor decisions. Reinforcement learning algorithms learn through an interactive process, receiving feedback in the form of rewards or penalties based on their actions. They continually adjust their behavior to maximize the cumulative reward, similar to Carol and the taxi driver optimizing their decisions to reach the destination efficiently. D) Hybrid Approaches: Carol\'s journey might have also involved a combination of approaches, where the taxi driver utilized both their expertise and Carol\'s feedback to make informed decisions. Similarly, hybrid approaches in machine learning combine elements of supervised, unsupervised, and reinforcement learning to leverage the strengths of multiple techniques, creating more robust and adaptable models. In summary, Carol\'s taxi ride serves as a metaphor for the AI concept of selecting the appropriate machine learning algorithm based on the requirements for feedback and decision-making. Just as Carol had different options for receiving feedback and making decisions during her journey, AI practitioners assess the type and availability of feedback, as well as the nature of the reasoning problem, to determine whether supervised, unsupervised, reinforcement learning, or a hybrid approach is most suitable. This careful consideration ensures that the chosen algorithm aligns with the specific requirements of the problem, enabling effective reasoning and decision-making in the world of AI.`,
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
                    text: `Carol arrived at her destination! Now test your knowledge before following Carol to explore her general destination`,
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
                    text: `What does the metaphor of Carol's taxi ride represent in the context of selecting a machine learning algorithm?`,
                },
            ],
            choices: [
                {
                    text: 'Nature of the problem and data',
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
                    text: 'Trade-offs between interpretability and complexity',
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
                    text: 'Requirements for feedback and decision-making',
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
                    text: 'Availability of labeled training data',
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
                    In the story, Carol's decision to take a taxi instead of walking represents which aspect of selecting a machine learning algorithm?`,
                },
            ],
            choices: [
                {
                    text: 'Nature of the problem and data',
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
                    text: 'Trade-offs between interpretability and complexity',
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
                    text: 'Requirements for feedback and decision-making',
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
                    text: 'Availability of labeled training data',
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
                    text: `That’s correct! Next question: What does the rain in the story symbolize in the context of selecting a machine learning algorithm?`,
                },
            ],
            choices: [
                {
                    text: 'Desired output or objective',
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
                    text: 'Nature of the problem and data',
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
                    text: 'Trade-offs between interpretability and complexity',
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
                    text: 'Requirements for feedback and decision-making',
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
                    text: `That’s correct! Next question: The concept of desired output or objective in machine learning refers to:`,
                },
            ],
            choices: [
                {
                    text: 'Defining the goal or target the algorithm should achieve',
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
                    text: 'Analyzing the nature of the problem and data',
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
                    text: 'The availability of labeled training data',
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
                    text: 'Defining the goal or target the algorithm should achieve',
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
                    text: `That’s correct! Next question: What does the metaphor of Carol's general destination represent in the context of selecting a machine learning algorithm?`,
                },
            ],
            choices: [
                {
                    text: 'Desired output or objective',
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
                    text: 'Availability of labeled training data',
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
                    text: 'Nature of the problem and data',
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
                    text: 'Trade-offs between interpretability and complexity',
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
                    text: 'Carol arrives at destination.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'Lost-pasport',
                                        'miss-pasport',
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

export default taxiToDestination
