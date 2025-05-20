import React from "react";

function Button(props) {
	const { accent, icon, children, ...rest } = props;

	return (
		<button
			{...rest}
			className={`flex-row gap-3 px-4 py-1.5 transition-all cursor-pointer text-center flex items-center justify-between rounded-full text-sm ${
				accent
					? "bg-accent text-black hover:bg-accent-active"
					: "bg-secondary-active text-white border border-border"
			} ${rest.className || ""}`}
		>
			<h2 className="text-sm">{children}</h2>
			{icon && <i className={`far fa-${icon} text-lg`}></i>}
		</button>
	);
}

export default Button;
