import InputField from "../shared/InputField";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-white">
            <main className="flex-grow px-6 md:px-20 py-16">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Let’s talk.
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Ready to build something? Fill out the form, and we’ll get in touch within 24 hours.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-12">
                        <form className="space-y-6 bg-gray-800 rounded-lg p-10">
                            <InputField
                                labelName={"Name"}
                                type="text"
                                name="name"
                                value={"val"}
                                placeholder="Your name"
                            />
                            <InputField
                                labelName={"Email"}
                                type="email"
                                name="email"
                                value={"val"}
                                placeholder="Your Email"
                            />
                            <InputField
                                labelName={"Company (optional)"}
                                type="text"
                                name="company"
                                value={"val"}
                                placeholder="Your Company"
                            />
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none"
                                    placeholder="Tell us what you're looking for..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="inline-block bg-blue-600 w-full hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg"
                            >
                                Send message
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className="space-y-8 text-center">
                            <p className="text-gray-600 mt-2">
                                Betaflux Consulting Pvt Ltd
                                <br />
                                123, Some Road
                                <br />
                                Bangalore, KA 560001
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}
