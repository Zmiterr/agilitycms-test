import React from "react";
import Link from "next/link";
import {ComponentWithInit, ImageField} from "@agility/nextjs";
import {POSTS} from "../../staticData/posts";

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
			<div className="max-w-screen-xl mx-auto md:flex md:justify-around">
				<div className="flex flex-col gap-2">
				<h3 className="text-gray-900 mt-1 text-md group-hover:text-primary-500 transition duration-300">
					Pages
				</h3>
				<nav className="flex flex-col">
					{header.links.map((navitem, index) => {
						return (
							<Link
								href={navitem.path}
								key={`mobile-${index}`}
								className="text-xs leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
							>
								{navitem.title}
							</Link>
						)
					})}
				</nav>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-gray-900 mt-1 text-md group-hover:text-primary-500 transition duration-300">
						Categories
					</h3>
					<nav className="flex flex-col">

								<Link
									href={'/blog'}
									key={`mobile-General`}
									className="text-xs leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
								>
									General
								</Link>

					</nav>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-gray-9000 mt-1 text-md group-hover:text-primary-500 transition duration-300">
						Recent posts
					</h3>
					<nav className="flex flex-col">
						{POSTS.slice(0,7).map((navitem, index) => {
							return (
								<Link
									href={navitem.url}
									key={`mobile-${index}`}
									className="text-xs leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
								>
									{navitem.title}
								</Link>
							)
						})}
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;
