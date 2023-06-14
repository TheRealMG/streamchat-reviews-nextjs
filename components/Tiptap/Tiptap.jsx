"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    <p>Assassins Creed 2 is a semi open world action adventure game.</p>

    <h2>Story</h2>
    <p>Two plots, one set in the "modern" world and the other in 15th century Italy. Both are connected in an overarching way through the existence of Assassins and Templars. I think everyone one here knows the basis, so I'll leave it at that. The big "gotcha" in this game was just kinda of a head scratcher, pretty interesting but I have no hype cause I'm pretty sure everything gets retconned anyway. </p>
    
    <h2>Graphics</h2>
    <p>Pretty solid for being a 2009 game. It kinda looks like mud in some areas, but I think it's decent for the time. It somehow looks best on Switch. </p>
    
    <h2>Sound</h2>
    <p>Some of it's low quality but I can't judge because I think switch has an issue with low quality sound to keep the file size lower. Overall, fine. Music is fine.</p> 
    
    <h2>Gameplay</h2>
    <p>This is where most of my gripes come into play. I have a realization that a game does not age well not only due to the year it came out, but also genre. For the time, I bet the game was really great. But it has aged very poorly if you compare it to other games of the same genre in more recent times. The game is way too long for what it offers gameplay wise (and story wise), and I feel like both was so oddly paced the last 2/3rds of the game. You stop getting any sort of upgrades about mid game, and they just keep feeding you the same sort of filler like missions to continue the story. So not only is the game like 5 hours too long, before you can access the last section of the game, you have to go collect pages from all across the maps you've been to, which you only get the locations of those right then. You can fast travel between areas but not within the city (which are pretty big), combat is pretty mind numbing, parkour is frustrating more than helpful. I didn't really enjoy my time after halfway point of the game. </p>
    
    <p>Overall, a good game for it's time, but it's pretty dated.</p>
    `,
    editorProps: {
      attributes: {
        class:
          "prose lg:prose-lg form_input bg-white h-96 w-full overflow-y-scroll p-4 shadow-md",
      },
    },
  });

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
