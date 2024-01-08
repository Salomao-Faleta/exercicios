import { EmojiRating } from "@/components/emojiRating";


function Page() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <EmojiRating rate={0.0}/>
        </div>

    );
}

export default Page;