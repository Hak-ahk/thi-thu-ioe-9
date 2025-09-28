import { Question } from '../types';

export const questions: Question[] = [
    // --- Rearrange Questions ---
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['My family', 'has observed', 'this tradition', 'for years.'],
        correctAnswer: 'My family has observed this tradition for years.',
        hint_vi: 'Câu này dùng thì Hiện tại hoàn thành để nói về một truyền thống kéo dài đến hiện tại.',
        hint_en: 'This sentence uses the Present Perfect tense to talk about a tradition continuing up to the present.',
        rationale_vi: 'Cấu trúc đúng là "Chủ ngữ + has/have + V3/ed + tân ngữ + for + khoảng thời gian".',
        rationale_en: 'The correct structure is "Subject + has/have + V3/ed + object + for + duration".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['My hometown', 'is famous', 'for', 'handicrafts.'],
        correctAnswer: 'My hometown is famous for handicrafts.',
        hint_vi: 'Đây là cấu trúc "to be famous for" (nổi tiếng về/vì cái gì).',
        hint_en: 'This uses the structure "to be famous for" (well-known for something).',
        rationale_vi: 'Cấu trúc "be famous for" có nghĩa là "nổi tiếng về/vì cái gì".',
        rationale_en: 'The structure "be famous for" means "to be well-known for something".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['Thanks to', 'our streets', 'garbage collectors,', 'are clean.'],
        correctAnswer: 'Thanks to garbage collectors, our streets are clean.',
        hint_vi: 'Bắt đầu bằng cụm từ chỉ sự biết ơn, sau đó là mệnh đề chính.',
        hint_en: 'Start with the phrase indicating gratitude, followed by the main clause.',
        rationale_vi: 'Cụm "Thanks to" (nhờ có) đứng ở đầu câu, sau đó là người được nhắc đến, và cuối cùng là kết quả.',
        rationale_en: 'The phrase "Thanks to" (owing to) comes first, followed by the people mentioned, and finally the result (our streets are clean).'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['This culture', 'has been', 'preserved', 'for years.'],
        correctAnswer: 'This culture has been preserved for years.',
        hint_vi: 'Câu này sử dụng thì hiện tại hoàn thành ở dạng bị động.',
        hint_en: 'This sentence uses the Present Perfect tense in the passive voice.',
        rationale_vi: 'Cấu trúc bị động của thì Hiện tại hoàn thành là: "Chủ ngữ + has/have + been + V3/ed".',
        rationale_en: 'The passive structure for Present Perfect is: "Subject + has/have + been + V3/ed".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['You must', 'avoid', 'all the', 'distractions.'],
        correctAnswer: 'You must avoid all the distractions.',
        hint_vi: 'Hãy nhớ rằng động từ theo sau động từ khiếm khuyết (must) là động từ nguyên mẫu không "to".',
        hint_en: 'Remember that a verb following a modal verb (must) is in its base form (infinitive without "to").',
        rationale_vi: 'Cấu trúc đúng là: Chủ ngữ + must + V (nguyên mẫu) + tân ngữ.',
        rationale_en: 'The correct structure is: Subject + must + V (base form) + object.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['The delivery person', 'called me', 'to deliver', 'my orders.'],
        correctAnswer: 'The delivery person called me to deliver my orders.',
        hint_vi: 'Ai đã gọi bạn và để làm gì?',
        hint_en: 'Who called you and for what purpose?',
        rationale_vi: 'Cấu trúc: Chủ ngữ (The delivery person) + Động từ (called) + Tân ngữ (me) + Mục đích (to deliver my orders).',
        rationale_en: 'Structure: Subject (The delivery person) + Verb (called) + Object (me) + Purpose (to deliver my orders).'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["Vinh's family", "moved to", "a new house", "in a suburb."],
        correctAnswer: "Vinh's family moved to a new house in a suburb.",
        hint_vi: 'Câu này mô tả hành động di chuyển đến một nơi ở mới.',
        hint_en: 'This sentence describes the action of moving to a new place.',
        rationale_vi: 'Thứ tự đúng là "Chủ ngữ + động từ + tân ngữ (nơi chốn) + cụm giới từ".',
        rationale_en: 'The correct order is "Subject + verb + object (place) + prepositional phrase".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["I", "haven't had", "any embarrassing", "experiences", "here."],
        correctAnswer: "I haven't had any embarrassing experiences here.",
        hint_vi: 'Đây là câu phủ định ở thì Hiện tại hoàn thành.',
        hint_en: 'This is a negative sentence in the Present Perfect tense.',
        rationale_vi: 'Cấu trúc câu phủ định Hiện tại hoàn thành: "Chủ ngữ + haven\'t/hasn\'t + V3/ed + tân ngữ".',
        rationale_en: 'The structure for a negative Present Perfect sentence is: "Subject + haven\'t/hasn\'t + V3/ed + object".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['I suggest', 'getting around', 'the city', 'by bus.'],
        correctAnswer: 'I suggest getting around the city by bus.',
        hint_vi: 'Động từ "suggest" thường theo sau bởi V-ing.',
        hint_en: 'The verb "suggest" is often followed by a V-ing form.',
        rationale_vi: 'Đúng ngữ pháp: "suggest + V-ing" (gợi ý làm gì). Cụm "get around" (đi lại) và "by bus" (bằng xe buýt).',
        rationale_en: 'Grammatically correct: "suggest + V-ing". The phrase "get around" means "to travel in" and "by bus" indicates the means of transport.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['Bun cha', 'and pho', 'are examples', 'of', 'famous Vietnamese dishes.'],
        correctAnswer: 'Bun cha and pho are examples of famous Vietnamese dishes.',
        hint_vi: 'Món ăn nào là ví dụ của cái gì?',
        hint_en: 'Which dishes are examples of what?',
        rationale_vi: 'Chủ ngữ (Bun cha and pho) + động từ "to be" (are) + bổ ngữ (examples of famous Vietnamese dishes).',
        rationale_en: 'Subject (Bun cha and pho) + verb "to be" (are) + complement (examples of famous Vietnamese dishes).'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['There are', 'many', 'public amenities', 'in the city.'],
        correctAnswer: 'There are many public amenities in the city.',
        hint_vi: 'Cấu trúc chỉ sự tồn tại: "There is/There are".',
        hint_en: 'The structure used to express existence is: "There is/There are".',
        rationale_vi: 'Cụm "There are" được dùng cho danh từ số nhiều (many public amenities). "public amenities" là tiện ích công cộng.',
        rationale_en: '"There are" is used for plural nouns (many public amenities). "Public amenities" refers to public facilities.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["Have you", "ever", "seen", "tribal dance?"],
        correctAnswer: 'Have you ever seen tribal dance?',
        hint_vi: 'Đây là câu hỏi Yes/No ở thì Hiện tại hoàn thành, dùng để hỏi về trải nghiệm.',
        hint_en: 'This is a Yes/No question in the Present Perfect tense, used to ask about experiences.',
        rationale_vi: 'Cấu trúc câu hỏi Yes/No Hiện tại hoàn thành: "Have/Has + chủ ngữ + ever + V3/ed...?".',
        rationale_en: 'The structure for a Yes/No question in Present Perfect is: "Have/Has + subject + ever + V3/ed...?".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["This book's", "theme", "is about", "ancient castles."],
        correctAnswer: "This book's theme is about ancient castles.",
        hint_vi: 'Chủ đề của cuốn sách này là gì?',
        hint_en: "What is the theme of this book?",
        rationale_vi: 'Cấu trúc: Chủ ngữ (This book\'s theme) + động từ (is) + bổ ngữ (about ancient castles).',
        rationale_en: 'Structure: Subject (This book\'s theme) + verb (is) + complement (about ancient castles).'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['When', 'did you', 'explore', 'Son Doong Cave?'],
        correctAnswer: 'When did you explore Son Doong Cave?',
        hint_vi: 'Đây là câu hỏi ở thì Quá khứ đơn, bắt đầu bằng từ hỏi "When".',
        hint_en: 'This is a question in the Simple Past tense, starting with the question word "When".',
        rationale_vi: 'Cấu trúc câu hỏi Quá khứ đơn với từ hỏi: "Wh-word + did + S + V (nguyên mẫu)?".',
        rationale_en: 'The Simple Past Wh-question structure is: "Wh-word + did + S + V (base form)?".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["The skilled", "local artisans", "made", "these vases."],
        correctAnswer: 'The skilled local artisans made these vases.',
        hint_vi: 'Ai đã làm ra những chiếc bình này?',
        hint_en: 'Who made these vases?',
        rationale_vi: 'Câu này theo cấu trúc cơ bản: "Chủ ngữ (The skilled local artisans) + động từ (made) + tân ngữ (these vases)".',
        rationale_en: 'This sentence follows the basic structure: "Subject (The skilled local artisans) + verb (made) + object (these vases)".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["Have you", "ever", "met", "my mother?"],
        correctAnswer: "Have you ever met my mother?",
        hint_vi: 'Đây là câu hỏi về trải nghiệm, sử dụng thì hiện tại hoàn thành.',
        hint_en: 'This is a question about experience, using the Present Perfect tense.',
        rationale_vi: 'Cấu trúc câu hỏi Yes/No thì Hiện tại hoàn thành: Have/Has + S + ever + V3/ed + ...?',
        rationale_en: 'Structure for a Present Perfect Yes/No question: Have/Has + S + ever + V3/ed + ...?'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["There's", "a zoo", "near", "our house."],
        correctAnswer: "There's a zoo near our house.",
        hint_vi: 'Sử dụng cấu trúc "There is" để chỉ sự tồn tại của một vật.',
        hint_en: 'Use the "There is" structure to indicate the existence of something.',
        rationale_vi: 'Cấu trúc câu: There\'s (There is) + danh từ đếm được số ít (a zoo) + cụm giới từ chỉ nơi chốn (near our house).',
        rationale_en: 'Sentence structure: There\'s (There is) + a singular countable noun (a zoo) + a prepositional phrase of place (near our house).'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["The boy", "has heard", "music like that", "before."],
        correctAnswer: 'The boy has heard music like that before.',
        hint_vi: 'Thì hiện tại hoàn thành được dùng để nói về một trải nghiệm trong quá khứ không rõ thời gian.',
        hint_en: 'The Present Perfect tense is used to talk about a past experience at an unspecified time.',
        rationale_vi: 'Cấu trúc: Chủ ngữ + has/have + V3/ed + tân ngữ + (trạng từ). "before" thường đứng cuối câu trong trường hợp này.',
        rationale_en: 'Structure: Subject + has/have + V3/ed + object + (adverb). "before" often comes at the end of the sentence in this context.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["Snorkelling", "in the coral reef", "is", "thrilling."],
        correctAnswer: 'Snorkelling in the coral reef is thrilling.',
        hint_vi: 'Chủ ngữ của câu là một hoạt động (V-ing).',
        hint_en: 'The subject of the sentence is an activity (Gerund).',
        rationale_vi: 'Khi một động từ dạng V-ing (danh động từ) làm chủ ngữ, nó được coi là số ít và đi với động từ "is".',
        rationale_en: 'When a V-ing form (gerund) acts as the subject, it is treated as singular and takes the verb "is".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["Can we", "turn food waste", "into", "energy?"],
        correctAnswer: "Can we turn food waste into energy?",
        hint_vi: 'Đây là câu hỏi Yes/No với động từ khuyết thiếu "Can".',
        hint_en: 'This is a Yes/No question with the modal verb "Can".',
        rationale_vi: 'Cấu trúc câu hỏi: Can + chủ ngữ + động từ + ...? Cụm động từ "turn something into something" có nghĩa là "biến cái gì thành cái gì".',
        rationale_en: 'Question structure: Can + subject + verb + ...? The phrasal verb "turn something into something" means to transform something.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["I know", "how to deal", "with this", "problem."],
        correctAnswer: 'I know how to deal with this problem.',
        hint_vi: 'Cấu trúc "know how to do something" có nghĩa là "biết cách làm gì đó".',
        hint_en: 'The structure "know how to do something" means to have the knowledge or skill to do it.',
        rationale_vi: 'Câu này tuân theo cấu trúc: Chủ ngữ + know + how to + V + tân ngữ.',
        rationale_en: 'The sentence follows the structure: Subject + know + how to + V + object.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ['Traffic congestion', 'usually occurs', 'at rush hour.'],
        correctAnswer: 'Traffic congestion usually occurs at rush hour.',
        hint_vi: 'Cụm từ "Traffic congestion" là chủ ngữ của câu.',
        hint_en: '"Traffic congestion" is the subject of the sentence.',
        rationale_vi: 'Cấu trúc đúng là: Chủ ngữ + trạng từ tần suất + động từ + nơi chốn/thời gian. "at rush hour" (giờ cao điểm) là thời điểm tắc nghẽn giao thông.',
        rationale_en: 'The correct structure is: Subject + frequency adverb + verb + time/place. "at rush hour" is the time when traffic jams occur.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["We", "have seen", "him", "several times."],
        correctAnswer: "We have seen him several times.",
        hint_vi: 'Thì hiện tại hoàn thành diễn tả hành động lặp đi lặp lại trong quá khứ.',
        hint_en: 'The Present Perfect tense expresses an action repeated in the past.',
        rationale_vi: 'Cấu trúc: Chủ ngữ + have/has + V3/ed + tân ngữ. "Several times" là dấu hiệu của thì hiện tại hoàn thành.',
        rationale_en: 'Structure: Subject + have/has + V3/ed + object. "Several times" is a signal for the Present Perfect tense.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["The city", "usually has", "better", "health service", "than the countryside."],
        correctAnswer: 'The city usually has better health service than the countryside.',
        hint_vi: 'Đây là một câu so sánh hơn.',
        hint_en: 'This is a comparative sentence.',
        rationale_vi: 'Câu này so sánh "health service" giữa "the city" và "the countryside", sử dụng tính từ so sánh hơn "better".',
        rationale_en: 'This sentence compares the "health service" between "the city" and "the countryside", using the comparative adjective "better".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["My sister", "is untidy,", "but", "she studies", "very well."],
        correctAnswer: 'My sister is untidy, but she studies very well.',
        hint_vi: 'Liên từ "but" được dùng để nối hai mệnh đề có ý nghĩa tương phản.',
        hint_en: 'The conjunction "but" is used to connect two clauses with contrasting ideas.',
        rationale_vi: 'Mệnh đề thứ nhất mô tả một tính cách tiêu cực (is untidy), mệnh đề thứ hai mô tả một thói quen tích cực (studies very well), được nối với nhau bằng "but".',
        rationale_en: 'The first clause describes a negative trait (is untidy), and the second describes a positive habit (studies very well), connected by "but".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["I didn't", "answer the", "question because", "I couldn't", "study."],
        correctAnswer: "I didn't answer the question because I couldn't study.",
        hint_vi: 'Mệnh đề chỉ kết quả đứng trước, mệnh đề chỉ nguyên nhân đứng sau "because".',
        hint_en: 'The result clause comes first, followed by the reason clause after "because".',
        rationale_vi: 'Câu này giải thích lý do tại sao "tôi không trả lời câu hỏi" (kết quả) là vì "tôi không thể học" (nguyên nhân).',
        rationale_en: 'This sentence explains the reason why "I didn\'t answer the question" (result) was "because I couldn\'t study" (reason).'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["She", "was going", "snorkelling", "in the sea", "when I arrived."],
        correctAnswer: 'She was going snorkelling in the sea when I arrived.',
        hint_vi: 'Một hành động đang diễn ra trong quá khứ thì bị một hành động khác xen vào.',
        hint_en: 'An action was in progress in the past when another action interrupted it.',
        rationale_vi: 'Dùng thì Quá khứ tiếp diễn (was going snorkelling) cho hành động đang xảy ra, và Quá khứ đơn (arrived) cho hành động xen vào.',
        rationale_en: 'Use the Past Continuous (was going snorkelling) for the ongoing action, and the Simple Past (arrived) for the interrupting action.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["Was he", "watching TV", "when she", "came back", "last night?"],
        correctAnswer: 'Was he watching TV when she came back last night?',
        hint_vi: 'Đây là câu hỏi về một hành động đang diễn ra thì bị xen vào trong quá khứ.',
        hint_en: 'This is a question about an ongoing action that was interrupted in the past.',
        rationale_vi: 'Cấu trúc câu hỏi: Was/Were + S + V-ing ... when + S + V2/ed ...?',
        rationale_en: 'Question structure: Was/Were + S + V-ing ... when + S + V2/ed ...?'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["The more peaceful", "the village is,", "the more", "comfortable I feel."],
        correctAnswer: 'The more peaceful the village is, the more comfortable I feel.',
        hint_vi: 'Câu này sử dụng cấu trúc so sánh kép (càng... càng...).',
        hint_en: 'This sentence uses the double comparative structure (the more... the more...).',
        rationale_vi: 'Cấu trúc so sánh kép là "The + so sánh hơn + S + V, the + so sánh hơn + S + V".',
        rationale_en: 'The double comparative structure is "The + comparative + S + V, the + comparative + S + V".'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["The best way", "to preserve", "our cultural", "heritage is", "to pass", "it down", "to the next generations."],
        correctAnswer: 'The best way to preserve our cultural heritage is to pass it down to the next generations.',
        hint_vi: 'Cách tốt nhất để làm gì... là làm gì...',
        hint_en: 'The best way to do something... is to do something...',
        rationale_vi: 'Cấu trúc "The best way + to V... is + to V..." được dùng để chỉ ra phương pháp tốt nhất. "pass down" là một cụm động từ có nghĩa là truyền lại.',
        rationale_en: 'The structure "The best way + to V... is + to V..." is used to indicate the best method. "Pass down" is a phrasal verb meaning to transmit.'
    },
    {
        type: 'rearrange',
        question: 'Sắp xếp các từ/cụm từ sau thành câu đúng:',
        words: ["The sooner", "you finish", "your deadline,", "the less", "you will worry", "or get stressed."],
        correctAnswer: 'The sooner you finish your deadline, the less you will worry or get stressed.',
        hint_vi: 'Một ví dụ khác của cấu trúc so sánh kép (càng sớm... càng ít...).',
        hint_en: 'Another example of the double comparative structure (the sooner... the less...).',
        rationale_vi: 'Cấu trúc: The + so sánh hơn..., the + so sánh hơn... "Sooner" là dạng so sánh hơn của "soon", và "less" là dạng so sánh hơn của "little".',
        rationale_en: 'Structure: The + comparative..., the + comparative... "Sooner" is the comparative of "soon", and "less" is the comparative of "little".'
    },
    
    // --- Fill In The Blank Questions ---
    {
        type: 'fill-in-the-blank',
        question: 'The girl\'s family went to the beach by ____.',
        correctAnswer: 'bus',
        hint_vi: 'Đây là một phương tiện giao thông công cộng. (3 ký tự)',
        hint_en: 'This is a form of public transportation. (3 characters)',
        rationale_vi: '"by bus" là cách nói phổ biến cho việc di chuyển bằng xe buýt.',
        rationale_en: '"by bus" is the common phrase for traveling on a bus.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Ly Thai To was the ____ emperor of the Ly dynasty.',
        correctAnswer: 'first',
        hint_vi: 'Từ này chỉ thứ tự đứng đầu. (5 ký tự)',
        hint_en: 'This word indicates the primary position in a sequence. (5 characters)',
        rationale_vi: 'Lý Thái Tổ là vị hoàng đế đầu tiên của triều Lý.',
        rationale_en: 'Ly Thai To was the first emperor of the Ly dynasty.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'We ____ and decorate houses before Tet.',
        correctAnswer: 'clean',
        hint_vi: 'Hoạt động này thường đi đôi với "decorate" (trang trí) để chuẩn bị cho Tết. (5 ký tự)',
        hint_en: 'This activity usually goes hand-in-hand with "decorate" in preparation for Tet. (5 characters)',
        rationale_vi: '"Clean" (dọn dẹp) là hành động phổ biến nhất được thực hiện cùng với "decorate" (trang trí) nhà cửa trước Tết.',
        rationale_en: '"Clean" is the most common action performed along with "decorate" before Tet.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'I feel very ____ and have a bad cough.',
        correctAnswer: 'tired',
        hint_vi: 'Từ này mô tả cảm giác mệt mỏi, thường là dấu hiệu của việc bị ốm. (5 ký tự)',
        hint_en: 'This word describes a feeling of low energy, often a symptom of illness. (5 characters)',
        rationale_vi: '"Tired" (mệt mỏi) là một cảm giác hợp lý khi đi kèm với "a bad cough" (ho nặng), biểu thị tình trạng sức khỏe không tốt.',
        rationale_en: '"Tired" is a logical feeling to accompany "a bad cough", indicating a poor state of health.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Taking a shortcut through the park will ____ your travel time.',
        correctAnswer: 'shorten',
        hint_vi: 'Hành động này làm cho thời gian di chuyển ngắn lại. (7 ký tự)',
        hint_en: 'This action makes the travel time shorter. (7 characters)',
        rationale_vi: 'Động từ "shorten" có nghĩa là "làm cho ngắn lại".',
        rationale_en: 'The verb "shorten" means "to make shorter".'
    },
    {
        type: 'fill-in-the-blank',
        question: '____ have feathers.',
        correctAnswer: 'Birds',
        hint_vi: 'Đây là loài động vật có cánh và thường biết bay. (5 ký tự)',
        hint_en: 'This is an animal that has wings and can usually fly. (5 characters)',
        rationale_vi: '"Birds" (chim) là loài động vật có "feathers" (lông vũ).',
        rationale_en: '"Birds" are animals that have "feathers".'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The boys ____ dinner.',
        correctAnswer: 'had',
        hint_vi: 'Sử dụng dạng quá khứ của động từ "have" trong cụm từ "have dinner". (3 ký tự)',
        hint_en: 'Use the past tense of the verb "have" in the phrase "have dinner". (3 characters)',
        rationale_vi: 'Cụm từ "have dinner" có nghĩa là "ăn tối". Ở thì quá khứ, nó trở thành "had dinner".',
        rationale_en: 'The phrase "have dinner" means to eat the evening meal. In the past tense, it becomes "had dinner".'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Jack ____ not like spicy food. He prefers sweet things.',
        correctAnswer: 'does',
        hint_vi: 'Đây là câu phủ định ở thì hiện tại đơn với chủ ngữ ngôi thứ ba số ít. (4 ký tự)',
        hint_en: 'This is a negative sentence in the simple present tense with a third-person singular subject. (4 characters)',
        rationale_vi: 'Để tạo câu phủ định cho động từ thường ở thì hiện tại đơn với chủ ngữ "He/She/It", ta dùng "does not" (hoặc "doesn\'t").',
        rationale_en: 'To form a negative sentence for a regular verb in the simple present with "He/She/It", we use "does not" (or "doesn\'t").'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Do you understand ____ to play this ancient game?',
        correctAnswer: 'how',
        hint_vi: 'Từ để hỏi này dùng để hỏi về cách thức, phương pháp. (3 ký tự)',
        hint_en: 'This question word is used to ask about the manner or method. (3 characters)',
        rationale_vi: '"How to play" có nghĩa là "cách chơi". Đây là cấu trúc đúng để hỏi về phương pháp thực hiện một việc gì đó.',
        rationale_en: '"How to play" means "the method of playing". This is the correct structure for asking about the method of doing something.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Sushi is the national ____ of Japan.',
        correctAnswer: 'dish',
        hint_vi: 'Từ này có nghĩa là một món ăn đặc trưng. (4 ký tự)',
        hint_en: 'This word means a particular variety of food. (4 characters)',
        rationale_vi: '"Dish" (món ăn) là từ phù hợp. "National dish" có nghĩa là món ăn quốc gia.',
        rationale_en: '"Dish" is the correct word. "National dish" means a country\'s signature food.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The children ____ their grandparents on Sundays.',
        correctAnswer: 'visit',
        hint_vi: 'Hành động này xảy ra thường xuyên vào các ngày Chủ nhật, sử dụng thì Hiện tại đơn. (5 ký tự)',
        hint_en: 'This action happens regularly on Sundays, use the Simple Present tense. (5 characters)',
        rationale_vi: 'Với chủ ngữ số nhiều "The children", động từ ở thì hiện tại đơn giữ nguyên mẫu.',
        rationale_en: 'With the plural subject "The children", the verb in the Simple Present tense remains in its base form.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'People can learn to shape clay into bowls and vases in this ____ class.',
        correctAnswer: 'art',
        hint_vi: 'Hoạt động này liên quan đến nghệ thuật và sự khéo léo. (3 ký tự)',
        hint_en: 'This activity is related to art and craftsmanship. (3 characters)',
        rationale_vi: 'Lớp học nặn gốm là một "art class" (lớp học nghệ thuật).',
        rationale_en: 'A pottery class is an "art class".'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The kids wish they ____ near the beach so that they could swim all day.',
        correctAnswer: 'lived',
        hint_vi: 'Câu điều ước ở hiện tại sử dụng động từ ở thì quá khứ đơn. (5 ký tự)',
        hint_en: 'A wish about the present uses a verb in the simple past tense. (5 characters)',
        rationale_vi: 'Cấu trúc câu điều ước cho hiện tại: S + wish(es) + S + V2/ed.',
        rationale_en: 'The structure for a present wish is: S + wish(es) + S + V2/ed.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The ____ collects waste of our neighbourhood every Tuesday.',
        correctAnswer: 'collector',
        hint_vi: 'Người làm công việc thu gom. (9 ký tự)',
        hint_en: 'The person whose job is to collect things. (9 characters)',
        rationale_vi: '"Garbage collector" là người thu gom rác. Trong ngữ cảnh này, "collector" là đủ.',
        rationale_en: 'A "garbage collector" is a person who collects trash. In this context, "collector" is sufficient.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The village road is narrower ____ it used to be.',
        correctAnswer: 'than',
        hint_vi: 'Đây là một câu so sánh hơn. (4 ký tự)',
        hint_en: 'This is a comparative sentence. (4 characters)',
        rationale_vi: 'Trong cấu trúc so sánh hơn với tính từ ngắn (narrower), ta dùng "than" để giới thiệu đối tượng được so sánh.',
        rationale_en: 'In a comparative structure with a short adjective (narrower), we use "than" to introduce the thing being compared.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'They ____ their grandparents every summer.',
        correctAnswer: 'visit',
        hint_vi: 'Đây là một hành động lặp đi lặp lại vào mỗi mùa hè, nên dùng thì hiện tại đơn. (5 ký tự)',
        hint_en: 'This is a repeated action every summer, so use the simple present tense. (5 characters)',
        rationale_vi: 'Với chủ ngữ "They", động từ ở thì hiện tại đơn được giữ nguyên mẫu.',
        rationale_en: 'With the subject "They", the verb in the simple present tense remains in its base form.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'We ____ dinner when it rained.',
        correctAnswer: 'had',
        hint_vi: 'Sử dụng dạng quá khứ của động từ "have". (3 ký tự)',
        hint_en: 'Use the past form of the verb "have". (3 characters)',
        rationale_vi: 'Cả hai hành động "ăn tối" và "trời mưa" đều xảy ra trong quá khứ.',
        rationale_en: 'Both actions "had dinner" and "rained" occurred in the past.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The bookshop ____ at 9 P.M every day.',
        correctAnswer: 'closes',
        hint_vi: 'Hành động này xảy ra hàng ngày, và chủ ngữ là số ít. (6 ký tự)',
        hint_en: 'This action happens daily, and the subject is singular. (6 characters)',
        rationale_vi: 'Ở thì hiện tại đơn, với chủ ngữ ngôi thứ ba số ít ("The bookshop"), ta thêm "s" vào sau động từ.',
        rationale_en: 'In the simple present tense, with a third-person singular subject ("The bookshop"), we add "s" to the verb.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Richard always ____ to music in his free time.',
        correctAnswer: 'listens',
        hint_vi: '"Always" là dấu hiệu của thì hiện tại đơn, và chủ ngữ là "Richard". (7 ký tự)',
        hint_en: '"Always" indicates the simple present tense, and the subject is "Richard". (7 characters)',
        rationale_vi: 'Với chủ ngữ ngôi thứ ba số ít ở thì hiện tại đơn, động từ "listen" phải được thêm "s".',
        rationale_en: 'With a third-person singular subject in the simple present tense, the verb "listen" must have an "s" added.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The girl is ____ for the business program here.',
        correctAnswer: 'applying',
        hint_vi: 'Sau động từ "to be", động từ chính thường ở dạng V-ing để tạo thì tiếp diễn. (8 ký tự)',
        hint_en: 'After the verb "to be", the main verb is often in the V-ing form to create a continuous tense. (8 characters)',
        rationale_vi: 'Thì hiện tại tiếp diễn (is applying) được dùng để mô tả một hành động đang diễn ra.',
        rationale_en: 'The present continuous tense (is applying) is used to describe an action in progress.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'James is wondering ____ to go for the holidays.',
        correctAnswer: 'where',
        hint_vi: 'Anh ấy đang tự hỏi về một địa điểm. (5 ký tự)',
        hint_en: 'He is asking himself about a location. (5 characters)',
        rationale_vi: '"Wondering where to go" có nghĩa là "phân vân không biết nên đi đâu".',
        rationale_en: '"Wondering where to go" means "to be unsure about which place to go".'
    },
    {
        type: 'fill-in-the-blank',
        question: 'We looked around ____ local temple complex.',
        correctAnswer: 'the',
        hint_vi: 'Sử dụng mạo từ xác định khi nói về một địa điểm cụ thể. (3 ký tự)',
        hint_en: 'Use the definite article when talking about a specific place. (3 characters)',
        rationale_vi: 'Vì "local temple complex" là một địa điểm cụ thể và xác định, ta dùng mạo từ "the".',
        rationale_en: 'Because the "local temple complex" is a specific and definite place, we use the article "the".'
    },
    {
        type: 'fill-in-the-blank',
        question: 'John often ____ football with his friends after school.',
        correctAnswer: 'plays',
        hint_vi: '"Often" là dấu hiệu của thì hiện tại đơn. Chủ ngữ là "John". (5 ký tự)',
        hint_en: '"Often" is a sign of the simple present tense. The subject is "John". (5 characters)',
        rationale_vi: 'Với chủ ngữ ngôi thứ ba số ít ("John") ở thì hiện tại đơn, động từ "play" phải được thêm "s".',
        rationale_en: 'With the third-person singular subject "John" in the simple present tense, the verb "play" must have an "s" added.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Nha Trang is a beautiful ____ city in Viet Nam.',
        correctAnswer: 'coast',
        hint_vi: 'Thành phố này nằm cạnh biển. (5 ký tự)',
        hint_en: 'This city is located next to the sea. (5 characters)',
        rationale_vi: '"Coast city" có nghĩa là thành phố ven biển.',
        rationale_en: '"Coast city" means a city on the coast.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'I usually ____ up early in the morning and get ready for school.',
        correctAnswer: 'wake',
        hint_vi: 'Cụm động từ có nghĩa là "thức dậy". (4 ký tự)',
        hint_en: 'A phrasal verb that means "to stop sleeping". (4 characters)',
        rationale_vi: 'Cụm động từ "wake up" có nghĩa là thức dậy. "Usually" là dấu hiệu của thì hiện tại đơn.',
        rationale_en: 'The phrasal verb "wake up" means to stop sleeping. "Usually" indicates the simple present tense.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Poor posture can lead to ____ pain over time.',
        correctAnswer: 'shoulder',
        hint_vi: 'Đây là một bộ phận của cơ thể, nằm giữa cổ và cánh tay. (8 ký tự)',
        hint_en: 'This is a body part between the neck and the arm. (8 characters)',
        rationale_vi: '"Shoulder pain" là đau vai, một vấn đề phổ biến do tư thế xấu.',
        rationale_en: '"Shoulder pain" is a common problem resulting from poor posture.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'We must give back to the community by ____ volunteer work.',
        correctAnswer: 'doing',
        hint_vi: 'Sau giới từ "by", động từ thường ở dạng V-ing. (5 ký tự)',
        hint_en: 'After the preposition "by", the verb is usually in the V-ing form. (5 characters)',
        rationale_vi: 'Sau giới từ, động từ phải ở dạng danh động từ (V-ing). Cụm từ là "do volunteer work".',
        rationale_en: 'After a preposition, the verb must be in its gerund form (V-ing). The phrase is "do volunteer work".'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Public ____ is an eco-friendly way to travel.',
        correctAnswer: 'transport',
        hint_vi: 'Từ này có nghĩa là hệ thống giao thông công cộng. (9 ký tự)',
        hint_en: 'This word refers to the system of public vehicles. (9 characters)',
        rationale_vi: '"Public transport" (giao thông công cộng) là một phương tiện đi lại thân thiện với môi trường.',
        rationale_en: '"Public transport" is an eco-friendly way to travel.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'My teacher gave me ____ on how to prepare for the exam.',
        correctAnswer: 'advice',
        hint_vi: 'Đây là một danh từ không đếm được, có nghĩa là "lời khuyên". (6 ký tự)',
        hint_en: 'This is an uncountable noun meaning "recommendation". (6 characters)',
        rationale_vi: '"Advice" là danh từ có nghĩa là lời khuyên. Chú ý không nhầm với "advise" (động từ).',
        rationale_en: '"Advice" is the noun meaning recommendation. Note the difference from "advise" (the verb).'
    },
    {
        type: 'fill-in-the-blank',
        question: 'I\'ll ____ you up at the train station after work.',
        correctAnswer: 'pick',
        hint_vi: 'Cụm động từ này có nghĩa là "đón ai đó". (4 ký tự)',
        hint_en: 'This phrasal verb means "to collect someone". (4 characters)',
        rationale_vi: '"Pick someone up" là một cụm động từ phổ biến có nghĩa là đi đến một nơi nào đó để đón ai đó.',
        rationale_en: '"Pick someone up" is a common phrasal verb meaning to go somewhere to collect someone.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The event aims to ____ traditional crafts to tourists.',
        correctAnswer: 'promote',
        hint_vi: 'Động từ này có nghĩa là quảng bá, thúc đẩy. (7 ký tự)',
        hint_en: 'This verb means to publicize or encourage. (7 characters)',
        rationale_vi: 'Sau "aims to" là một động từ nguyên mẫu. "Promote" có nghĩa là quảng bá.',
        rationale_en: 'After "aims to" we use an infinitive verb. "Promote" means to publicize.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Sarah is living in a(n) ____ in the city centre.',
        correctAnswer: 'apartment',
        hint_vi: 'Đây là một loại nhà ở trong một tòa nhà lớn. (9 ký tự)',
        hint_en: 'This is a type of residence within a larger building. (9 characters)',
        rationale_vi: '"Apartment" (căn hộ) là một nơi ở phổ biến ở trung tâm thành phố. Nó bắt đầu bằng một nguyên âm nên đi với "an".',
        rationale_en: 'An "apartment" is a common type of housing in a city centre. It begins with a vowel, so it takes "an".'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Her husband travels a lot in his job, showing ____ round different cities.',
        correctAnswer: 'people',
        hint_vi: 'Anh ấy dẫn ai đó đi tham quan các thành phố. (6 ký tự)',
        hint_en: 'He takes someone on a tour of the cities. (6 characters)',
        rationale_vi: 'Cụm từ "show people round" có nghĩa là dẫn người khác đi tham quan.',
        rationale_en: 'The phrase "show people round" means to guide others on a tour.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The ____ pumps blood to all parts of the body.',
        correctAnswer: 'heart',
        hint_vi: 'Đây là một cơ quan quan trọng trong cơ thể bạn. (5 ký tự)',
        hint_en: 'This is a vital organ in your body. (5 characters)',
        rationale_vi: 'Trái tim (heart) là cơ quan bơm máu đi khắp cơ thể.',
        rationale_en: 'The heart is the organ that pumps blood around the body.'
    },
    {
        type: 'fill-in-the-blank',
        question: 'Farmers ____ down their tools to the next generation.',
        correctAnswer: 'pass',
        hint_vi: 'Cụm động từ có nghĩa là "truyền lại". (4 ký tự)',
        hint_en: 'A phrasal verb meaning "to transmit". (4 characters)',
        rationale_vi: '"Pass down" có nghĩa là truyền lại (từ thế hệ này sang thế hệ khác).',
        rationale_en: '"Pass down" means to transmit (from one generation to the next).'
    },
    {
        type: 'fill-in-the-blank',
        question: 'The roads near the construction site ____ very dusty.',
        correctAnswer: 'are',
        hint_vi: 'Chủ ngữ "The roads" là số nhiều. (3 ký tự)',
        hint_en: 'The subject "The roads" is plural. (3 characters)',
        rationale_vi: 'Với chủ ngữ số nhiều ở thì hiện tại, ta dùng động từ "to be" là "are".',
        rationale_en: 'With a plural subject in the present tense, we use the "to be" verb "are".'
    },
    
    // --- Multiple Choice Questions ---
    {
        type: 'mc',
        question: 'Jack bought a book for 215 dollars and a notebook for 85 dollars. How much did he spend in total?',
        options: [
            { text: '350 dollars', isCorrect: false },
            { text: '290 dollars', isCorrect: false },
            { text: '310 dollars', isCorrect: false },
            { text: '300 dollars', isCorrect: true }
        ],
        correctAnswer: '300 dollars',
        hint_vi: 'Đây là một bài toán cộng đơn giản.',
        hint_en: 'This is a simple addition problem.',
        rationale_vi: 'Tổng số tiền Jack đã chi là 215 + 85 = 300 đô la.',
        rationale_en: 'The total amount Jack spent is 215 + 85 = 300 dollars.'
    },
    {
        type: 'mc',
        question: 'The square of 4 is 16. What is the square of 15?',
        options: [
            { text: '224', isCorrect: false },
            { text: '225', isCorrect: true },
            { text: '220', isCorrect: false },
            { text: '200', isCorrect: false }
        ],
        correctAnswer: '225',
        hint_vi: 'Bình phương của một số là số đó nhân với chính nó.',
        hint_en: 'The square of a number is that number multiplied by itself.',
        rationale_vi: 'Bình phương của 15 là 15 x 15 = 225.',
        rationale_en: 'The square of 15 is 15 x 15 = 225.'
    },
    {
        type: 'mc',
        question: 'Doing exercise regularly helps you improve your ____.',
        options: [
            { text: 'due date', isCorrect: false },
            { text: 'distraction', isCorrect: false },
            { text: 'physical health', isCorrect: true },
            { text: 'delay', isCorrect: false }
        ],
        correctAnswer: 'physical health',
        hint_vi: 'Tập thể dục tốt cho cơ thể của bạn.',
        hint_en: 'Exercise is good for your body.',
        rationale_vi: 'Tập thể dục thường xuyên giúp cải thiện "physical health" (sức khỏe thể chất).',
        rationale_en: 'Regular exercise helps to improve "physical health".'
    },
    {
        type: 'mc',
        question: 'People can learn to shape clay into bowls and vases in this ____ class.',
        options: [
            { text: 'delivery', isCorrect: false },
            { text: 'garbage', isCorrect: false },
            { text: 'pottery', isCorrect: true },
            { text: 'cooking', isCorrect: false }
        ],
        correctAnswer: 'pottery',
        hint_vi: 'Môn nghệ thuật làm đồ vật bằng đất sét được gọi là gì?',
        hint_en: 'What is the art of making objects from clay called?',
        rationale_vi: '"Pottery class" là lớp học làm gốm, nơi người ta học cách nặn đất sét.',
        rationale_en: 'A "pottery class" is where people learn to shape clay.'
    },
    {
        type: 'mc',
        question: 'If you need advice, you should meet the school ____.',
        options: [
            { text: 'counsellor', isCorrect: true },
            { text: 'distraction', isCorrect: false },
            { text: 'roommate', isCorrect: false },
            { text: 'priority', isCorrect: false }
        ],
        correctAnswer: 'counsellor',
        hint_vi: 'Đây là người chuyên đưa ra lời khuyên ở trường học.',
        hint_en: 'This is a person who gives advice in a school.',
        rationale_vi: '"School counsellor" là nhà tư vấn học đường, người giúp đỡ học sinh về các vấn đề cá nhân và học tập.',
        rationale_en: 'A "school counsellor" is a person who helps students with personal and academic issues.'
    },
    {
        type: 'mc',
        question: 'Choose the correct sentence.',
        options: [
            { text: "High levels of pollution in big cities can affecting people's health.", isCorrect: false },
            { text: "High levels of pollution in big cities can affect people's health.", isCorrect: true },
            { text: "High levels of pollution in big cities can affects people's health.", isCorrect: false },
            { text: "High levels of pollution in big cities can affect people's healthy.", isCorrect: false }
        ],
        correctAnswer: "High levels of pollution in big cities can affect people's health.",
        hint_vi: 'Sau động từ khuyết thiếu "can", động từ phải ở dạng nguyên mẫu.',
        hint_en: 'After the modal verb "can", the verb must be in its base form.',
        rationale_vi: 'Cấu trúc đúng là "can + V (nguyên mẫu)". "Affect" là động từ, còn "health" là danh từ.',
        rationale_en: 'The correct structure is "can + V (base form)". "Affect" is a verb, and "health" is a noun.'
    },
    {
        type: 'mc',
        question: 'Choose the word that differs from the other three in the position of stress.',
        options: [
            { text: 'occupied', isCorrect: false },
            { text: 'performance', isCorrect: true },
            { text: 'structure', isCorrect: false },
            { text: 'monument', isCorrect: false }
        ],
        correctAnswer: 'performance',
        hint_vi: 'Tìm từ có trọng âm ở âm tiết thứ hai.',
        hint_en: 'Find the word with the stress on the second syllable.',
        rationale_vi: 'Trọng âm của "performance" rơi vào âm tiết thứ hai (per-FOR-mance), trong khi các từ còn lại có trọng âm ở âm tiết đầu tiên (OC-cu-pied, STRUC-ture, MON-u-ment).',
        rationale_en: 'The stress in "performance" is on the second syllable (per-FOR-mance), while the others are stressed on the first syllable (OC-cu-pied, STRUC-ture, MON-u-ment).'
    },
    {
        type: 'mc',
        question: 'Choose the word whose <u>ou</u>nderlined part differs from the other three in pronunciation.',
        options: [
            { text: 'alth<u>ou</u>gh', isCorrect: false },
            { text: 'am<u>ou</u>nt', isCorrect: true },
            { text: 'm<u>ou</u>ntain', isCorrect: true },
            { text: 'surr<u>ou</u>nd', isCorrect: true }
        ],
        correctAnswer: 'although',
        hint_vi: 'Ba từ có âm /aʊ/ và một từ có âm /əʊ/.',
        hint_en: 'Three words have the /aʊ/ sound, and one has the /əʊ/ sound.',
        rationale_vi: 'Phần gạch chân trong "although" được phát âm là /əʊ/, trong khi ở các từ còn lại, nó được phát âm là /aʊ/. Lưu ý: có thể có lỗi trong đề gốc, vì amount, mountain, và surround đều có âm /aʊ/. Although là khác biệt.',
        rationale_en: 'The underlined part in "although" is pronounced /əʊ/, whereas in the other words it is pronounced /aʊ/. Note: there might be an error in the original question as amount, mountain, and surround all have the /aʊ/ sound. Although is the different one.'
    },
    {
        type: 'mc',
        question: 'She ____ her job for 3 weeks.',
        options: [
            { text: 'has change', isCorrect: false },
            { text: 'have changed', isCorrect: false },
            { text: 'has changed', isCorrect: true },
            { text: 'have change', isCorrect: false }
        ],
        correctAnswer: 'has changed',
        hint_vi: 'Câu này sử dụng thì Hiện tại hoàn thành với chủ ngữ "She".',
        hint_en: 'This sentence uses the Present Perfect tense with the subject "She".',
        rationale_vi: 'Cấu trúc thì Hiện tại hoàn thành là "S + has/have + V3/ed". Với chủ ngữ "She", ta dùng "has".',
        rationale_en: 'The Present Perfect structure is "S + has/have + V3/ed". With the subject "She", we use "has".'
    },
    {
        type: 'mc',
        question: '"8 is divisible by 2 and 4. What number is divisible by 5?"',
        options: [
            { text: '56', isCorrect: false },
            { text: '24', isCorrect: false },
            { text: '22', isCorrect: false },
            { text: '65', isCorrect: true }
        ],
        correctAnswer: '65',
        hint_vi: 'Số chia hết cho 5 thường có chữ số cuối cùng là 0 hoặc 5.',
        hint_en: 'Numbers divisible by 5 usually end in 0 or 5.',
        rationale_vi: 'Trong các lựa chọn, chỉ có 65 có chữ số cuối cùng là 5, nên nó chia hết cho 5.',
        rationale_en: 'Of the options, only 65 ends in a 5, so it is divisible by 5.'
    },
    {
        type: 'mc',
        question: "Our cousin couldn't decide ____ to eat for dinner.",
        options: [
            { text: 'who', isCorrect: false },
            { text: 'what', isCorrect: true },
            { text: 'why', isCorrect: false },
            { text: 'whose', isCorrect: false }
        ],
        correctAnswer: 'what',
        hint_vi: 'Họ không quyết định được "cái gì" để ăn.',
        hint_en: 'They couldn\'t decide on "the thing" to eat.',
        rationale_vi: 'Cấu trúc "decide what to do" (quyết định làm gì) là cấu trúc phổ biến. Ở đây là "decide what to eat" (quyết định ăn gì).',
        rationale_en: 'The structure "decide what to do" is common. Here, it is "decide what to eat".'
    },
    {
        type: 'mc',
        question: 'Thank you for your cooperation in making the Chicago Marathon a ____.',
        options: [
            { text: 'success', isCorrect: true },
            { text: 'succeed', isCorrect: false },
            { text: 'successful', isCorrect: false },
            { text: 'successfully', isCorrect: false }
        ],
        correctAnswer: 'success',
        hint_vi: 'Sau mạo từ "a", ta cần một danh từ.',
        hint_en: 'After the article "a", a noun is needed.',
        rationale_vi: '"Success" là danh từ (sự thành công). "Succeed" là động từ, "successful" là tính từ, và "successfully" là trạng từ.',
        rationale_en: '"Success" is the noun. "Succeed" is the verb, "successful" is the adjective, and "successfully" is the adverb.'
    },
    {
        type: 'mc',
        question: 'The less sugar you eat, the ____ you will be.',
        options: [
            { text: 'healthiest', isCorrect: false },
            { text: 'healthily', isCorrect: false },
            { text: 'healthier', isCorrect: true },
            { text: 'healthy', isCorrect: false }
        ],
        correctAnswer: 'healthier',
        hint_vi: 'Đây là cấu trúc so sánh kép (càng... càng...).',
        hint_en: 'This is a double comparative structure (the... the...).',
        rationale_vi: 'Cấu trúc so sánh kép yêu cầu dạng so sánh hơn của tính từ. Dạng so sánh hơn của "healthy" là "healthier".',
        rationale_en: 'The double comparative structure requires the comparative form of the adjective. The comparative of "healthy" is "healthier".'
    },
    {
        type: 'mc',
        question: 'Choose the word that differs from the other three in the position of stress.',
        options: [
            { text: 'prefer', isCorrect: false },
            { text: 'balance', isCorrect: true },
            { text: 'explore', isCorrect: false },
            { text: 'connect', isCorrect: false }
        ],
        correctAnswer: 'balance',
        hint_vi: 'Tìm từ có trọng âm ở âm tiết thứ nhất.',
        hint_en: 'Find the word with stress on the first syllable.',
        rationale_vi: 'Trọng âm của "balance" rơi vào âm tiết đầu (BA-lance), trong khi các từ còn lại có trọng âm ở âm tiết thứ hai (pre-FER, ex-PLORE, con-NECT).',
        rationale_en: 'The stress in "balance" is on the first syllable (BA-lance), while the others are stressed on the second syllable (pre-FER, ex-PLORE, con-NECT).'
    },
    {
        type: 'mc',
        question: '"What\'s the matter with the girl?"',
        options: [
            { text: 'She has a fever.', isCorrect: true },
            { text: 'She has a backache.', isCorrect: false },
            { text: 'She has a stomach ache.', isCorrect: false },
            { text: 'She has a headache.', isCorrect: false }
        ],
        correctAnswer: 'She has a fever.',
        hint_vi: 'Câu trả lời hợp lý nhất cho câu hỏi chung về sức khỏe.',
        hint_en: 'The most logical answer to a general health question.',
        rationale_vi: 'Đây là một câu hỏi tình huống, và "She has a fever" (Cô ấy bị sốt) là một câu trả lời phổ biến và phù hợp.',
        rationale_en: 'This is a situational question, and "She has a fever" is a common and appropriate response.'
    },
    {
        type: 'mc',
        question: 'Choose the word that differs from the other three in the position of stress.',
        options: [
            { text: 'function', isCorrect: false },
            { text: 'metro', isCorrect: false },
            { text: 'preserve', isCorrect: true },
            { text: 'leftover', isCorrect: false }
        ],
        correctAnswer: 'preserve',
        hint_vi: 'Tìm từ có trọng âm ở âm tiết thứ hai.',
        hint_en: 'Find the word with stress on the second syllable.',
        rationale_vi: 'Trọng âm của "preserve" rơi vào âm tiết thứ hai (pre-SERVE), trong khi các từ còn lại có trọng âm ở âm tiết đầu tiên.',
        rationale_en: 'The stress in "preserve" is on the second syllable (pre-SERVE), while the others are stressed on the first.'
    },
    {
        type: 'mc',
        question: 'When I first participated in a marathon, I was nervous but ____ to win.',
        options: [
            { text: 'frustrating', isCorrect: false },
            { text: 'determined', isCorrect: true },
            { text: 'exhausting', isCorrect: false },
            { text: 'favourite', isCorrect: false }
        ],
        correctAnswer: 'determined',
        hint_vi: 'Từ này mô tả cảm giác quyết tâm mạnh mẽ.',
        hint_en: 'This word describes a strong sense of resolution.',
        rationale_vi: '"Determined" (quyết tâm) là từ hợp lý nhất để diễn tả trạng thái tinh thần khi tham gia một cuộc thi, đối lập với sự lo lắng ban đầu.',
        rationale_en: '"Determined" is the most logical word to describe the mental state for a competition, contrasting with the initial nervousness.'
    },
    {
        type: 'mc',
        question: 'Paul always gives me ____ advice on how to manage time effectively.',
        options: [
            { text: 'helped', isCorrect: false },
            { text: 'helper', isCorrect: false },
            { text: 'helpful', isCorrect: true },
            { text: 'help', isCorrect: false }
        ],
        correctAnswer: 'helpful',
        hint_vi: 'Ta cần một tính từ để bổ nghĩa cho danh từ "advice".',
        hint_en: 'An adjective is needed to modify the noun "advice".',
        rationale_vi: '"Helpful" là tính từ có nghĩa là "hữu ích", phù hợp để mô tả "lời khuyên" (advice).',
        rationale_en: '"Helpful" is the adjective meaning "useful", which is suitable for describing "advice".'
    },
    {
        type: 'mc',
        question: '"Where is the headquarters of ASEAN?"',
        options: [
            { text: "It's in Jakarta.", isCorrect: true },
            { text: "It's in Bangkok.", isCorrect: false },
            { text: "It's in Singapore.", isCorrect: false },
            { text: "It's in Ha Noi.", isCorrect: false }
        ],
        correctAnswer: "It's in Jakarta.",
        hint_vi: 'Đây là một câu hỏi kiến thức chung về tổ chức ASEAN.',
        hint_en: 'This is a general knowledge question about the ASEAN organization.',
        rationale_vi: 'Trụ sở chính của Hiệp hội các quốc gia Đông Nam Á (ASEAN) được đặt tại Jakarta, Indonesia.',
        rationale_en: 'The headquarters of the Association of Southeast Asian Nations (ASEAN) is located in Jakarta, Indonesia.'
    },
    {
        type: 'mc',
        question: 'Tom ____ his bike in the park when it ____ to rain.',
        options: [
            { text: 'rode - started', isCorrect: false },
            { text: 'riding - starting', isCorrect: false },
            { text: 'was riding - was starting', isCorrect: false },
            { text: 'was riding - started', isCorrect: true }
        ],
        correctAnswer: 'was riding - started',
        hint_vi: 'Một hành động đang diễn ra (quá khứ tiếp diễn) thì bị một hành động khác xen vào (quá khứ đơn).',
        hint_en: 'An ongoing action (past continuous) was interrupted by another action (simple past).',
        rationale_vi: 'Hành động "đạp xe" (was riding) đang diễn ra thì hành động "bắt đầu mưa" (started) xen vào.',
        rationale_en: 'The action of "riding a bike" (was riding) was in progress when the action of "starting to rain" (started) interrupted it.'
    },
    {
        type: 'mc',
        question: '"Which is the roof of Indochina?"',
        options: [
            { text: 'Marble Mountains', isCorrect: false },
            { text: 'Lang Biang Mountain', isCorrect: false },
            { text: 'Phou Bia', isCorrect: false },
            { text: 'Fansipan', isCorrect: true }
        ],
        correctAnswer: 'Fansipan',
        hint_vi: 'Đây là đỉnh núi cao nhất Việt Nam.',
        hint_en: 'This is the highest mountain in Vietnam.',
        rationale_vi: 'Đỉnh Fansipan ở Việt Nam được mệnh danh là "Nóc nhà Đông Dương" (the roof of Indochina).',
        rationale_en: 'Mount Fansipan in Vietnam is known as "the roof of Indochina".'
    },
    {
        type: 'mc',
        question: 'Choose the part that needs correction in the following sentence: The train station is <u>empty</u> during rush hour, as you can see a lot of people waiting to catch a train.',
        options: [
            { text: 'is', isCorrect: false },
            { text: 'see', isCorrect: false },
            { text: 'catch', isCorrect: false },
            { text: 'empty', isCorrect: true }
        ],
        correctAnswer: 'empty',
        hint_vi: 'Từ "empty" (trống rỗng) mâu thuẫn với vế sau của câu.',
        hint_en: 'The word "empty" contradicts the second part of the sentence.',
        rationale_vi: 'Nếu có "rất nhiều người đang đợi" thì nhà ga không thể "trống rỗng" (empty). Từ phù hợp hơn có thể là "crowded" hoặc "busy".',
        rationale_en: 'If there are "a lot of people waiting", the station cannot be "empty". A more suitable word would be "crowded" or "busy".'
    },
    {
        type: 'mc',
        question: 'Our local museum is a well-known ____ for visitors.',
        options: [
            { text: 'workplace', isCorrect: false },
            { text: 'souvenir shop', isCorrect: false },
            { text: 'neighbourhood', isCorrect: false },
            { text: 'tourist destination', isCorrect: true }
        ],
        correctAnswer: 'tourist destination',
        hint_vi: 'Bảo tàng là một nơi thu hút khách du lịch.',
        hint_en: 'A museum is a place that attracts tourists.',
        rationale_vi: '"Tourist destination" (điểm đến du lịch) là cụm từ phù hợp nhất để mô tả một bảo tàng nổi tiếng đối với du khách.',
        rationale_en: '"Tourist destination" is the most fitting phrase to describe a well-known museum for visitors.'
    },
    {
        type: 'mc',
        question: 'Choose the word or phrase that is CLOSEST in meaning to the underlined part: This amusement park is a well-<u>known</u> place of interest in this area.',
        options: [
            { text: 'happy', isCorrect: false },
            { text: 'optimistic', isCorrect: false },
            { text: 'important', isCorrect: false },
            { text: 'popular', isCorrect: true }
        ],
        correctAnswer: 'popular',
        hint_vi: '"well-known" có nghĩa là được nhiều người biết đến.',
        hint_en: '"well-known" means recognized by many people.',
        rationale_vi: '"Popular" (phổ biến, nổi tiếng) là từ đồng nghĩa gần nhất với "well-known" trong ngữ cảnh này.',
        rationale_en: '"Popular" is the closest synonym for "well-known" in this context.'
    },
    {
        type: 'mc',
        question: 'As the Earth is a sphere, the equator receives more ____ than the poles.',
        options: [
            { text: 'sun', isCorrect: false },
            { text: 'sunny', isCorrect: false },
            { text: 'sunshine', isCorrect: true },
            { text: 'more', isCorrect: false }
        ],
        correctAnswer: 'sunshine',
        hint_vi: 'Ta cần một danh từ chỉ "ánh nắng".',
        hint_en: 'We need a noun that means "sunlight".',
        rationale_vi: '"Sunshine" là danh từ không đếm được, có nghĩa là ánh nắng mặt trời.',
        rationale_en: '"Sunshine" is the uncountable noun meaning the light from the sun.'
    },
    {
        type: 'mc',
        question: 'Give the correct form of the word OPTIMIST: Maria is an ____ girl, as she always finds the positive side of things.',
        options: [
            { text: 'optimistic', isCorrect: true },
            { text: 'optimism', isCorrect: false },
            { text: 'optimistically', isCorrect: false },
            { text: 'optimists', isCorrect: false }
        ],
        correctAnswer: 'optimistic',
        hint_vi: 'Cần một tính từ để bổ nghĩa cho danh từ "girl".',
        hint_en: 'An adjective is needed to modify the noun "girl".',
        rationale_vi: 'Dạng tính từ của "optimist" (người lạc quan) là "optimistic" (lạc quan).',
        rationale_en: 'The adjective form of "optimist" (noun) is "optimistic".'
    },
    {
        type: 'mc',
        question: 'I want to ____ my favourite team in this match.',
        options: [
            { text: 'support', isCorrect: true },
            { text: 'supporting', isCorrect: false },
            { text: 'supported', isCorrect: false },
            { text: 'supports', isCorrect: false }
        ],
        correctAnswer: 'support',
        hint_vi: 'Sau "want to", động từ phải ở dạng nguyên mẫu.',
        hint_en: 'After "want to", the verb must be in its base form.',
        rationale_vi: 'Cấu trúc đúng là "want to + V (nguyên mẫu)". "Support" có nghĩa là ủng hộ.',
        rationale_en: 'The correct structure is "want to + V (infinitive)". "Support" means to cheer for.'
    },
    {
        type: 'mc',
        question: 'Since electronic devices are common, students ____ on them for studying.',
        options: [
            { text: 'depend', isCorrect: true },
            { text: 'depended', isCorrect: false },
            { text: 'depending', isCorrect: false },
            { text: 'depends', isCorrect: false }
        ],
        correctAnswer: 'depend',
        hint_vi: 'Chủ ngữ "students" là số nhiều, và câu ở thì hiện tại đơn.',
        hint_en: 'The subject "students" is plural, and the sentence is in the simple present tense.',
        rationale_vi: 'Với chủ ngữ số nhiều ở thì hiện tại đơn, động từ giữ nguyên mẫu.',
        rationale_en: 'With a plural subject in the simple present tense, the verb remains in its base form.'
    },
    {
        type: 'mc',
        question: 'December 25 is ____ Day. It is celebrated by Christians to commemorate the birth of Jesus Christ.',
        options: [
            { text: 'Christmas', isCorrect: true },
            { text: 'Christening', isCorrect: false },
            { text: 'Christianity', isCorrect: false },
            { text: 'Christian', isCorrect: false }
        ],
        correctAnswer: 'Christmas',
        hint_vi: 'Đây là ngày lễ kỷ niệm sự ra đời của Chúa Jesus.',
        hint_en: 'This is the holiday celebrating the birth of Jesus Christ.',
        rationale_vi: 'Ngày 25 tháng 12 là ngày lễ Giáng sinh (Christmas Day).',
        rationale_en: 'December 25th is Christmas Day.'
    },
    {
        type: 'mc',
        question: 'Jack ____ exhilarated when he could explore the caves.',
        options: [
            { text: 'felt', isCorrect: true },
            { text: 'feel', isCorrect: false },
            { text: 'feeling', isCorrect: false },
            { text: 'feels', isCorrect: false }
        ],
        correctAnswer: 'felt',
        hint_vi: 'Hành động "explore" ở dạng quá khứ ("could explore"), nên hành động "feel" cũng phải ở quá khứ.',
        hint_en: 'The action "explore" is in the past ("could explore"), so the action "feel" should also be in the past.',
        rationale_vi: 'Dạng quá khứ của động từ "feel" là "felt".',
        rationale_en: 'The past tense of the verb "feel" is "felt".'
    },
    {
        type: 'mc',
        question: 'He ____ into my room while I was eating chips.',
        options: [
            { text: 'came', isCorrect: true },
            { text: 'come', isCorrect: false },
            { text: 'comes', isCorrect: false },
            { text: 'coming', isCorrect: false }
        ],
        correctAnswer: 'came',
        hint_vi: 'Một hành động xen vào một hành động đang diễn ra trong quá khứ.',
        hint_en: 'An action interrupted another ongoing action in the past.',
        rationale_vi: 'Hành động "ăn" (was eating) đang diễn ra thì hành động "đi vào" xen vào, nên dùng thì quá khứ đơn. Quá khứ của "come" là "came".',
        rationale_en: 'The action "eating" (was eating) was in progress when the action "come" interrupted it, so use the simple past. The past of "come" is "came".'
    },
    {
        type: 'mc',
        question: 'If you ____ out of money, you will ____ expensive things.',
        options: [
            { text: 'run - buy', isCorrect: false },
            { text: 'ran - bought', isCorrect: false },
            { text: 'running - buying', isCorrect: false },
            { text: 'run - not buy', isCorrect: true } // Assuming a logical correction
        ],
        correctAnswer: 'run - not buy',
        hint_vi: 'Đây là câu điều kiện loại 1.',
        hint_en: 'This is a type 1 conditional sentence.',
        rationale_vi: 'Cấu trúc câu điều kiện loại 1: If + S + V(s/es), S + will/won\'t + V. Nếu bạn hết tiền, bạn sẽ không mua đồ đắt tiền. (Lưu ý: Đã sửa lại đáp án để câu có nghĩa).',
        rationale_en: 'Structure for type 1 conditional: If + S + V(s/es), S + will/won\'t + V. If you run out of money, you will not buy expensive things. (Note: The answer has been corrected to make logical sense).'
    },
     {
        type: 'mc',
        question: 'Choose the word or phrase that is CLOSEST in meaning to the underlined part: Junk food and sugary drinks are <u>unhealthy</u> for your health.',
        options: [
            { text: 'healthy', isCorrect: false },
            { text: 'harmful', isCorrect: true },
            { text: 'encouraging', isCorrect: false },
            { text: 'optimistic', isCorrect: false }
        ],
        correctAnswer: 'harmful',
        hint_vi: '"unhealthy" có nghĩa là không tốt cho sức khỏe.',
        hint_en: '"unhealthy" means not good for your health.',
        rationale_vi: '"Harmful" (có hại) là từ đồng nghĩa gần nhất với "unhealthy" (không lành mạnh).',
        rationale_en: '"Harmful" is the closest synonym for "unhealthy".'
    },
    {
        type: 'mc',
        question: 'Give the correct form of the word DISTRACT: You should avoid ____ while you are studying.',
        options: [
            { text: 'distractions', isCorrect: true },
            { text: 'distract', isCorrect: false },
            { text: 'distracted', isCorrect: false },
            { text: 'distracting', isCorrect: false }
        ],
        correctAnswer: 'distractions',
        hint_vi: 'Sau động từ "avoid", ta cần một danh từ hoặc V-ing. Ở đây cần danh từ số nhiều.',
        hint_en: 'After the verb "avoid", a noun or V-ing is needed. Here, a plural noun is required.',
        rationale_vi: 'Danh từ của động từ "distract" là "distraction". Vì ý nghĩa của câu là tránh "những thứ gây xao nhãng", ta dùng danh từ số nhiều "distractions".',
        rationale_en: 'The noun form of the verb "distract" is "distraction". Since the meaning is to avoid "things that distract", the plural noun "distractions" is used.'
    },
    {
        type: 'mc',
        question: 'The city centre is always ____ people on weekends.',
        options: [
            { text: 'spacious', isCorrect: false },
            { text: 'convenient', isCorrect: false },
            { text: 'packed with', isCorrect: true },
            { text: 'safe', isCorrect: false }
        ],
        correctAnswer: 'packed with',
        hint_vi: 'Cụm từ này có nghĩa là rất đông đúc, đầy người.',
        hint_en: 'This phrase means very crowded, full of people.',
        rationale_vi: '"Packed with" có nghĩa là chật cứng, đầy ắp. "The city centre is always packed with people" có nghĩa là trung tâm thành phố luôn đông nghịt người.',
        rationale_en: '"Packed with" means full of. "The city centre is always packed with people" means the city centre is always very crowded.'
    },
    {
        type: 'mc',
        question: 'The currency of ____ is YEN.',
        options: [
            { text: 'Japan', isCorrect: true },
            { text: 'Japanese', isCorrect: false },
            { text: "Japan's", isCorrect: false },
            { text: 'Japans', isCorrect: false }
        ],
        correctAnswer: 'Japan',
        hint_vi: 'Yen là đơn vị tiền tệ của quốc gia nào?',
        hint_en: 'Yen is the currency of which country?',
        rationale_vi: 'Yen là đơn vị tiền tệ của Nhật Bản (Japan).',
        rationale_en: 'The Yen is the currency of Japan.'
    },
    {
        type: 'mc',
        question: 'The artisans ____ the techniques by passing them down through generations.',
        options: [
            { text: 'preserve', isCorrect: false },
            { text: 'preserved', isCorrect: true },
            { text: 'preserving', isCorrect: false },
            { text: 'preserves', isCorrect: false }
        ],
        correctAnswer: 'preserved',
        hint_vi: 'Hành động này đã xảy ra trong quá khứ.',
        hint_en: 'This action happened in the past.',
        rationale_vi: 'Câu văn mô tả cách các kỹ thuật được lưu giữ qua nhiều thế hệ, đây là một hành động đã diễn ra, nên dùng thì quá khứ đơn "preserved".',
        rationale_en: 'The sentence describes how techniques were kept through generations, an action that took place in the past, so the simple past "preserved" is used.'
    },
    {
        type: 'mc',
        question: 'My father wants to stay healthy, so he has decided to ____ his sugary drinks.',
        options: [
            { text: 'look back on', isCorrect: false },
            { text: 'look forward to', isCorrect: false },
            { text: 'get on with', isCorrect: false },
            { text: 'cut down on', isCorrect: true }
        ],
        correctAnswer: 'cut down on',
        hint_vi: 'Cụm động từ này có nghĩa là "cắt giảm".',
        hint_en: 'This phrasal verb means "to reduce".',
        rationale_vi: '"Cut down on" có nghĩa là cắt giảm việc tiêu thụ hoặc sử dụng cái gì đó. Đây là lựa chọn hợp lý nhất để giữ gìn sức khỏe.',
        rationale_en: '"Cut down on" means to reduce the consumption or use of something. This is the most logical choice for staying healthy.'
    },
    {
        type: 'mc',
        question: 'The weather will be ____ on Sunday.',
        options: [
            { text: 'cloudy', isCorrect: true },
            { text: 'cloud', isCorrect: false },
            { text: 'clouds', isCorrect: false },
            { text: 'cloudiness', isCorrect: false }
        ],
        correctAnswer: 'cloudy',
        hint_vi: 'Sau động từ "to be", ta cần một tính từ để mô tả thời tiết.',
        hint_en: 'After the verb "to be", an adjective is needed to describe the weather.',
        rationale_vi: '"Cloudy" là tính từ (có mây). "Cloud/clouds" là danh từ, và "cloudiness" là danh từ chỉ tình trạng.',
        rationale_en: '"Cloudy" is the adjective. "Cloud/clouds" are nouns, and "cloudiness" is a noun describing the state.'
    },
    {
        type: 'mc',
        question: 'We are aware ____ environmental protection after we took an eco-tour.',
        options: [
            { text: 'aware', isCorrect: false },
            { text: 'of', isCorrect: true },
            { text: 'that', isCorrect: false },
            { text: 'awareness', isCorrect: false }
        ],
        correctAnswer: 'of',
        hint_vi: 'Cấu trúc "aware..." có nghĩa là "nhận thức về".',
        hint_en: 'The structure "aware..." means "conscious of".',
        rationale_vi: 'Cấu trúc cố định là "to be aware of something", có nghĩa là nhận thức được điều gì.',
        rationale_en: 'The fixed structure is "to be aware of something", which means to be conscious of it.'
    },
    {
        type: 'mc',
        question: 'She carried on ____ about traditional games even after school.',
        options: [
            { text: 'learning', isCorrect: true },
            { text: 'learn', isCorrect: false },
            { text: 'learned', isCorrect: false },
            { text: 'learns', isCorrect: false }
        ],
        correctAnswer: 'learning',
        hint_vi: 'Sau cụm động từ "carried on", động từ phải ở dạng V-ing.',
        hint_en: 'After the phrasal verb "carried on", the verb must be in the V-ing form.',
        rationale_vi: '"Carry on" có nghĩa là tiếp tục, và nó được theo sau bởi một danh động từ (V-ing).',
        rationale_en: '"Carry on" means to continue, and it is followed by a gerund (V-ing).'
    },
    {
        type: 'mc',
        question: 'If you ____ from the countryside to the city, you ____ the city noisy at first.',
        options: [
            { text: 'has moved - might have found', isCorrect: false },
            { text: 'move - might find', isCorrect: true },
            { text: 'moved - might find', isCorrect: false },
            { text: 'moved - might have found', isCorrect: false }
        ],
        correctAnswer: 'move - might find',
        hint_vi: 'Đây là câu điều kiện loại 1, diễn tả một khả năng có thể xảy ra.',
        hint_en: 'This is a type 1 conditional, expressing a possible future outcome.',
        rationale_vi: 'Cấu trúc câu điều kiện loại 1: If + S + V(hiện tại đơn), S + will/may/might + V(nguyên mẫu).',
        rationale_en: 'Structure for type 1 conditional: If + S + V(simple present), S + will/may/might + V(infinitive).'
    },
    {
        type: 'mc',
        question: 'The city ____ is planning to build more green spaces.',
        options: [
            { text: 'authority', isCorrect: true },
            { text: 'author', isCorrect: false },
            { text: 'authorize', isCorrect: false },
            { text: 'authoritative', isCorrect: false }
        ],
        correctAnswer: 'authority',
        hint_vi: 'Từ này có nghĩa là "chính quyền".',
        hint_en: 'This word means "the governing body".',
        rationale_vi: '"City authority" có nghĩa là chính quyền thành phố.',
        rationale_en: '"City authority" means the city government.'
    },
    {
        type: 'mc',
        question: 'Choose the word or phrase that is OPPOSITE in meaning to the underlined part: The restaurant offers a <u>special</u> menu on Women\'s Day, which includes dessert.',
        options: [
            { text: 'pricey', isCorrect: false },
            { text: 'regular', isCorrect: true },
            { text: 'unhappy', isCorrect: false },
            { text: 'unique', isCorrect: false }
        ],
        correctAnswer: 'regular',
        hint_vi: '"Special" có nghĩa là đặc biệt, khác với bình thường.',
        hint_en: '"Special" means different from what is usual.',
        rationale_vi: 'Từ trái nghĩa với "special" (đặc biệt) là "regular" (thông thường, bình thường).',
        rationale_en: 'The opposite of "special" is "regular".'
    },
    {
        type: 'mc',
        question: 'Choose the word or phrase that is OPPOSITE in meaning to the underlined part: The food in this restaurant was delicious but too <u>pricey</u> for me.',
        options: [
            { text: 'satisfied', isCorrect: false },
            { text: 'cheap', isCorrect: true },
            { text: 'costly', isCorrect: false },
            { text: 'healthy', isCorrect: false }
        ],
        correctAnswer: 'cheap',
        hint_vi: '"Pricey" có nghĩa là đắt tiền.',
        hint_en: '"Pricey" means expensive.',
        rationale_vi: 'Từ trái nghĩa với "pricey" (đắt) là "cheap" (rẻ). "Costly" là từ đồng nghĩa.',
        rationale_en: 'The opposite of "pricey" (expensive) is "cheap". "Costly" is a synonym.'
    },
    {
        type: 'mc',
        question: 'Have you ____ wished you had a private swimming pool in our house?',
        options: [
            { text: 'ever', isCorrect: true },
            { text: 'never', isCorrect: false },
            { text: 'always', isCorrect: false },
            { text: 'often', isCorrect: false }
        ],
        correctAnswer: 'ever',
        hint_vi: 'Từ này được dùng trong câu hỏi Hiện tại hoàn thành để hỏi về trải nghiệm "đã từng".',
        hint_en: 'This word is used in Present Perfect questions to ask about experience "at any time".',
        rationale_vi: '"Ever" được dùng trong câu hỏi để hỏi xem một việc gì đó đã từng xảy ra hay chưa.',
        rationale_en: '"Ever" is used in questions to ask if something has happened at any point in time.'
    },
    {
        type: 'mc',
        question: 'You ____ your experiences more clearly if you ____ diaries.',
        options: [
            { text: 'remembered - wrote', isCorrect: false },
            { text: 'might remember - writing', isCorrect: false },
            { text: 'might remember - might write', isCorrect: false },
            { text: 'might remember - write', isCorrect: true }
        ],
        correctAnswer: 'might remember - write',
        hint_vi: 'Đây là câu điều kiện loại 1.',
        hint_en: 'This is a type 1 conditional sentence.',
        rationale_vi: 'Cấu trúc câu điều kiện loại 1: If + S + V(hiện tại đơn), S + will/can/might + V(nguyên mẫu).',
        rationale_en: 'Structure for type 1 conditional: If + S + V(simple present), S + will/can/might + V(infinitive).'
    },
    {
        type: 'mc',
        question: "Rewriting the given sentence: Luna doesn't have enough money to buy her favorite dress.",
        options: [
            { text: 'Luna wishes she have enough money to buy her favourite dress.', isCorrect: false },
            { text: 'Luna wishes she had enough money to buy her favourite dress.', isCorrect: true },
            { text: 'Luna wish she had enough money to buy her favourite dress.', isCorrect: false },
            { text: 'Luna wishes she has enough money to buy her favourite dress.', isCorrect: false }
        ],
        correctAnswer: 'Luna wishes she had enough money to buy her favourite dress.',
        hint_vi: 'Câu điều ước cho hiện tại dùng động từ ở thì quá khứ.',
        hint_en: 'A wish about the present uses a past tense verb.',
        rationale_vi: 'Cấu trúc câu điều ước cho hiện tại: S + wish(es) + S + V2/ed. Động từ "have" chuyển thành "had".',
        rationale_en: 'Structure for a present wish: S + wish(es) + S + V2/ed. The verb "have" becomes "had".'
    },
    {
        type: 'mc',
        question: 'Rewriting the given sentence: James said, "I am going to the supermarket near my house to buy some fruit."',
        options: [
            { text: 'James said that he went to the supermarket near his house to buy some fruit.', isCorrect: false },
            { text: 'James said that he were going to the supermarket near his house to buy some fruit.', isCorrect: false },
            { text: 'James said that he is going to the supermarket near his house to buy some fruit.', isCorrect: false },
            { text: 'James said that he was going to the supermarket near his house to buy some fruit.', isCorrect: true }
        ],
        correctAnswer: 'James said that he was going to the supermarket near his house to buy some fruit.',
        hint_vi: 'Đây là câu tường thuật. Cần lùi thì của động từ.',
        hint_en: 'This is reported speech. The verb tense needs to be shifted back.',
        rationale_vi: 'Trong câu tường thuật, thì Hiện tại tiếp diễn ("am going") được lùi về thì Quá khứ tiếp diễn ("was going").',
        rationale_en: 'In reported speech, the Present Continuous ("am going") is shifted back to the Past Continuous ("was going").'
    },
    {
        type: 'mc',
        question: 'Air ____ is a serious problem in crowded cities.',
        options: [
            { text: 'pollution', isCorrect: true },
            { text: 'polluted', isCorrect: false },
            { text: 'pollutes', isCorrect: false },
            { text: 'polluting', isCorrect: false }
        ],
        correctAnswer: 'pollution',
        hint_vi: 'Ta cần một danh từ ở đây.',
        hint_en: 'A noun is needed here.',
        rationale_vi: '"Air pollution" (ô nhiễm không khí) là một cụm danh từ phổ biến.',
        rationale_en: '"Air pollution" is a common compound noun.'
    },
    {
        type: 'mc',
        question: 'The harder you study, the ____ grade you will get.',
        options: [
            { text: 'best', isCorrect: false },
            { text: 'better', isCorrect: true },
            { text: 'good', isCorrect: false },
            { text: 'gooder', isCorrect: false }
        ],
        correctAnswer: 'better',
        hint_vi: 'Đây là cấu trúc so sánh kép (càng... càng...).',
        hint_en: 'This is a double comparative structure.',
        rationale_vi: 'Cấu trúc so sánh kép yêu cầu dạng so sánh hơn. Dạng so sánh hơn của "good" là "better".',
        rationale_en: 'The double comparative structure requires the comparative form. The comparative of "good" is "better".'
    },
    {
        type: 'mc',
        question: 'Choose the word whose underlined part differs from the other three in pronunciation.',
        options: [
            { text: 'c<u>a</u>stle', isCorrect: true },
            { text: 'compl<u>a</u>in', isCorrect: false },
            { text: 'c<u>a</u>mpus', isCorrect: false },
            { text: 'p<u>a</u>ss', isCorrect: false }
        ],
        correctAnswer: 'complain',
        hint_vi: 'Tìm âm /eɪ/.',
        hint_en: 'Find the /eɪ/ sound.',
        rationale_vi: 'Chữ "a" trong "complain" được phát âm là /eɪ/, trong khi ở các từ còn lại nó được phát âm là /æ/ hoặc /ɑː/.',
        rationale_en: 'The "a" in "complain" is pronounced /eɪ/, while in the others it\'s /æ/ or /ɑː/.'
    },
    {
        type: 'mc',
        question: 'The bus ____ at 7:30 every day.',
        options: [
            { text: 'leaves', isCorrect: true },
            { text: 'left', isCorrect: false },
            { text: 'leaving', isCorrect: false },
            { text: 'is leave', isCorrect: false }
        ],
        correctAnswer: 'leaves',
        hint_vi: '"every day" là dấu hiệu của thì hiện tại đơn. Chủ ngữ là "The bus".',
        hint_en: '"every day" indicates the simple present tense. The subject is "The bus".',
        rationale_vi: 'Với chủ ngữ ngôi thứ ba số ít ở thì hiện tại đơn, ta thêm "s" vào động từ.',
        rationale_en: 'With a third-person singular subject in the simple present tense, "s" is added to the verb.'
    },
    {
        type: 'mc',
        question: 'People ____ to travel by ox cart in the countryside.',
        options: [
            { text: 'used', isCorrect: true },
            { text: 'use', isCorrect: false },
            { text: 'uses', isCorrect: false },
            { text: 'using', isCorrect: false }
        ],
        correctAnswer: 'used',
        hint_vi: 'Cấu trúc này dùng để chỉ một thói quen trong quá khứ nay không còn nữa.',
        hint_en: 'This structure refers to a past habit that is no longer true.',
        rationale_vi: 'Cấu trúc "used to + V" được dùng để nói về một thói quen hoặc tình trạng trong quá khứ.',
        rationale_en: 'The structure "used to + V" is used to talk about a habit or state in the past.'
    },
    {
        type: 'mc',
        question: 'Choose the part that needs correction in the following sentence: If you <u>would study</u> hard, you can get good results at school.',
        options: [
            { text: 'at', isCorrect: false },
            { text: 'get', isCorrect: false },
            { text: 'you', isCorrect: false },
            { text: 'would study', isCorrect: true }
        ],
        correctAnswer: 'would study',
        hint_vi: 'Đây là câu điều kiện loại 1.',
        hint_en: 'This is a type 1 conditional sentence.',
        rationale_vi: 'Trong mệnh đề "If" của câu điều kiện loại 1, ta dùng thì hiện tại đơn, không dùng "would". Phải sửa thành "study".',
        rationale_en: 'In the "If" clause of a type 1 conditional, we use the simple present tense, not "would". It should be corrected to "study".'
    },
    {
        type: 'mc',
        question: 'Give the correct form of the word PROMOTION: My mother is trying to ____ healthy eating habits in my family.',
        options: [
            { text: 'promote', isCorrect: true },
            { text: 'promoted', isCorrect: false },
            { text: 'promotion', isCorrect: false },
            { text: 'promoting', isCorrect: false }
        ],
        correctAnswer: 'promote',
        hint_vi: 'Sau "trying to", ta cần một động từ nguyên mẫu.',
        hint_en: 'After "trying to", an infinitive verb is needed.',
        rationale_vi: '"Promote" là động từ có nghĩa là thúc đẩy, quảng bá. Cấu trúc là "try to + V".',
        rationale_en: '"Promote" is the verb meaning to encourage. The structure is "try to + V".'
    },
    {
        type: 'mc',
        question: 'Choose the part that needs correction in the following sentence: I have read this book several times, and I last <u>have read</u> it a week ago.',
        options: [
            { text: 'several', isCorrect: false },
            { text: 'a', isCorrect: false },
            { text: 'have read', isCorrect: true },
            { text: 'this', isCorrect: false }
        ],
        correctAnswer: 'have read',
        hint_vi: 'Cụm từ "a week ago" là dấu hiệu của thì quá khứ đơn.',
        hint_en: 'The phrase "a week ago" is a signal for the simple past tense.',
        rationale_vi: 'Khi có thời gian xác định trong quá khứ ("a week ago"), ta phải dùng thì quá khứ đơn. Phải sửa "have read" thành "read" (V2).',
        rationale_en: 'When a specific past time is mentioned ("a week ago"), the simple past tense must be used. "have read" should be corrected to "read" (V2).'
    },
    {
        type: 'mc',
        question: 'Choose the part that needs correction in the following sentence: Nancy always sees the <u>negative</u> side of things. She is an optimistic person.',
        options: [
            { text: 'person', isCorrect: false },
            { text: 'sees', isCorrect: false },
            { text: 'of', isCorrect: false },
            { text: 'negative', isCorrect: true }
        ],
        correctAnswer: 'negative',
        hint_vi: 'Một người "optimistic" (lạc quan) sẽ không nhìn vào mặt "negative" (tiêu cực).',
        hint_en: 'An "optimistic" person would not look on the "negative" side.',
        rationale_vi: 'Hai vế câu mâu thuẫn. Một người lạc quan (optimistic) sẽ nhìn vào mặt tích cực (positive side).',
        rationale_en: 'The two clauses contradict each other. An optimistic person sees the positive side.'
    },
    {
        type: 'mc',
        question: 'Washington, D.C. is the ____ of the USA.',
        options: [
            { text: 'capital', isCorrect: true },
            { text: 'capitalist', isCorrect: false },
            { text: 'capitalism', isCorrect: false },
            { text: 'capitals', isCorrect: false }
        ],
        correctAnswer: 'capital',
        hint_vi: 'Từ này có nghĩa là "thủ đô".',
        hint_en: 'This word means "the capital city".',
        rationale_vi: '"Capital" là danh từ có nghĩa là thủ đô.',
        rationale_en: '"Capital" is the noun meaning the main city of a country.'
    },
    {
        type: 'mc',
        question: 'You should ____ a calendar to plan your work ahead.',
        options: [
            { text: 'use', isCorrect: true },
            { text: 'uses', isCorrect: false },
            { text: 'used', isCorrect: false },
            { text: 'using', isCorrect: false }
        ],
        correctAnswer: 'use',
        hint_vi: 'Sau động từ khuyết thiếu "should", động từ ở dạng nguyên mẫu.',
        hint_en: 'After the modal verb "should", the verb is in its base form.',
        rationale_vi: 'Cấu trúc: should + V(nguyên mẫu).',
        rationale_en: 'Structure: should + V(infinitive).'
    },
    {
        type: 'mc',
        question: 'Choose the part that needs correction in the following sentence: I don\'t know what <u>should I</u> do to be more confident when speaking in public.',
        options: [
            { text: 'should I', isCorrect: true },
            { text: 'don\'t', isCorrect: false },
            { text: 'more', isCorrect: false },
            { text: 'public', isCorrect: false }
        ],
        correctAnswer: 'should I',
        hint_vi: 'Trong mệnh đề phụ, trật tự từ là "chủ ngữ + động từ".',
        hint_en: 'In a subordinate clause, the word order is "subject + verb".',
        rationale_vi: 'Đây là một mệnh đề danh từ bắt đầu bằng "what", không phải câu hỏi trực tiếp, nên không đảo ngữ. Phải sửa "should I" thành "I should".',
        rationale_en: 'This is a noun clause beginning with "what", not a direct question, so there is no inversion. "should I" must be corrected to "I should".'
    },
    {
        type: 'mc',
        question: 'Give the correct form of the word INTEREST: Anna is very ____ in doing Science projects.',
        options: [
            { text: 'interested', isCorrect: true },
            { text: 'interesting', isCorrect: false },
            { text: 'interestingly', isCorrect: false },
            { text: 'interest', isCorrect: false }
        ],
        correctAnswer: 'interested',
        hint_vi: 'Tính từ đuôi "-ed" dùng để mô tả cảm xúc, cảm nhận của người.',
        hint_en: 'Adjectives ending in "-ed" are used to describe people\'s feelings.',
        rationale_vi: '"Interested" được dùng để nói rằng ai đó cảm thấy hứng thú với điều gì.',
        rationale_en: '"Interested" is used to say that someone feels curious about something.'
    }
];