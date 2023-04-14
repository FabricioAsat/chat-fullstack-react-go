import { useEffect, useRef } from "react";

export const Messages = ({ allMessages, myId }) => {
	const scrollRef = useRef();

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
	}, [allMessages]);

	if (!allMessages) return <div className="h-full"></div>;

	console.log(allMessages);
	return (
		<div className="flex flex-col gap-y-2 h-full px-5 py-5 overflow-y-auto">
			{allMessages.map((message, index) => (
				<div
					key={index}
					ref={scrollRef}
					className={`max-w-sm rounded-lg px-4 py-2 ${
						message.idsender === myId
							? "ml-auto text-left bg-teal-800"
							: "mr-auto text-left bg-[#212529]"
					}`}
				>
					<p>{message.message}</p>
				</div>
			))}
		</div>
	);
};
