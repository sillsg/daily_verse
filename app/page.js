'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [verse, setVerse] = useState({
    reference: "",
    text: "Loading today's verse...",
    sermon: "Preparing today's message..."
  });

  // Function to get a random Bible book and chapter
  const getRandomBibleLocation = () => {
    // NIV Bible books with chapter counts
    const bibleStructure = [
      { name: "Genesis", chapters: 50 },
      { name: "Exodus", chapters: 40 },
      { name: "Leviticus", chapters: 27 },
      { name: "Numbers", chapters: 36 },
      { name: "Deuteronomy", chapters: 34 },
      { name: "Joshua", chapters: 24 },
      { name: "Judges", chapters: 21 },
      { name: "Ruth", chapters: 4 },
      { name: "1 Samuel", chapters: 31 },
      { name: "2 Samuel", chapters: 24 },
      { name: "1 Kings", chapters: 22 },
      { name: "2 Kings", chapters: 25 },
      { name: "1 Chronicles", chapters: 29 },
      { name: "2 Chronicles", chapters: 36 },
      { name: "Ezra", chapters: 10 },
      { name: "Nehemiah", chapters: 13 },
      { name: "Esther", chapters: 10 },
      { name: "Job", chapters: 42 },
      { name: "Psalms", chapters: 150 },
      { name: "Proverbs", chapters: 31 },
      { name: "Ecclesiastes", chapters: 12 },
      { name: "Song of Solomon", chapters: 8 },
      { name: "Isaiah", chapters: 66 },
      { name: "Jeremiah", chapters: 52 },
      { name: "Lamentations", chapters: 5 },
      { name: "Ezekiel", chapters: 48 },
      { name: "Daniel", chapters: 12 },
      { name: "Hosea", chapters: 14 },
      { name: "Joel", chapters: 3 },
      { name: "Amos", chapters: 9 },
      { name: "Obadiah", chapters: 1 },
      { name: "Jonah", chapters: 4 },
      { name: "Micah", chapters: 7 },
      { name: "Nahum", chapters: 3 },
      { name: "Habakkuk", chapters: 3 },
      { name: "Zephaniah", chapters: 3 },
      { name: "Haggai", chapters: 2 },
      { name: "Zechariah", chapters: 14 },
      { name: "Malachi", chapters: 4 },
      { name: "Matthew", chapters: 28 },
      { name: "Mark", chapters: 16 },
      { name: "Luke", chapters: 24 },
      { name: "John", chapters: 21 },
      { name: "Acts", chapters: 28 },
      { name: "Romans", chapters: 16 },
      { name: "1 Corinthians", chapters: 16 },
      { name: "2 Corinthians", chapters: 13 },
      { name: "Galatians", chapters: 6 },
      { name: "Ephesians", chapters: 6 },
      { name: "Philippians", chapters: 4 },
      { name: "Colossians", chapters: 4 },
      { name: "1 Thessalonians", chapters: 5 },
      { name: "2 Thessalonians", chapters: 3 },
      { name: "1 Timothy", chapters: 6 },
      { name: "2 Timothy", chapters: 4 },
      { name: "Titus", chapters: 3 },
      { name: "Philemon", chapters: 1 },
      { name: "Hebrews", chapters: 13 },
      { name: "James", chapters: 5 },
      { name: "1 Peter", chapters: 5 },
      { name: "2 Peter", chapters: 3 },
      { name: "1 John", chapters: 5 },
      { name: "2 John", chapters: 1 },
      { name: "3 John", chapters: 1 },
      { name: "Jude", chapters: 1 },
      { name: "Revelation", chapters: 22 }
    ];

    // Select random book
    const randomBookIndex = Math.floor(Math.random() * bibleStructure.length);
    const selectedBook = bibleStructure[randomBookIndex];
    
    // Select random chapter
    const randomChapter = Math.floor(Math.random() * selectedBook.chapters) + 1;
    
    return {
      book: selectedBook.name,
      chapter: randomChapter
    };
  };

  // Generate sermon content based on verse text and reference
  const generateSermon = (reference, text) => {
    // Parse the reference to get book and other details
    const parts = reference.split(' ');
    let book = '';
    if (parts[0] === '1' || parts[0] === '2' || parts[0] === '3') {
      book = `${parts[0]} ${parts[1]}`;
    } else {
      book = parts[0];
    }

    // Template-based sermon generation
    // This is a simplified version - in a real app you might use a more sophisticated approach
    const introTemplates = [
      `Today we turn our hearts and minds to ${reference}, which tells us "${text}" These powerful words from the book of ${book} offer us profound insight into God's character and His plan for our lives.`,
      `The Scripture passage from ${reference} states, "${text}" What a profound statement that resonates deeply with our daily walk with Christ.`,
      `In our journey through Scripture today, we encounter these words from ${reference}: "${text}" Let's explore together what God is speaking to us through this passage.`
    ];

    const middleTemplates = [
      `When we examine this passage in context, we see that it speaks to the fundamental nature of faith and how we're called to live it out. The words "${text}" challenge us to consider how our daily choices reflect our trust in God's promises.`,
      `These words come to us across thousands of years, yet they remain as relevant today as when they were first written. The author of ${book} understood something essential about our relationship with God that we still need to hear today.`,
      `This verse reminds us that God's word is living and active, speaking into our specific circumstances. The phrase "${text}" isn't just ancient wisdom—it's a present reality that can transform how we approach our challenges.`
    ];

    const applicationTemplates = [
      `How might this truth change how you approach your week? Consider the areas in your life where you need to remember that "${text}" Could it be in your relationships, your work, or your personal spiritual journey?`,
      `I invite you to reflect on how these words from ${reference} might reshape your perspective on the challenges you're facing. What would it look like to fully embrace the truth that "${text}" in your daily life?`,
      `As we close our time with this passage, let's consider practical ways to apply this Scripture. Perhaps you need to write out this verse and place it somewhere visible, or maybe you need to share this truth with someone who's struggling.`
    ];

    const conclusionTemplates = [
      `As we conclude our reflection on ${reference}, let's pray that God would write these words on our hearts. May "${text}" become more than just words we read—may they become a lived reality in our daily walk with Christ.`,
      `Let's carry the truth of "${text}" with us this week, allowing it to shape our thoughts, words, and actions as we seek to honor God in all things.`,
      `May the powerful truth from ${reference} that "${text}" bring transformation to your life as you meditate on it throughout the coming days.`
    ];

    // Select random templates from each category
    const intro = introTemplates[Math.floor(Math.random() * introTemplates.length)];
    const middle = middleTemplates[Math.floor(Math.random() * middleTemplates.length)];
    const application = applicationTemplates[Math.floor(Math.random() * applicationTemplates.length)];
    const conclusion = conclusionTemplates[Math.floor(Math.random() * conclusionTemplates.length)];

    // Create contextual paragraph based on the book
    let contextParagraph = '';
    
    // Old Testament Historical Books
    if (['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther'].includes(book)) {
      contextParagraph = `In the historical context of ${book}, we see God's faithfulness to His covenant people. This passage reminds us that God's plan unfolds through human history, even when circumstances seem challenging. Just as God worked through the lives of these ancient people, He continues to work in our lives today, guiding us with the same faithfulness.`;
    }
    // Wisdom Literature
    else if (['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'].includes(book)) {
      contextParagraph = `${book} is part of the Bible's wisdom literature, offering timeless counsel for living a life that honors God. These inspired words provide practical guidance while pointing us to deeper spiritual truths. Just as the ancient Israelites treasured these teachings, we too can find direction for our daily decisions.`;
    }
    // Prophetic Books
    else if (['Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'].includes(book)) {
      contextParagraph = `The prophetic message of ${book} calls God's people back to faithfulness. Though spoken to ancient Israel, these words continue to challenge and inspire us today. The prophet reminds us that God is both just and merciful, calling us to authentic relationship with Him rather than mere religious observance.`;
    }
    // Gospels
    else if (['Matthew', 'Mark', 'Luke', 'John'].includes(book)) {
      contextParagraph = `In the Gospel of ${book}, we encounter Jesus Christ—His life, teachings, death, and resurrection. This passage helps us understand who Jesus is and what it means to follow Him. Through these inspired words, we're invited to see Jesus more clearly and love Him more dearly.`;
    }
    // Epistles and Revelation
    else {
      contextParagraph = `The book of ${book} was written to guide early Christians in understanding their faith and living it out in community. These words offer practical wisdom for the church then and now. As we read this passage, we're connected to the faith of those first believers while receiving guidance for our contemporary challenges.`;
    }

    // Combine all parts into a complete sermon
    return `${intro}\n\n${contextParagraph}\n\n${middle}\n\n${application}\n\n${conclusion}`;
  };

  // Function to fetch a random Bible verse
  const fetchRandomVerse = async () => {
    setIsLoading(true);
    try {
      // Get random Bible location
      const location = getRandomBibleLocation();
      
      // Fetch from Bible API
      const response = await fetch(`https://bible-api.com/${location.book}+${location.chapter}?translation=niv`);
      const data = await response.json();
      
      // If chapter has verses, pick a random one
      if (data.verses && data.verses.length > 0) {
        const randomVerseIndex = Math.floor(Math.random() * data.verses.length);
        const selectedVerse = data.verses[randomVerseIndex];
        
        // Generate sermon based on verse content
        const sermonContent = generateSermon(selectedVerse.reference, selectedVerse.text);
        
        setVerse({
          reference: selectedVerse.reference,
          text: selectedVerse.text,
          sermon: sermonContent
        });
      } else {
        // Fallback in case API doesn't return expected data
        getBackupVerse();
      }
    } catch (error) {
      console.error("Error fetching Bible verse:", error);
      getBackupVerse();
    } finally {
      setIsLoading(false);
    }
  };

  // Backup function in case API fails
  const getBackupVerse = () => {
    const backupVerses = [
      {
        reference: "John 3:16",
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        sermon: "The message of John 3:16 is often called the gospel in a nutshell. This single verse captures the essence of God's redemptive plan for humanity. The love described here isn't passive or sentimental—it's active and sacrificial. God didn't just feel love for the world; He gave His Son.\n\nThe Gospel of John consistently emphasizes the themes of light, life, and love. This verse appears in Jesus' conversation with Nicodemus, a religious leader seeking understanding. Jesus reveals that God's love extends far beyond the boundaries Nicodemus might have imagined.\n\nThe phrase 'For God so loved the world' reminds us that God's love isn't restricted to a particular group or nation. It encompasses all of humanity in its broken, fallen state. This love isn't earned or deserved—it's freely given. The word 'so' speaks to both the manner and measure of this love: it's beyond comprehension.\n\nHow might this truth impact your interactions with others? If God loved the world—including people who are different from you or even hostile to you—how should that shape your attitude toward them? Consider how your words and actions this week might reflect the expansive love described in this verse.\n\nAs we close, let John 3:16 remind you that you are personally included in God's love. May this foundational truth give you confidence to face whatever challenges come your way this week, knowing you are deeply loved by the Creator of the universe."
      },
      {
        reference: "Philippians 4:13",
        text: "I can do all this through him who gives me strength.",
        sermon: "Philippians 4:13 is one of the most quoted—and often misunderstood—verses in the Bible. 'I can do all this through him who gives me strength' isn't a promise of superhuman abilities or guaranteed success in any endeavor we choose. Rather, it's a testimony to Christ's sustaining power in every circumstance.\n\nThe apostle Paul wrote these words while in prison, facing an uncertain future. In the surrounding verses, he speaks about learning to be content whether living in plenty or in want. This context is crucial—Paul isn't claiming he can accomplish anything he sets his mind to; he's declaring that through Christ, he can endure any situation with the right perspective.\n\nThis epistle to the Philippians emphasizes joy and contentment regardless of circumstances. Paul's statement reflects a profound spiritual truth: our sufficiency is found not in ourselves but in Christ. The phrase 'through him who gives me strength' points to an ongoing transfer of divine power that sustains us.\n\nTake a moment to consider what challenges you're facing right now. Perhaps it's financial pressure, relationship difficulties, health concerns, or workplace stress. Rather than asking for these circumstances to immediately change, how might you invite Christ's strength to sustain you within them? What would contentment look like even if your situation remains difficult?\n\nAs we conclude, may Philippians 4:13 remind you that you're never expected to face life's challenges in your own strength. Christ offers His power not just for spectacular achievements but for daily faithfulness. Let's walk forward in the confidence that His strength is made perfect in our weakness."
      }
    ];

    const randomIndex = Math.floor(Math.random() * backupVerses.length);
    setVerse(backupVerses[randomIndex]);
  };

  // Load initial verse when component mounts
  useEffect(() => {
    fetchRandomVerse();
  }, []);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-serif text-green-800">Daily Bible Verse & Sermon</h1>
          <p className="text-gray-600">Reflect on God's word through NIV Scripture</p>
        </header>
        
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-700 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Finding today's message...</p>
          </div>
        ) : (
          <>
            <div className="bg-amber-50 p-6 rounded-md mb-6 border-l-4 border-green-700">
              <p className="text-lg md:text-xl italic mb-3">"{verse.text}"</p>
              <p className="text-right font-bold text-green-800">{verse.reference} (NIV)</p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-serif text-green-800 pb-3 border-b border-gray-200">Today's Sermon</h2>
              <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
                {verse.sermon.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </>
        )}
        
        <button 
          onClick={fetchRandomVerse}
          className="mt-8 mx-auto block bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Get Another Verse & Sermon'}
        </button>
        
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Created with ❤️ | Your Daily Bible Study App</p>
        </footer>
      </div>
    </main>
  );
}
