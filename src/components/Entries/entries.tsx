import { Mic, ToggleLeft } from "lucide-react";
import React, { useState } from "react";

function Entries() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);
    const [saving, setSaving] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSaving(true);

        try {
            const response = await fetch("/api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    content: message,
                    isPrivate,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert("Error saving post:" + errorData.error);
            } else {
                setTitle("");
                setMessage("");
                alert("Post saved successfully!");
            }
        } catch (error) {
            console.error("Error saving post", error);
            alert("Error saving post, please try again.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <section className="flex justify-center">
            <div>
                <div className="flex justify-between">
                    <h1 className="font-bold text-gray-900">New Post</h1>
                    <div className="flex">
                        <p className="mr-1">Private</p>
                        <ToggleLeft
                            className="cursor-pointer"
                            onClick={() => setIsPrivate(!isPrivate)}
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-4">
                        <div>
                            <input
                                id="title"
                                name="title"
                                value={title}
                                required
                                className="w-full px-3 py-2 mt-1 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                                placeholder="Post title here"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-3 py-2 mt-1 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                                placeholder="What is on you mind?"
                            ></textarea>

                            <div className="flex justify-between mt-2">
                                <Mic size={30} />
                                <button
                                    className="py-2 px-4 rounded-md font-normal bg-blue-400 text-gray-100 hover:bg-blue-600"
                                    type="submit"
                                    disabled={saving}
                                >
                                    {saving ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Entries;
