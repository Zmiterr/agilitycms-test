import React from "react";
import Link from "next/link";
import {ComponentWithInit, ImageField} from "@agility/nextjs";

/**
 * This footer is not part of the content in the CMS, feel free to remove this for production use.
 */
interface ILink {
	title: string
	path: string
}

interface ICustomData {
	siteName: string
	logo: ImageField
	links: ILink[]
}

const SiteFooter: ComponentWithInit<ICustomData | null> = ({globalData}) => {
	// set up Agility CMS Socials
	const header: ICustomData = globalData ? globalData["header"] : null

	return (
		<footer className="relative px-8 py-6 md:py-4 mt-8 bg-gray-100">
			<div className="max-w-screen-xl mx-auto md:flex md:items-center">
				<nav className="hidden md:flex space-x-10">
					{header.links.map((navitem, index) => {
						return (
							<Link
								href={navitem.path}
								key={`mobile-${index}`}
								className="text-base leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
							>
								{navitem.title}
							</Link>
						)
					})}
				</nav>
			</div>
		</footer>
	);
};

export default SiteFooter;
