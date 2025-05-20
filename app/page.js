'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [verse, setVerse] = useState({
    text: "Loading today's verse...",
    reference: "",
    lesson: "Loading today's lesson..."
  });

  // Bible verses collection with references and lessons
  const bibleVerses = [
    {
      text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      reference: "John 3:16",
      lesson: "This verse reminds us of God's immense love for humanity. The depth of this love is demonstrated through the sacrifice of His Son, Jesus Christ. Today, reflect on how this divine love has manifested in your own life. How can you share this love with others? Consider writing down three ways you can demonstrate selfless love to someone today."
    },
    {
      text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      reference: "Proverbs 3:5-6",
      lesson: "When we face life's challenges, our natural instinct is to rely on our own wisdom and resources. This verse invites us to a deeper trust in God's guidance. Today, identify an area in your life where you're struggling to trust God fully. What would it look like to surrender this area to Him? Practice replacing worry with prayer whenever your thoughts drift to this concern."
    },
    {
      text: "I can do all this through him who gives me strength.",
      reference: "Philippians 4:13",
      lesson: "Paul wrote these words while imprisoned, showing that God's strength transcends our circumstances. This verse isn't promising we can do anything we want, but rather that we can endure any situation with Christ's strength. What challenge are you facing that seems impossible? How might viewing it through the lens of Christ's strength change your perspective? Spend time in prayer asking for His strength today."
    },
    {
      text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      reference: "Ephesians 4:32",
      lesson: "Forgiveness can be one of the hardest commands to follow, yet it's central to our Christian walk. Our ability to forgive others is directly connected to our understanding of how much we've been forgiven. Is there someone you need to forgive? How might extending forgiveness free both you and them? Consider how God's forgiveness of your sins can motivate you to forgive others."
    },
    {
      text: "The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
      reference: "Psalm 23:1-3",
      lesson: "This beloved psalm paints a picture of God as our provider and caretaker. Like a shepherd who ensures his sheep have everything they need, God provides for our physical and spiritual needs. In what areas of your life do you need to experience God's restoration? Take time today to rest in His presence, allowing Him to refresh your soul amid life's demands."
    },
    {
      text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
      reference: "Joshua 1:9",
      lesson: "God spoke these words to Joshua as he was about to lead Israel into the Promised Land—a daunting task. Fear and discouragement are natural human responses to challenges, but God's presence gives us courage. What situation are you facing that requires courage? How does God's promise to be with you change how you approach it? Make a decision today to take one brave step forward."
    },
    {
      text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      reference: "Romans 8:28",
      lesson: "This verse doesn't promise that everything that happens is good, but that God can work through all circumstances—even painful ones—to accomplish good purposes in the lives of those who love Him. Think about a difficult situation in your life. How might God be working through this challenge? Look for evidence of His hand even in unexpected places."
    },
    {
      text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      reference: "Philippians 4:6-7",
      lesson: "Anxiety is a common human experience, but God offers us a better way to handle our worries. Through prayer with thanksgiving, we can experience His supernatural peace. What anxieties are you carrying today? Try this exercise: For each worry that comes to mind, turn it into a prayer request and then express gratitude for something related to that situation."
    },
    {
      text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.",
      reference: "1 Corinthians 13:4-5",
      lesson: "This passage defines love not as a feeling but as actions and attitudes. God calls us to a love that transcends our emotions and natural tendencies. Choose one quality of love mentioned in this verse (patience, kindness, humility, etc.) and focus on practicing it intentionally today. Notice how this conscious choice affects your interactions with others."
    },
    {
      text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
      reference: "Psalm 34:18",
      lesson: "In times of heartbreak and despair, God doesn't distance Himself—He draws near. This verse offers comfort by assuring us of God's special closeness during our most painful moments. If you're experiencing grief or pain today, try to sense God's presence with you. If you're not currently in a season of suffering, reach out to someone who is, being God's hands and feet to them in their time of need."
    },
    {
      text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
      reference: "Matthew 6:33",
      lesson: "Jesus teaches us about priorities in this verse. When we put God's kingdom and righteousness at the top of our list, everything else falls into place. What occupies most of your thoughts and energy? Is there something competing with God for first place in your life? Consider how your daily decisions would change if seeking God's kingdom were truly your highest priority."
    },
    {
      text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
      reference: "Galatians 6:9",
      lesson: "Doing good consistently can be exhausting, especially when we don't see immediate results. This verse encourages persistence, promising that our faithful efforts will eventually bear fruit. Are there areas in your life where you've been doing good but feel tempted to give up? What might it look like to persevere just a little longer? Remember that God's timing often differs from our own."
    },
    {
      text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
      reference: "2 Corinthians 5:17",
      lesson: "When we place our faith in Christ, we experience a spiritual transformation—we become new creations. The old life of sin no longer defines us. How have you experienced this newness in your own life? In what areas are you still living as if the old way still controls you? Thank God today for the specific ways He has made you new, and ask for help in the areas where you still struggle."
    },
    {
      text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
      reference: "Galatians 5:22-23",
      lesson: "The fruit of the Spirit describes the character qualities that develop naturally when God's Spirit lives within us. Unlike forced behavior modification, these traits grow organically as we stay connected to God. Which of these fruits is most evident in your life right now? Which one seems to be least developed? Spend time thanking God for His work in you and asking for continued growth in areas of weakness."
    },
    {
      text: "Cast all your anxiety on him because he cares for you.",
      reference: "1 Peter 5:7",
      lesson: "This verse offers us a powerful invitation to release our worries to God. The foundation for this transfer is God's deep care for us. Imagine physically taking your concerns and placing them in God's hands. What anxieties do you need to cast on Him today? Remember that holding onto our worries implies we don't fully trust God's care for us. Practice the releasing process through prayer."
    }
  ];

  // Function to display a verse based on the day of the year
  const displayDailyVerse = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const verseIndex = dayOfYear % bibleVerses.length;
    
    setVerse(bibleVerses[verseIndex]);
  };

  // Function to display a random verse
  const displayRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    setVerse(bibleVerses[randomIndex]);
  };

  // Initialize with today's verse when the component mounts
  useEffect(() => {
    displayDailyVerse();
  }, []);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-serif text-green-800">Daily Bible Verse</h1>
          <p className="text-gray-600">Reflect on God's word each day</p>
        </header>
        
        <div className="bg-amber-50 p-6 rounded-md mb-6 border-l-4 border-green-700">
          <p className="text-lg md:text-xl italic mb-3">"{verse.text}"</p>
          <p className="text-right font-bold text-green-800">{verse.reference}</p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-serif text-green-800 pb-3 border-b border-gray-200">Today's Reflection</h2>
          <div className="mt-4 text-gray-700 leading-relaxed">{verse.lesson}</div>
        </div>
        
        <button 
          onClick={displayRandomVerse}
          className="mt-8 mx-auto block bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md"
        >
          Get Another Verse
        </button>
        
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Created with ❤️ | Your Daily Bible Study App</p>
        </footer>
      </div>
    </main>
  );
}
