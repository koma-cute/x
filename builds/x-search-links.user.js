// ==UserScript==
// @name        x/search-links
// @version     1.1.2
// @author      dnsev-h
// @namespace   dnsev-h
// @description Add customizable search links to gallery pages
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM.getValue
// @grant       GM_setValue
// @grant       GM.setValue
// @include     https://exhentai.org/*
// @include     https://e-hentai.org/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABoVBMVEUAAAA0NTs3Nzc0NDsxMUE0NTs0NTszNDs0Njs0NTs0NDw0NTszNTszNTs1NTs0Njs1NTwzMzk0NDszNTszNDo0NDszNTszNDo0NDszNDs0NDsxNDo0NTs0NTszNDs0NTs0NDszNTs0NTs1NTwzMzo0NTszNTs1NTs1NTozNTo0NjrmXu////80NTvjXutAN0iBR4n3y/o5NkD//P/+9f70t/ijT6w8N0L2wfnwnvXvl/XqefLoavDmYO/UWdzMWNTCVstdPmT98f775fz40/v2x/n2xfntivTpc/DcW+XaW+LXWuDWWt+/VcenT7BNO1RKOlH87f376P364fz4zvrzsPfyqPbwo/XnY/DnZ+/gaOneXOjAVci1U72tUbaGSI59RYR5RIFvQ3dsQnRjP2tUPVtQO1dEOEz52fv1vvn0u/jztPjwm/Xsg/Prh/LobvDpju/kguzhcOnRWdm7VMSyUrqcTaWZTKGWTJ6US5ySSpqNSZV0Q3toQW9SPFn63PzulPTrgfPuqvLkd+viderlpeniiujhk+bGV8+OSpZWPV6jFuz0AAAAK3RSTlMA/AO/B/LXg2NGPfXfamZfJhCnpJmId3BYSyIU7OfQy7mvlBkLxI1QNDKds9RbVAAAAxJJREFUSMeNlmdb4lAQhYksUkTE3vuurnsyCYKCHey9997L2nvX7fVXbxJyI1Hv6vuN5zmHmbkzc28sz5PscngczmTLK8kqJA3hg/c18twi+ntx2tfT178YEuxxL+pL3aEgdLqXqOilvJzxcgTYrx5rq6mdAoJ+65v/ybMLaXAOx6OiRksnsECpfHlcCd0HJRxXiYwd4IIyuQYH3UgAPokPVAMrCTk8Q8o6FL6IseyiT7byDKlDUJgwGaqmEaQkjqGclsPAV9FEDdDs5p1UokA+/DQbAvU45deda13HjGimErjLf8tz2P2zGH3kqMcceXiG9xTE5NMQzfEWHvGr+BUjHu7oqFJCDJCLZyhYwY+Rj7p8pA7AwXA7pM0UboRbHEzVRfVj01DZFbvgS+CV/a4ZQAfrgEaDMiARbvOSyDcLSc2pvQs6gapGbBRxD1bYbEKtqLCHKI0B8RA3AneTSkISahS98rdRupRo6Kdys+xhWgrXgFbt+HUmFbMkySUxam+KjfIzdKfwRylToZZlpLq/YzWmd9kJsu9yhdK1Hzk0gE7V0MUCRN1XgpGE19bcA8AnaN10Uj/G1aZBZyu6eQvkNRZN7oWCNBSfnlaWZqU+tCmSbdaFgGpoR4SyWbkJi9CYXxsckjcHN4AWRbKPKHXRpqOXEnVDBZ3BzIw6ddCp1Axt6DEMTorAzKGWNMtIH/EmchjD0AQzE9rWRKllm31CWWyRqRtmttUUGJ9bVcM45sjJLncKg2Gk3QmDKXV263BOpUYN/U8Mo9Bhrf6GZeMCLBUuYaY6sIdYxsUWwOe3uR52xsw0q9hoxQ6A3g12ZXroqheYbQpHJDzLREsDFBZt7JZPJR2OYesIKrduC6PCk5GR6Sj241k6j9AdBgb86RYzZTKeZQYn9xQK0ZPHy86JgAE5L9Fuz376AD2eETbEZM3h3KsLeET3mW+Q3J44zptoW0YM4eDSOpGtOIv/tqf7f0OjZ/76TibKK85wKWo+ue7Q0vm1b3WISChIS/K+4jMjLY+E/ILUTNdby2tJZjlw+AeRxP9HDmKpUQAAAABJRU5ErkJggg==
// @icon64      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABnlBMVEUAAAA0NTs0NDs0NDs0NTs1NTs0NTozMzlLS0s0NTs0NDszNTs2NjsAAAA0NTs0NTs0NTs0NTs0NTszNTszNTo0NTs0NTwyNjwwMD80NTs0NTs0NTs0NTs0NDs0NTs0NTo0Njs1NTozNTozNTszNjsxNTkzNTs0NTo0NTo0NTs0NDsyNjszNTzmXu////80NTs+N0X87P3lXu7+9f6pULI5NkA1NTz//P/++f774/zrfvLnYu+6VMPzrvfulPTqd/LiXerCVsqfTadoQXBWPV5FOUz41Pv3yvrpb/HnZfDfXOnUWd3NWNWNSZV9RoR2RH5xQnhdPmVSO1k2NT386f363vz1v/nyqvfwoPbpcvHoavDoZ/DbW+TQWdnGV8+2U76xUrqUS5yER4xJOlFCOEn87/3xpvbuj/TshfP40Pr2xfn0uPjzsvfwmvXdXOa+VMeiTqqcTaWZTKGHSI+ARohtQnVjQGpOO1b98P352PvtivPsgvPpePHpg/DnfO/iaOrXW+DDVsyjT6yWS5/98P752fv0uvjrj/HlhezJWNI3l8R2AAAALXRSTlMAu5FYyidEBwP7wC0hAvXv66V/dG1gURcL592ujNi1meCEZ0wzENDOn5VJPzn5BnicAAAEYElEQVRYw73X51sTQRAG8IQEJPQiKM3e9d03JCSABAgkkd5Bkd5UpCioiL3X/9rbC3fZJAcrfvD3DR5m7nZmZ57DpXGq8NKlwlOuf3Oiuq6Mptqcwn+Iv1hLMhGPj8XXSJYXHffxZ8l49wCkwMKKn6VVx4o/XUB/dwC2TyNkTv4x4t1cXYDh/nrHm05ITSGWF/9teGUNV+eBmfZJIb1qnwHw1M/rfxdeUUq+HAR+BoXlW0cywwWXXm6tER4B0CFUm/IU4ZJCffVrOdZlnr5FpNkAsEKvtpAXOBaFtCEy/AD691mpS5DDHUh9LSLTIyASLsnVJKjnV0jrIktjHzDMAk2Cao7PQSmhagt4kuCNoxPkX+Xa8FPgl0OCll5gl95izQC7SUbwUTi4C0RXWa29CW52A40OCZo7gS9s0LbyJF8Ad4WDHiCwr3+Fm4yrbVDdBrq1jXDll4UHlTOoHgP9fhbqb9NKdoLm1tZm8xVWeFaXwMMRBISYVMJbt/uA3juyCvMTJZc1CSr5HIHG6V47PDgN02yj6ARi1K2381wG2vDOvsSdOPBQ3oUmFmj7OAxDuxV/H5ZOEewzyhgu0lwl+iMAPkxZ8SnNYhoYYaW2DaEVOVN35Pk3t5ESFK3AIq9oEhRX+DgO4IGQ3sDWZnTyHQJrLNJf5z3gfnII26DUQIh78gwndQnO8pm1FO4gZdr4eUr24Ux24TxVN5Uxa+ACsCmke0h5LQwz+BQuzRjJvKs0nMuzlzP9AWDKGiDLW2s5jmfMQwWZGB2O05dnN3LcrJjhFVJahdQui1CVXrHQsyiAIdYcfEzcYMx63gZst+2tsMx6Jb7IN7EEKRDjdWWnPBRSB0zK1ZwClliXVvEXSBoMhRu8XrfbWyOb0GNO8QxsU8L0APhMr3JrSsPzODA0wQNLwGRGE63pDAIDPJdKUMhx2KLzC12Gz4NR9AlpW70ESS3AE5ap62MUTt6bfzwL2/eMBOr6cGLWsCftGts1mFMTnOdXOLmb0YMte70B82xQZ7cbTh7LXdCm3ALjF9ZwdNGrJtiFk1ZrDlIpzJuY3Grl6RvQSdBo2CzS9PUcTNcQK9SPkmE4aZG3PkPbZHKYYvQok8gxOGkUD2adWtM8i4CfvtQ0nfaF+uFgK7iOLLfNGgaWRiaUd3Af0oY2ZOuVJ5C+KH2oZmIQGqk3eA1TlKUuWx1D8b3R0djY+Kp/B0dqD/bCNMca5esyp4SWJqiyu/AeSd3pezU/N89wKdfNRRzl3gdgINKPQJOfF10O3IzgCDMfgYUEJxIhKjtNdUbzBoDx6HMlDF/xOH/tlWtqMLBHXjvhunzCdYgKDuFwg8Mhlnk0X7oxHOL37ssJ+spPab5T6Y8iS39kObZGsiRH/89fAXcyTr30fCxEQ+01z2mX3kWuDlixc4vLowkZ6/PmVFnP1il2c21osSvSNDS6H5bBNXWVt5Sa612uo6W0oN5T5Dq+W/VnCtzlFZ7cYtd/8Adr2MpDGqTx0AAAAABJRU5ErkJggg==
// @homepage    https://dnsev-h.github.io/x/
// @supportURL  https://github.com/dnsev-h/x/issues
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-search-links.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-search-links.user.js
// ==/UserScript==
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";


const galleryDetailsStylesheetId = "x-gallery-details-style";
const galleryDetailsContainerId = "x-gallery-details";
const galleryDetailsLinksContainerClassName = "x-gallery-details-links";
const galleryDetailsContentContainerClassName = "x-gallery-details-content-container";

let galleryDetailsInstance = null;
let waitForGalleryDetailsPromise = null;


class GalleryDetails {
	constructor(containerNode) {
		this.containerNode = containerNode;
		this.linksContainer = containerNode.querySelector(`.${galleryDetailsLinksContainerClassName}`);
		this.contentContainer = containerNode.querySelector(`.${galleryDetailsContentContainerClassName}`);
	}

	addLink(title, order) {
		if (this.linksContainer === null) { return null; }

		const n0 = document.createElement("span");
		n0.className = "x-gallery-details-link-container";
		if (typeof(order) === "number") {
			n0.style.order = `${Math.round(order)}`;
		}

		const n1 = document.createElement("a");
		n1.className = "x-gallery-details-link";
		n1.textContent = title;

		n0.appendChild(n1);

		this.linksContainer.appendChild(n0);
		return n1;
	}

	addContentContainer(name, order) {
		if (this.contentContainer === null) { return null; }

		const n0 = document.createElement("div");
		n0.className = "x-gallery-details-content";
		if (typeof(name) === "string") {
			n0.setAttribute("data-x-content-name", name);
		}
		if (typeof(order) === "number") {
			n0.style.order = `${Math.round(order)}`;
		}

		this.contentContainer.appendChild(n0);
		return n0;
	}

	getContentContainer(name) {
		return this.contentContainer !== null ? this.contentContainer.querySelector(`[data-x-content-name="${name}"]`) : null;
	}
}


function findParentWithClass(node, className) {
	if (node !== null) {
		while ((node = node.parentNode) !== null) {
			if (node.classList.contains(className)) {
				return node;
			}
		}
	}
	return null;
}

function getGalleryInfoContainer() {
	return findParentWithClass(document.querySelector(".gm h1#gn"), "gm");
}

function createGalleryDetailsStylesheet() {
	const id = galleryDetailsStylesheetId;
	const style = require("../style");
	if (!style.hasStylesheet(id)) {
		const src = require("./style/gallery-details.css");
		style.addStylesheet(src, id);
	}
}

function createGalleryDetailsHtml() {
	const n0 = document.createElement("div");
	n0.id = galleryDetailsContainerId;
	n0.className = "x-gallery-details";

	const n1 = document.createElement("div");
	n1.className = "x-gallery-details-inner";

	let n2 = document.createElement("div");
	n2.className = galleryDetailsLinksContainerClassName;
	n1.appendChild(n2);

	n2 = document.createElement("div");
	n2.className = galleryDetailsContentContainerClassName;
	n1.appendChild(n2);

	n0.appendChild(n1);

	return n0;
}

function getGalleryDetails(allowCreate) {
	let n = document.getElementById(galleryDetailsContainerId);
	if (n !== null) {
		if (galleryDetailsInstance === null || galleryDetailsInstance.containerNode !== n) {
			galleryDetailsInstance = new GalleryDetails(n);
		}
		return galleryDetailsInstance;
	}

	if (!allowCreate) { return null; }

	const galleryInfoContainer = getGalleryInfoContainer();
	if (galleryInfoContainer === null) { return null; }

	createGalleryDetailsStylesheet();
	n = createGalleryDetailsHtml();

	galleryInfoContainer.appendChild(n);

	galleryDetailsInstance = new GalleryDetails(n);
	return galleryDetailsInstance;
}

function waitForGalleryDetails() {
	const gd = getGalleryDetails(true);
	if (gd !== null) { return Promise.resolve(gd); }

	if (waitForGalleryDetailsPromise === null) {
		waitForGalleryDetailsPromise = createWaitForGalleryDetailsPromise();
	}

	return waitForGalleryDetailsPromise;
}

function createWaitForGalleryDetailsPromise() {
	return new Promise((resolve) => {
		const mo = new MutationObserver(() => {
			const gd = getGalleryDetails(true);
			if (gd === null) { return; }

			mo.disconnect();
			waitForGalleryDetailsPromise = null;
			resolve(gd);
		});
		mo.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}


module.exports = {
	get: getGalleryDetails,
	waitFor: waitForGalleryDetails
};

},{"../style":22,"./style/gallery-details.css":11}],2:[function(require,module,exports){
"use strict";

class GalleryIdentifier {
	constructor(id, token) {
		this.id = id;
		this.token = token;
	}

	static createFromUrl(url) {
		const match = /^.*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?$/.exec(url);
		if (match === null) { return null; }

		const path = match[1].replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/").split("/");
		if (path[0] !== "g" || path.length < 3) { return null; }

		const id = parseInt(path[1], 10);
		return (Number.isNaN(id) ? null : new GalleryIdentifier(id, path[2]));
	}
}


module.exports = {
	GalleryIdentifier
};

},{}],3:[function(require,module,exports){
"use strict";

const types = require("./types");
const utils = require("./utils");


function getCssUrl(urlString) {
	const pattern = /url\s*\(\s*(['"])?/;
	const match = pattern.exec(urlString);
	if (match === null) { return null; }

	const quote = match[1] || "";
	urlString = urlString.substr(match.index + match[0].length - quote.length);

	const pattern2 = new RegExp(`(${quote})\\s*\\)\\s*$`);
	const match2 = pattern2.exec(urlString);
	if (match2 === null) { return null; }

	const url = urlString.substr(0, match2.index + match2[1].length);

	let url2 = url;
	if (!quote) {
		url2 = url.replace(/"/g, "\\\"");
		url2 = `"${url2}"`;
	} else if (quote === "'") {
		url2 = url.substr(1, url.length - 2);
		url2 = url2.replace(/\\'/g, "'");
		url2 = `"${url2}"`;
	}

	try {
		return JSON.parse(url2);
	} catch (e) {
		return url;
	}
}

function getTimestamp(text) {
	const match = /([0-9]+)-([0-9]+)-([0-9]+)\s+([0-9]+):([0-9]+)/.exec(text);
	if (match === null) { return null; }

	return Date.UTC(
		parseInt(match[1], 10), // year
		parseInt(match[2], 10) - 1, // month
		parseInt(match[3], 10), // day
		parseInt(match[4], 10), // hours
		parseInt(match[5], 10), // minutes
		0, // seconds
		0); // milliseconds
}


function getTitle(html) {
	const node = html.querySelector("#gn");
	return (node !== null ? node.textContent.trim() : null);
}

function getTitleOriginal(html) {
	const node = html.querySelector("#gj");
	return (node !== null ? node.textContent.trim() : null);
}

function getMainThumbnailUrl(html) {
	const node = html.querySelector("#gd1>div");
	if (node === null) { return null; }

	let url = getCssUrl(node.style.backgroundImage);
	if (url !== null) { return url; }

	const img = node.querySelector("img[src]");
	return (img !== null ? img.getAttribute("src") : null);
}

function getCategory(html) {
	const node = html.querySelector("#gdc>div[onclick]");
	if (node === null) { return null; }

	const pattern = /['"].*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?['"]/;
	const match = pattern.exec(node.getAttribute("onclick") || "");
	return (match !== null ? match[1] : null);
}

function getUploader(html) {
	const node = html.querySelector("#gdn>a");
	if (node === null) { return null; }

	const pattern = /^.*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?$/;
	const match = pattern.exec(node.getAttribute("href") || "");
	return (match !== null ? (match[1].split("/")[1] || "") : null);
}

function getRatingCount(html) {
	const node = html.querySelector("#rating_count");
	if (node === null) { return null; }

	const value = parseInt(node.textContent.trim(), 10);
	return (Number.isNaN(value) ? null : value);
}

function getRatingAverage(html) {
	const node = html.querySelector("#rating_label");
	if (node === null) { return null; }

	const pattern = /average:\s*([0-9\.]+)/i;
	const match = pattern.exec(node.textContent);
	if (match === null) { return null; }

	const value = parseFloat(match[1]);
	return (Number.isNaN(value) ? null : value);
}

function getFavoriteCount(html) {
	const node = html.querySelector("#favcount");
	if (node === null) { return null; }

	const pattern = /\s*([0-9]+|once)/i;
	const match = pattern.exec(node.textContent);
	if (match === null) { return null; }

	const match1 = match[1];
	return (match1.toLowerCase() === "once" ? 1 : parseInt(match1, 10));
}

function getFavoriteCategory(html) {
	const node = html.querySelector("#fav>div.i");
	if (node === null) { return null; }

	const title = node.getAttribute("title") || "";
	const pattern = /background-position\s*:\s*\d+(?:px)?\s+(-?\d+)(?:px)/;
	const match = pattern.exec(node.getAttribute("style") || "");
	const index = (match !== null) ?
		Math.floor((Math.abs(parseInt(match[1], 10)) - 2) / 19) :
		-1;

	return { index, title };
}

function getThumbnailSize(html) {
	const nodes = html.querySelectorAll("#gdo4>.nosel");
	if (nodes.length < 2) { return null; }
	return (nodes[0].classList.contains("ths") ? "normal" : "large");
}

function getThumbnailRows(html) {
	const nodes = html.querySelectorAll("#gdo2>.nosel");
	if (nodes.length === 0) { return null; }

	const pattern = /\s*([0-9]+)/;
	for (const node of nodes) {
		if (node.classList.contains("ths")) {
			const match = pattern.exec(node.textContent);
			if (match !== null) {
				return parseInt(match[1], 10);
			}
		}
	}

	return null;
}

function getTags(html) {
	const pattern = /(.+):/;
	const groups = html.querySelectorAll("#taglist tr");
	const tags = {};

	for (const group of groups) {
		const tds = group.querySelectorAll("td");
		if (tds.length === 0) { continue; }

		const match = pattern.exec(tds[0].textContent);
		const namespace = (match !== null ? match[1].trim() : "");

		let namespaceTags;
		if (tags.hasOwnProperty(namespace)) {
			namespaceTags = tags[namespace];
		} else {
			namespaceTags = [];
			tags[namespace] = namespaceTags;
		}

		const tagDivs = tds[tds.length - 1].querySelectorAll("div");
		for (const div of tagDivs) {
			const link = div.querySelector("a");
			if (link === null) { continue; }

			const tag = link.textContent.trim();
			namespaceTags.push(tag);
		}
	}

	return tags;
}

function getDetailsNodes(html) {
	return html.querySelectorAll("#gdd tr");
}

function getDateUploaded(detailsNodes) {
	if (detailsNodes.length <= 0) { return null; }
	const node = detailsNodes[0].querySelector(".gdt2");
	return (node !== null ? getTimestamp(node.textContent) : null);
}

function getVisibleInfo(detailsNodes) {
	let visible = true;
	let visibleReason = null;

	if (detailsNodes.length > 2) {
		const node = detailsNodes[2].querySelector(".gdt2");
		if (node !== null) {
			const pattern = /no\s+\((.+?)\)/i;
			const match = pattern.exec(node.textContent);
			if (match !== null) {
				visible = false;
				visibleReason = match[1].trim();
			}
		}
	}

	return { visible, visibleReason };
}

function getLanguageInfo(detailsNodes) {
	let language = null;
	let translated = false;

	if (detailsNodes.length > 3) {
		const node = detailsNodes[3].querySelector(".gdt2");
		if (node !== null) {
			const textNode = node.firstChild;
			if (textNode !== null && textNode.nodeType === Node.TEXT_NODE) {
				language = textNode.nodeValue.trim();
			}

			const trNode = node.querySelector(".halp");
			translated = (trNode !== null && trNode.textContent.trim().toLowerCase() === "tr");
		}
	}

	return { language, translated };
}

function getApproximateTotalFileSize(detailsNodes) {
	if (detailsNodes.length <= 4) { return null; }

	const node = detailsNodes[4].querySelector(".gdt2");
	if (node === null) { return null; }

	const pattern = /([0-9\.]+)\s*(\w+)/i;
	const match = pattern.exec(node.textContent);
	return (match !== null ? utils.getBytesSizeFromLabel(match[1], match[2]) : null);
}

function getFileCount(detailsNodes) {
	if (detailsNodes.length <= 5) { return null; }

	const node = detailsNodes[5].querySelector(".gdt2");
	if (node === null) { return null; }

	const pattern = /([0-9,]+)\s*pages/i;
	const match = pattern.exec(node.textContent);
	return (match !== null ? parseInt(match[1].replace(/,/g, ""), 10) : null);
}

function getParent(detailsNodes) {
	if (detailsNodes.length <= 1) { return null; }

	const node = detailsNodes[1].querySelector(".gdt2>a");
	if (node === null) { return null; }

	const info = utils.getGalleryIdentifierAndPageFromUrl(node.getAttribute("href") || "");
	return (info !== null ? info.identifier : null);
}

function getNewerVersions(html) {
	const results = [];
	const nodes = html.querySelectorAll("#gnd>a");

	for (const node of nodes) {
		const info = utils.getGalleryIdentifierAndPageFromUrl(node.getAttribute("href") || "");
		if (info === null) { continue; }

		const galleryInfo = {
			identifier: info.identifier,
			name: node.textContent.trim(),
			dateUploaded: null
		};

		if (node.nextSibling !== null) {
			galleryInfo.dateUploaded = getTimestamp(node.nextSibling.textContent);
		}

		results.push(galleryInfo);
	}

	return results;
}

function getTorrentCount(html) {
	const nodes = html.querySelectorAll("#gd5 .g2>a");
	const pattern = /\btorrent\s+download\s*\(\s*(\d+)\s*\)/i;
	for (const node of nodes) {
		const match = pattern.exec(node.textContent);
		if (match !== null) {
			return parseInt(match[1], 10);
		}
	}

	return null;
}

function getArchiverKey(html) {
	const nodes = html.querySelectorAll("#gd5 .g2>a");
	const pattern = /\barchive\s+download\b/i;
	for (const node of nodes) {
		const match = pattern.exec(node.textContent);
		if (match !== null) {
			const pattern2 = /&or=([^'"]*)['"]/;
			const match2 = pattern2.exec(node.getAttribute("onclick") || "");
			return (match2 !== null ? match2[1] : null);
		}
	}

	return null;
}

function populateGalleryInfoFromHtml(info, html) {
	// General
	info.title = getTitle(html);
	info.titleOriginal = getTitleOriginal(html);
	info.mainThumbnailUrl = getMainThumbnailUrl(html);
	info.category = getCategory(html);
	info.uploader = getUploader(html);

	info.ratingCount = getRatingCount(html);
	info.ratingAverage = getRatingAverage(html);

	info.favoriteCount = getFavoriteCount(html);
	info.favoriteCategory = getFavoriteCategory(html);

	info.thumbnailSize = getThumbnailSize(html);
	info.thumbnailRows = getThumbnailRows(html);

	info.newerVersions = getNewerVersions(html);

	info.torrentCount = getTorrentCount(html);
	info.archiverKey = getArchiverKey(html);

	// Details
	const detailsNodes = getDetailsNodes(html);

	info.dateUploaded = getDateUploaded(detailsNodes);

	info.parent = getParent(detailsNodes);

	const visibleInfo = getVisibleInfo(detailsNodes);
	info.visible = visibleInfo.visible;
	info.visibleReason = visibleInfo.visibleReason;

	const languageInfo = getLanguageInfo(detailsNodes);
	info.language = languageInfo.language;
	info.translated = languageInfo.translated;

	info.approximateTotalFileSize = getApproximateTotalFileSize(detailsNodes);

	info.fileCount = getFileCount(detailsNodes);

	// Tags
	info.tags = getTags(html);
	info.tagsHaveNamespace = true;
}

function getFromHtml(html, url) {
	const link = html.querySelector(".ptt td.ptds>a[href],.ptt td.ptdd>a[href]");
	if (link === null) { return null; }

	const idPage = utils.getGalleryIdentifierAndPageFromUrl(link.getAttribute("href") || "");
	if (idPage === null) { return null; }

	const info = new types.GalleryInfo();
	info.identifier = idPage.identifier;
	info.currentPage = idPage.page;
	info.source = "html";
	populateGalleryInfoFromHtml(info, html);
	info.sourceSite = utils.getSourceSiteFromUrl(url);
	info.dateGenerated = Date.now();
	return info;
}


module.exports = getFromHtml;

},{"./types":4,"./utils":5}],4:[function(require,module,exports){
"use strict";

const GalleryIdentifier = require("../gallery-identifier").GalleryIdentifier;


class GalleryInfo {
	constructor() {
		this.identifier = null;
		this.title = null;
		this.titleOriginal = null;
		this.dateUploaded = null;
		this.category = null;
		this.uploader = null;
		this.ratingAverage = null;
		this.ratingCount = null;
		this.favoriteCategory = null;
		this.favoriteCount = null;
		this.mainThumbnailUrl = null;
		this.thumbnailSize = null;
		this.thumbnailRows = null;
		this.fileCount = null;
		this.approximateTotalFileSize = null;
		this.visible = true;
		this.visibleReason = null;
		this.language = null;
		this.translated = null;
		this.archiverKey = null;
		this.torrentCount = null;
		this.tags = null;
		this.tagsHaveNamespace = null;
		this.currentPage = null;
		this.parent = null;
		this.newerVersions = null;
		this.source = null;
		this.sourceSite = null;
		this.dateGenerated = null;
	}
}


module.exports = {
	GalleryIdentifier,
	GalleryInfo
};

},{"../gallery-identifier":2}],5:[function(require,module,exports){
"use strict";

const types = require("./types");

const sizeLabelToBytesPrefixes = [ "b", "kb", "mb", "gb" ];


function getGalleryPageFromUrl(url) {
	const match = /\?(?:(|[\w\W]*?&)p=([\+\-]?\d+))?/.exec(url);
	if (match !== null && match[1]) {
		const page = parseInt(match[1], 10);
		if (!Number.isNaN(page)) { return page; }
	}
	return null;
}

function getGalleryIdentifierAndPageFromUrl(url) {
	const identifier = types.GalleryIdentifier.createFromUrl(url);
	if (identifier === null) { return null; }

	const page = getGalleryPageFromUrl(url);
	return { identifier, page };
}

function getBytesSizeFromLabel(number, label) {
	let i = sizeLabelToBytesPrefixes.indexOf(label.toLowerCase());
	if (i < 0) { i = 0; }
	return Math.floor(parseFloat(number) * Math.pow(1024, i));
}

function getSourceSiteFromUrl(url) {
	const pattern = /^(?:(?:[a-z][a-z0-9\+\-\.]*:\/*|\/{2,})([^\/]*))?(\/?[\w\W]*)$/i;
	const match = pattern.exec(url);

	if (match !== null && match[1]) {
		const host = match[1].toLowerCase();
		if (host.indexOf("exhentai") >= 0) { return "exhentai"; }
		if (host.indexOf("e-hentai") >= 0) { return "e-hentai"; }
	}

	return null;
}


module.exports = {
	getGalleryIdentifierAndPageFromUrl,
	getBytesSizeFromLabel,
	getSourceSiteFromUrl
};

},{"./types":4}],6:[function(require,module,exports){
"use strict";


function addLink(label, url, order) {
	const n = document.getElementById("nb");
	if (n === null) { return null; }

	const div = document.createElement("div");
	const a = document.createElement("a");
	a.href = url;
	a.textContent = label;
	if (typeof(order) === "number") {
		div.style.order = `${order}`;
	}
	div.appendChild(a);
	n.appendChild(div);

	return div;
}


module.exports = {
	addLink
};

},{}],7:[function(require,module,exports){
"use strict";

const overrideAttributeName = "data-x-override-page-type";


function setOverride(value) {
	if (value) {
		document.documentElement.setAttribute(overrideAttributeName, value);
	} else {
		document.documentElement.removeAttribute(overrideAttributeName);
	}
}

function getOverride() {
	const value = document.documentElement.getAttribute(overrideAttributeName);
	return value ? value : null;
}

function get(doc, location) {
	const overrideType = getOverride();
	if (overrideType !== null) {
		return overrideType;
	}

	if (doc.querySelector("#searchbox") !== null) {
		return "search";
	}
	if (doc.querySelector("input[name=favcat]") !== null) {
		return "favorites";
	}
	if (doc.querySelector("#i1>h1") !== null) {
		return "image";
	}
	if (doc.querySelector(".gm h1#gn") !== null) {
		return "gallery";
	}
	if (doc.querySelector("#profile_outer") !== null) {
		return "settings";
	}
	if (doc.querySelector("#torrentinfo") !== null) {
		return "torrentInfo";
	}

	let n = doc.querySelector("body>.d>p");
	if (
		(n !== null && /gallery\s+has\s+been\s+removed/i.test(n.textContent)) ||
		doc.querySelector(".eze_dgallery_table") !== null) { // eze resurrection
		return "deletedGallery";
	}

	n = doc.querySelector("img[src]");
	if (n !== null && location !== null) {
		const p = location.pathname;
		if (
			n.getAttribute("src") === location.href &&
			p.substr(0, 3) !== "/t/" &&
			p.substr(0, 5) !== "/img/") {
			return "panda";
		}
	}

	// Unknown
	return null;
}


module.exports = {
	get,
	getOverride,
	setOverride
};

},{}],8:[function(require,module,exports){
"use strict";

const style = require("../style");


class PopupMenu {
	constructor() {
		this.menuNode = document.createElement("div");
		this.menuNode.className = "x-popup-menu";

		this._onDocumentClickHookElement = null;
		this._onDocumentClick = (e) => onDocumentClickToClose(e, this);
	}

	show(node, fixed, anchor) {
		/* globals DOMRect */
		insertStylesheet();

		const parent = document.body;
		if (this.menuNode.parentNode !== parent) {
			parent.appendChild(this.menuNode);
		}
		this.menuNode.style.left = "0";
		this.menuNode.style.top = "0";
		this.menuNode.classList.toggle("x-popup-menu-fixed", fixed);

		const htmlRect = document.documentElement.getBoundingClientRect();
		const nodeRect = (node instanceof DOMRect) ? node : node.getBoundingClientRect();
		const menuRect = this.menuNode.getBoundingClientRect();
		const windowWidth = window.innerWidth || 0;
		const windowHeight = window.innerHeight || 0;

		let xAnchor = null;
		let yAnchor = null;
		if (isObject(anchor)) {
			let v = anchor.x;
			if (typeof(v) === "number" && !Number.isNaN(v)) { xAnchor = (v > 0.5 ? 1.0 : 0.0); }
			v = anchor.y;
			if (typeof(v) === "number" && !Number.isNaN(v)) { yAnchor = (v > 0.5 ? 1.0 : 0.0); }
		}

		if (xAnchor === null) {
			xAnchor = (nodeRect.x + menuRect.width >= windowWidth) ? 1.0 : 0.0;
		}

		if (yAnchor === null) {
			yAnchor = (nodeRect.y + nodeRect.height + menuRect.height >= windowHeight) ? 0.0 : 1.0;
		}

		let x = nodeRect.x + xAnchor * (nodeRect.width - menuRect.width);
		let y = nodeRect.y + yAnchor * nodeRect.height - menuRect.height * (1.0 - yAnchor);

		x = Math.max(0.0, Math.min(windowWidth - menuRect.width, x));
		y = Math.max(0.0, Math.min(windowHeight - menuRect.height, y));

		if (!fixed) {
			x -= htmlRect.x;
			y -= htmlRect.y;
		}

		this.menuNode.style.left = `${x}px`;
		this.menuNode.style.top = `${y}px`;

		if (this._onDocumentClickHookElement === null) {
			this._onDocumentClickHookElement = document.documentElement;
			this._onDocumentClickHookElement.addEventListener("click", this._onDocumentClick, false);
		}
	}

	hide() {
		if (this.menuNode.parentNode !== null) {
			this.menuNode.parentNode.removeChild(this.menuNode);
		}

		if (this._onDocumentClickHookElement !== null) {
			this._onDocumentClickHookElement.removeEventListener("click", this._onDocumentClick, false);
			this._onDocumentClickHookElement = null;
		}
	}

	addOption(options) {
		const node = document.createElement("a");
		node.className = "x-popup-menu-option";
		node.setAttribute("rel", "noreferrer");

		let closeOnClick = true;
		if (isObject(options)) {
			if (typeof(options.title) === "string") {
				node.textContent = options.title;
			}
			if (typeof(options.url) === "string") {
				node.href = options.url;
			}
			if (typeof(options.target) === "string") {
				node.target = options.target;
			}
			if (typeof(options.order) === "number") {
				node.style.order = `${options.order}`;
			}
			if (typeof(options.callback) === "function") {
				node.addEventListener("click", options.callback, false);
			}
			closeOnClick = (typeof(options.close) !== "boolean" || options.close);
		}

		if (closeOnClick) {
			node.addEventListener("click", (e) => onMenuItemClickToClose(e, this), false);
		}

		this.menuNode.appendChild(node);
		return node;
	}

	removeOption(node) {
		if (node.parentNode === this.menuNode) {
			node.parentNode.removeChild(node);
		}
	}
}


function onDocumentClickToClose(e, menu) {
	if (!menu.menuNode.contains(e.target)) {
		menu.hide();
	}
}

function onMenuItemClickToClose(e, menu) {
	menu.hide();
}

function isObject(v) {
	return v !== null && typeof(v) === "object" && !Array.isArray(v);
}

function insertStylesheet() {
	const id = "x-popup-menu";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style/popup-menu.css");
	style.addStylesheet(src, id);
}


module.exports = {
	PopupMenu
};

},{"../style":22,"./style/popup-menu.css":12}],9:[function(require,module,exports){
"use strict";


const style = require("../style");
const urlFragment = require("../url-fragment");


const settingsContainerClass = "x-settings-container";
const settingsContainerHiddenClass = "x-settings-container-hidden";
const defaultSettingsHiddenClass = "x-settings-hidden";

let settingsContainerOuter = null;
let settingsContainer = null;


function addLink() {
	const id = "x-nav-settings-link";

	let n = document.getElementById(id);
	if (n !== null) { return n; }

	const navBar = require("./navigation-bar");
	n = navBar.addLink("x", `/uconfig.php${urlFragment.create("settings")}`, 1);
	if (n === null) { return null; }

	n.id = id;
	return n;
}

function initialize() {
	settingsContainerOuter = document.querySelector("#outer.stuffbox");
	if (settingsContainerOuter === null) { return; }

	settingsContainer = settingsContainerOuter.querySelector(`.${settingsContainerClass}`);
	if (settingsContainer === null) {
		settingsContainer = document.createElement("div");
		settingsContainer.className = `${settingsContainerClass} ${settingsContainerHiddenClass}`;
		settingsContainerOuter.appendChild(settingsContainer);
	}

	const id = "x-settings";
	if (!style.hasStylesheet(id)) {
		const src = require("./style/settings.css");
		style.addStylesheet(src, id);
	}

	urlFragment.addRoute(/^\/settings(\/[\w\W]*)?$/, onSettingsPageChanged);
}

function onSettingsPageChanged(match) {
	setSettingsVisible(match !== null);
}

function setSettingsVisible(visible) {
	if (settingsContainerOuter === null || settingsContainer === null) { return; }

	if (settingsContainer.classList.contains(settingsContainerHiddenClass) !== visible) {
		// No change
		return;
	}

	settingsContainer.classList.toggle(settingsContainerHiddenClass, !visible);

	for (const child of settingsContainerOuter.children) {
		if (child === settingsContainer) { continue; }
		child.classList.toggle(defaultSettingsHiddenClass, visible);
	}
}

function addSection(header, id, order) {
	if (settingsContainer === null) { return null; }

	const fullId = `x-settings-section-${id}`;

	let section = settingsContainer.querySelector(`#${fullId}`);
	if (section === null) {
		section = document.createElement("div");
		section.id = fullId;
		section.className = "x-settings-section-container";
		if (typeof(order) === "number") {
			section.style.order = `${order}`;
		}

		settingsContainer.appendChild(section);
	}

	let cls = "x-settings-section-header";
	let sectionHeader = section.querySelector(`.${cls}`);
	if (sectionHeader === null) {
		sectionHeader = document.createElement("h2");
		sectionHeader.className = cls;
		sectionHeader.textContent = header;
		const relative = section.firstChild;
		if (relative !== null) {
			section.insertBefore(relative, sectionHeader);
		} else {
			section.appendChild(sectionHeader);
		}
	}

	cls = "x-settings-section-content";
	let sectionContent = section.querySelector(`.${cls}`);
	if (sectionContent === null) {
		sectionContent = document.createElement("div");
		sectionContent.className = cls;
		section.appendChild(sectionContent);
	}

	return sectionContent;
}


module.exports = {
	addLink,
	initialize,
	addSection
};

},{"../style":22,"../url-fragment":23,"./navigation-bar":6,"./style/settings.css":13}],10:[function(require,module,exports){
"use strict";

function isDark() {
	return (
		window.location.hostname.indexOf("exhentai") >= 0 ||
		document.documentElement.classList.contains("x-force-dark"));
}

function setDocumentDarkFlag() {
	document.documentElement.classList.toggle("x-is-dark", isDark());
}

function getArrowIconUrl() {
	return (isDark() ? "https://exhentai.org/img/mr.gif" : "https://ehgt.org/g/mr.gif");
}


module.exports = {
	isDark,
	setDocumentDarkFlag,
	getArrowIconUrl
};

},{}],11:[function(require,module,exports){
module.exports = ".x-gallery-details{font-size:10pt;border:none;padding:.5em 0 0 0;margin:-3px -5px}.x-gallery-details-content:before,.x-gallery-details:before{content:\"\";display:block;margin:0 .5em;border-top:1px solid #000}:root:not(.x-is-dark) .x-gallery-details-content:before,:root:not(.x-is-dark) .x-gallery-details:before{border-top-color:#5c0d12}.x-gallery-details-inner{border:none;margin:0}.x-gallery-details-links{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;align-content:flex-start;padding:.5em;margin-left:-1em}.x-gallery-details-link-container{flex:0 1 auto;margin-left:1em}.x-gallery-details-link{display:inline-block;cursor:pointer}.x-gallery-details-content-container{display:flex;width:100%;flex-flow:column wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start}.x-gallery-details-content{flex:0 1 auto;width:100%}";
},{}],12:[function(require,module,exports){
module.exports = ".x-popup-menu{position:absolute;font-size:10pt;border:1px solid #000;background-color:#43464e;display:flex;flex-direction:column;z-index:210;text-align:left;box-shadow:.25em .25em 0 0 rgba(0,0,0,.5)}:root:not(.x-is-dark) .x-popup-menu{border-color:#5c0d12;background-color:#e3e0d1;box-shadow:.25em .25em 0 0 rgba(92,13,18,.5)}.x-popup-menu.x-popup-menu-fixed{position:fixed}.x-popup-menu-option{padding:.25em 1em;line-height:1.375em;text-decoration:none}.x-popup-menu-option:hover{background-color:#34353b}:root:not(.x-is-dark) .x-popup-menu-option:hover{background-color:#edebdf}";
},{}],13:[function(require,module,exports){
module.exports = ".x-settings-container{display:flex;flex-direction:column;margin-top:-1em}.x-settings-container.x-settings-container-hidden{display:none}.x-settings-hidden{display:none!important}.x-settings-option select{margin-right:.5em}.x-settings-section-container{display:block;width:100%;margin-top:1em}.x-settings-section-content{margin:8px auto 10px 10px;clear:both}.x-settings-section-header{font-size:1.25em;line-height:1.5em;margin:.25em 0}.x-settings-section{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;align-content:flex-start;flex-wrap:nowrap;width:100%;padding:.5em 0}.x-settings-section+.x-settings-section{border-top:1px solid rgba(0,0,0,.25)}:root:not(.x-is-dark) .x-settings-section+.x-settings-section{border-top-color:rgba(92,13,18,.25)}.x-settings-section-left{flex:1 1 auto;padding-right:.5em}.x-settings-section-right{flex:0 0 auto;min-width:30%;text-align:right}.x-settings-section-title{font-weight:700;line-height:1.5em}.x-settings-section-description{line-height:1.35em}.x-settings-section-description+.x-settings-section-description{margin-top:.25em}input.x-settings-section-input[type=number],input.x-settings-section-input[type=text]{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e;box-sizing:border-box}:root:not(.x-is-dark) input.x-settings-section-input[type=number],:root:not(.x-is-dark) input.x-settings-section-input[type=text]{background-color:#e3e0d1}input.x-settings-section-input[type=text]{width:20em}input.x-settings-section-input[type=number]{width:5em;-moz-appearance:textfield}input.x-settings-section-input[type=number]::-webkit-inner-spin-button,input.x-settings-section-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}textarea.x-settings-section-textarea{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e;resize:vertical;font-size:inherit;width:100%;min-height:1.875em;height:4.625em;box-sizing:border-box;font-family:\"Courier New\",Courier,monospace}:root:not(.x-is-dark) textarea.x-settings-section-textarea{background-color:#e3e0d1}.x-settings-input-table-container .lc{display:inline-block;margin-right:-6px}.x-settings-container code{font-family:'Courier New',Courier,monospace;background-color:#43464e;font-weight:700}:root:not(.x-is-dark) .x-settings-container code{background-color:#e3e0d1}.x-settings-light-text{font-weight:400;opacity:.75}.x-settings-input-table-container{display:inline-block;text-align:left}.x-settings-input-table{display:table}.x-settings-input-row{display:table-row}.x-settings-input-row.x-settings-input-header-row{font-size:.8em;line-height:1em;opacity:.75}.x-settings-input-cell{display:table-cell}.x-settings-input-cell+.x-settings-input-cell{padding-left:.25em}.x-settings-input-row:not(.x-settings-input-header-row)+.x-settings-input-row>.x-settings-input-cell{padding-top:.25em}.x-settings-input-cell.x-settings-input-cell-middle{vertical-align:middle}.x-settings-input-cell.x-settings-input-cell-fill{width:100%}.x-settings-input-cell.x-settings-input-cell-nowrap{white-space:nowrap}.x-settings-input-label{cursor:pointer;margin:0 0 0 1em}.x-settings-input-checkbox-prefix{vertical-align:middle;display:inline-block;padding-right:.5em}";
},{}],14:[function(require,module,exports){
"use strict";

const gm = require("./gm");


function create(configKey, configDefault) {
	let config = null;
	let configGetPromise = null;


	async function loadConfig() {
		const configString = await gm.getValue(configKey, null);
		if (typeof(configString) === "string") {
			try {
				const c = JSON.parse(configString);
				if (c !== null && typeof(c) === "object" && !Array.isArray(c)) {
					return Object.assign({}, configDefault, c);
				}
			} catch (e) {}
		}
		return Object.assign({}, configDefault);
	}

	function get() {
		if (config !== null) { return Promise.resolve(config); }

		if (configGetPromise === null) {
			configGetPromise = loadConfig().then((v) => config = v);
		}

		return configGetPromise;
	}

	async function save() {
		if (config !== null) {
			await gm.setValue(configKey, JSON.stringify(config, null, ""));
		}
	}

	async function bindInput(node, settingName, options, valueName) {
		const c = await get();

		if (typeof(valueName) === "undefined") {
			valueName = getDefaultValueName(node);
		}

		const updateInput = () => {
			const {value, valid} = convertToType(c[settingName], options, true);
			if (valid) { node[valueName] = value; }
		};

		updateInput();

		node.addEventListener("change", () => {
			const {value, valid} = convertToType(node[valueName], options, false);
			if (valid) {
				c[settingName] = value;
				save();
			}

			updateInput();
		}, false);
	}


	return {
		get,
		save,
		bindInput
	};
}


const defaultTypeConvertOptions = {};


function getDefaultValueName(node) {
	switch (node.tagName) {
		case "INPUT":
			if (node.type === "checkbox") { return "checked"; }
			break;
	}

	return "value";
}

function convertToType(value, options, toInput) {
	if (typeof(options) === "string") {
		return convertToTypeNormalized(value, options, defaultTypeConvertOptions, toInput);
	} if (options !== null && typeof(options) === "object" && typeof(options.type) === "string") {
		return convertToTypeNormalized(value, options.type, options, toInput);
	} else {
		return { value, valid: true };
	}
}

function convertToTypeNormalized(value, typeName, options, toInput) {
	let valid = true;

	// Convert
	switch (typeName) {
		case "boolean":
			value = !!value;
			break;
		case "integer":
		case "number":
			value = (typeName === "number" ? parseFloat(`${value}`) : parseInt(`${value}`, 10));
			if (!Number.isFinite(value)) {
				value = 0;
				valid = false;
			}
			break;
		case "string":
			value = `${value}`;
			break;
	}

	// Transform
	if (!toInput && typeof(options.inputToValue) === "function") {
		value = options.inputToValue(value);
	}

	// Limits
	switch (typeName) {
		case "integer":
		case "number":
			if (typeof(options.min) === "number" && value < options.min) { value = options.min; }
			if (typeof(options.max) === "number" && value > options.max) { value = options.max; }
			break;
		case "string":
			if (typeof(options.maxLength) === "number" && value.length > options.maxLength) {
				value = value.substr(0, options.maxLength);
			}
			break;
	}

	// Transform
	if (toInput && typeof(options.valueToInput) === "function") {
		value = options.valueToInput(value);
	}

	return { value, valid };
}


module.exports = {
	create
};

},{"./gm":15}],15:[function(require,module,exports){
"use strict";

function toPromise(fn, self) {
	return (...args) => {
		return new Promise((resolve, reject) => {
			try {
				resolve(fn.apply(self, args));
			}
			catch (e) {
				reject(e);
			}
		});
	};
}

const gm = ((objects) => {
	try {
		const v = GM; // jshint ignore:line
		if (v !== null && typeof(v) === "object") {
			return v;
		}
	}
	catch (e) { }

	try {
		for (const obj of objects) {
			if (obj.GM !== null && typeof(obj.GM) === "object") {
				return obj.GM;
			}
		}
	}
	catch (e) { }

	const mapping = [
		[ "getValue", "GM_getValue" ],
		[ "setValue", "GM_setValue" ],
		[ "deleteValue", "GM_deleteValue" ],
		[ "xmlHttpRequest", "GM_xmlhttpRequest" ]
	];

	const result = {};
	for (const [key, value] of mapping) {
		let promise = null;
		for (const obj of objects) {
			const fn = obj[value];
			if (typeof(fn) === "function") {
				promise = toPromise(fn, obj);
				break;
			}
		}
		if (promise === null) {
			promise = () => new Promise((resolve, reject) => reject(new Error(`Not supported (${key})`)));
		}
		result[key] = promise;
	}
	return result;
}).call(this, [this, window]); // jshint ignore:line


module.exports = gm;

},{}],16:[function(require,module,exports){
"use strict";

let isReadyValue = false;
let callbacks = null;
let checkIntervalId = null;
const checkIntervalRate = 250;


function isHooked() {
	return callbacks !== null;
}

function hook() {
	callbacks = [];
	window.addEventListener("load", checkIfReady, false);
	window.addEventListener("DOMContentLoaded", checkIfReady, false);
	document.addEventListener("readystatechange", checkIfReady, false);
	checkIntervalId = setInterval(checkIfReady, checkIntervalRate);
}

function unhook() {
	const cbs = callbacks;

	callbacks = null;
	window.removeEventListener("load", checkIfReady, false);
	window.removeEventListener("DOMContentLoaded", checkIfReady, false);
	document.removeEventListener("readystatechange", checkIfReady, false);
	clearInterval(checkIntervalId);
	checkIntervalId = null;

	invoke(cbs);
}

function invoke(callbacks) {
	for (let cb of callbacks) {
		try {
			cb();
		}
		catch (e) {
			console.error(e);
		}
	}
}

function isReady() {
	if (isReadyValue) { return true; }

	if (document.readyState === "interactive" || document.readyState === "complete") {
		if (isHooked()) { unhook(); }
		isReadyValue = true;
		return true;
	}
	return false;
}

function checkIfReady() {
	isReady();
}


function onReady(callback) {
	if (isReady()) {
		callback();
		return;
	}

	if (!isHooked()) { hook(); }

	callbacks.push(callback);
}


module.exports = {
	onReady: onReady,
	get isReady() { return isReady(); }
};

},{}],17:[function(require,module,exports){
"use strict";

const configKey = "x-search-links-config";
const searchTargetsDefault = [
	{
		title: "Search by Name",
		url: "/?f_cats=0&f_sname=1&f_search=\"{short-name}\"",
		enabled: true
	},
	{
		title: "Search by Full Name",
		url: "/?f_cats=0&f_sname=1&f_search=\"{full-name}\"",
		enabled: true
	},
	{
		title: "Search by Name (nhentai.net)",
		url: "https://nhentai.net/search/?q=\"{short-name}\"",
		enabled: true
	},
	{
		title: "Search by Full Name (nhentai.net)",
		url: "https://nhentai.net/search/?q=\"{full-name}\"",
		enabled: true
	},
	{
		title: "Search by Name (hitomi.la)",
		url: "https://hitomi.la/search.html?{short-name}",
		enabled: true
	},
	{
		title: "Search by Full Name (chaika)",
		url: "https://panda.chaika.moe/search/?qsearch={full-name}",
		enabled: true
	},
	{
		title: "Search by Name (chaika)",
		url: "https://panda.chaika.moe/search/?qsearch={short-name}",
		enabled: true
	},
	{
		title: "Search by URL (chaika)",
		url: "https://panda.chaika.moe/search/?qsearch={url}",
		enabled: true
	}
];
const configDefault = {
	searchTargets: getDefaultSearchTargets()
};

function getDefaultSearchTargets() {
	return JSON.parse(JSON.stringify(searchTargetsDefault, null, ""));
}

module.exports = require("../config").create(configKey, configDefault);
module.exports.getDefaultSearchTargets = getDefaultSearchTargets;

},{"../config":14}],18:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const style = require("../style");
const pageType = require("../api/page-type");
const galleryDetails = require("../api/gallery-details");
const PopupMenu = require("../api/popup-menu").PopupMenu;
const settings = require("./settings");

let menu = null;


async function setupGalleryPage(gd) {
	const config = await require("./config").get();
	const searchTargets = config.searchTargets;
	if (!Array.isArray(searchTargets) || searchTargets.length === 0) { return; }

	const link = gd.addLink("Custom Search", 0);
	if (link === null) { return; }

	link.addEventListener("click", (e) => onMenuLinkClick(e, link, searchTargets), false);
}

function onMenuLinkClick(e, node, searchTargets) {
	if (menu === null) {
		menu = createMenu(searchTargets);
	}

	if (menu !== null) {
		menu.show(node, false, null);
	}

	e.preventDefault();
	e.stopPropagation();
	return false;
}

function createMenu(searchTargets) {
	const options = [];
	for (const searchTarget of searchTargets) {
		if (searchTarget.enabled === false) { continue; }
		options.push({
			title: searchTarget.title,
			url: searchTarget.url,
			target: "_blank"
		});
	}

	if (options.length === 0) { return null; }

	const getGalleryInfoFromHtml = require("../api/gallery-info/get-from-html");
	const info = getGalleryInfoFromHtml(document.documentElement, window.location.href);
	if (info === null) { return null; }

	const replacements = getGalleryInfoReplacements(info);

	const menu = new PopupMenu();
	for (const option of options) {
		option.url = formatUrl(option.url, replacements);
		menu.addOption(option);
	}

	return menu;
}

function formatUrl(url, replacements) {
	return url.replace(/\{([^\}]*)\}/g, (m0, m1) => {
		return Object.prototype.hasOwnProperty.call(replacements, m1) ? replacements[m1] : m0;
	});
}

function getGalleryInfoReplacements(galleryInfo) {
	return {
		"short-name": encodeURIComponent(getShortTitle(galleryInfo.title)),
		"full-name": encodeURIComponent(galleryInfo.title),
		"url": encodeURIComponent(getGalleryUrl(galleryInfo.identifier))
	};
}

function getShortTitle(title) {
	const prefixTags = /^\s*(\(([^\)]*?)\)|\[([^\]]*?)\]|\{([^\}]*?)\})\s*/i;
	const suffixTags = /\s*(\(([^\)]*?)(?:\)|$)|\[([^\]]*?)(?:\]|$)|\{([^\}]*?)(?:\}|$))\s*$/i;

	let m;
	while ((m = prefixTags.exec(title))) {
		title = title.substr(m.index + m[0].length);
	}
	while ((m = suffixTags.exec(title))) {
		title = title.substr(0, m.index);
	}
	return title;
}

function getGalleryUrl(id) {
	const loc = window.location;
	return `${loc.protocol}//${loc.host}/g/${id.id}/${id.token}/`;
}


function insertStylesheet() {
	const id = "x-search-links";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style.css");
	style.addStylesheet(src, id);
}


function main() {
	settings.addLink();

	const currentPageType = pageType.get(document, location);
	if (currentPageType === "settings") {
		insertStylesheet();
		settings.initialize();
		return;
	}

	(async () => {
		const gd = await galleryDetails.waitFor();
		insertStylesheet();
		setupGalleryPage(gd);
	})();
}


ready.onReady(main);

},{"../api/gallery-details":1,"../api/gallery-info/get-from-html":3,"../api/page-type":7,"../api/popup-menu":8,"../ready":16,"../style":22,"./config":17,"./settings":20,"./style.css":21}],19:[function(require,module,exports){
module.exports = "<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Search Targets</div>\r\n\t\t<div class=\"x-settings-section-description\">\r\n\t\t\tList of search search targets.\r\n\t\t</div>\r\n\t\t<div class=\"x-settings-section-description\">\r\n\t\t\t<div class=\"x-settings-input-table-container x-search-links-search-target-container\">\r\n\t\t\t\t<div class=\"x-settings-input-table\">\r\n\t\t\t\t\t<div class=\"x-settings-input-row x-settings-input-header-row\">\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">Order</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">Title</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">URL</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">Enabled</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"x-settings-input-row x-search-links-search-target-entry\">\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell x-settings-input-cell-nowrap\">\r\n\t\t\t\t\t\t\t<input class=\"x-search-links-settings-button x-search-links-remove-button\" type=\"button\" value=\"&#x2716;\" /><input class=\"x-search-links-settings-button x-search-links-move-up-button\" type=\"button\" value=\"&#x25B2;\" /><input class=\"x-search-links-settings-button x-search-links-move-down-button\" type=\"button\" value=\"&#x25BC;\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t\t\t<input class=\"x-settings-section-input x-search-links-title-input\" type=\"text\" spellcheck=\"false\" data-x-settings-option=\"title\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell x-settings-input-cell-fill\">\r\n\t\t\t\t\t\t\t<input class=\"x-settings-section-input x-search-links-url-input\" type=\"text\" spellcheck=\"false\" data-x-settings-option=\"url\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell x-settings-input-cell-middle\">\r\n\t\t\t\t\t\t\t<label><span class=\"lc\"><input class=\"x-settings-section-input x-search-links-enabled-input\" type=\"checkbox\" data-x-settings-for=\"enabled\" /><span></span></label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"x-settings-input-table-container\">\r\n\t\t\t\t<div class=\"x-settings-input-table\">\r\n\t\t\t\t\t<div class=\"x-settings-input-row x-search-links-search-target-entry\">\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t\t\t\t<input class=\"x-search-links-settings-button x-search-links-add-button\" type=\"button\" value=\"&#x2795;&#xFE0E;\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell x-settings-input-cell-middle\">\r\n\t\t\t\t\t\t\t<a class=\"x-search-links-reset-link\">Reset to default</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
},{}],20:[function(require,module,exports){
"use strict";

const settings = require("../api/settings");

let settingsController = null;


class SettingsController {
	constructor(config, configValue, template, searchTargetParent, addButton, resetButton, hideIfEmptyNode) {
		this.config = config;
		this.configValue = configValue;
		this.template = template;
		this.searchTargetParent = searchTargetParent;
		this.addButton = addButton;
		this.resetButton = resetButton;
		this.hideIfEmptyNode = hideIfEmptyNode;

		this.searchTargets = [];
		this.searchTargetControllers = [];
		this.setupSearchTargets();

		this.addButton.addEventListener("click", () => this.addSearchTarget(), false);
		this.resetButton.addEventListener("click", () => this.resetSearchTargets(), false);
	}

	async addSearchTarget() {
		const searchTarget = { title: "", url: "", enabled: true };
		const index = this.searchTargets.length;
		this.searchTargets.push(searchTarget);
		this.searchTargetControllers.push(new SettingsSearchTargetController(this, searchTarget, index));
		if (index > 0) {
			const c = this.searchTargetControllers[index - 1];
			if (c !== null) { c.updateIndex(c.index); }
		}

		this.updateSearchTargetCount();

		await this.saveConfig();
	}

	async resetSearchTargets() {
		this.cleanupSearchTargets();

		this.configValue.searchTargets = this.config.getDefaultSearchTargets();
		await this.saveConfig();

		this.setupSearchTargets();
	}

	cleanupSearchTargets() {
		for (const searchTargetController of this.searchTargetControllers) {
			searchTargetController.destroy();
		}
		this.searchTargetControllers = [];
	}

	setupSearchTargets() {
		if (!Array.isArray(this.configValue.searchTargets)) {
			this.configValue.searchTargets = [];
		}

		this.searchTargets = this.configValue.searchTargets;
		this.searchTargetControllers = [];

		for (let i = 0, ii = this.searchTargets.length; i < ii; ++i) {
			const searchTarget = this.searchTargets[i];
			const controller = isObject(searchTarget) ? new SettingsSearchTargetController(this, searchTarget, i) : null;
			this.searchTargetControllers.push(controller);
		}

		this.updateSearchTargetCount();
	}

	async move(controller, offset) {
		const indexOld = controller.index;
		const indexNew = Math.max(0, Math.min(this.searchTargetControllers.length - 1, indexOld + offset));
		if (indexNew === indexOld) { return; }

		const searchTarget = this.searchTargets[indexOld];

		this.searchTargets.splice(indexOld, 1);
		this.searchTargets.splice(indexNew, 0, searchTarget);

		this.searchTargetControllers.splice(indexOld, 1);
		this.searchTargetControllers.splice(indexNew, 0, controller);

		for (let i = Math.min(indexOld, indexNew), ii = Math.max(indexOld, indexNew) + 1; i < ii; ++i) {
			const c = this.searchTargetControllers[i];
			if (c !== null) { c.updateIndex(i); }
		}

		let next = null;
		for (let i = indexNew + 1, ii = this.searchTargetControllers.length; i < ii; ++i) {
			const c = this.searchTargetControllers[i];
			if (c !== null) {
				next = c;
				break;
			}
		}

		if (next !== null && next.row.parentNode !== null) {
			next.row.parentNode.insertBefore(controller.row, next.row);
		} else {
			this.searchTargetParent.appendChild(controller.row);
		}

		await this.saveConfig();
	}

	async remove(controller) {
		const index = controller.index;
		this.searchTargets.splice(index, 1);
		this.searchTargetControllers.splice(index, 1);

		controller.destroy();

		for (let i = Math.max(0, index - 1), ii = this.searchTargetControllers.length; i < ii; ++i) {
			const c = this.searchTargetControllers[i];
			if (c !== null) { c.updateIndex(i); }
		}

		this.updateSearchTargetCount();

		await this.saveConfig();
	}

	updateSearchTargetCount() {
		if (this.hideIfEmptyNode === null) { return; }
		this.hideIfEmptyNode.style.display = (this.searchTargetControllers.length > 0 ? "" : "none");
	}

	async saveConfig() {
		this.config.save();
	}
}

class SettingsSearchTargetController {
	constructor(parent, searchTarget, index) {
		this.parent = parent;
		this.searchTarget = searchTarget;
		this.index = index;

		this.hookedEvents = [];
		this.row = this.parent.template.cloneNode(true);
		this.parent.searchTargetParent.appendChild(this.row);

		this.removeButton = this.row.querySelector(".x-search-links-remove-button");
		this.moveUpButton = this.row.querySelector(".x-search-links-move-up-button");
		this.moveDownButton = this.row.querySelector(".x-search-links-move-down-button");
		this.titleField = this.row.querySelector(".x-search-links-title-input");
		this.urlField = this.row.querySelector(".x-search-links-url-input");
		this.enabledCheckbox = this.row.querySelector(".x-search-links-enabled-input");

		this.titleField.value = (typeof(searchTarget.title) === "string" ? searchTarget.title : "");
		this.urlField.value = (typeof(searchTarget.url) === "string" ? searchTarget.url : "");
		this.enabledCheckbox.checked = !!searchTarget.enabled;

		const self = this;
		this._hook(this.removeButton, "click", () => this.remove());
		this._hook(this.moveUpButton, "click", () => this.moveUp());
		this._hook(this.moveDownButton, "click", () => this.moveDown());
		this._hook(this.titleField, "change", function () { self.setTitle(this.value); });
		this._hook(this.urlField, "change", function () { self.setUrl(this.value); });
		this._hook(this.enabledCheckbox, "change", function () { self.setEnabled(this.checked); });

		this.updateIndex(index);
	}

	destroy() {
		if (this.row === null) { return; }

		for (const info of this.hookedEvents) {
			info.node.removeEventListener(info.event, info.callback, false);
		}
		this.hookedEvents = [];

		this.row.parentNode.removeChild(this.row);
		this.row = null;
	}

	remove() {
		this.parent.remove(this);
	}

	moveUp() {
		this.parent.move(this, -1);
	}

	moveDown() {
		this.parent.move(this, 1);
	}

	setTitle(value) {
		if (typeof(value) !== "string") { return; }
		this.searchTarget.title = value;
		this.parent.saveConfig();
	}

	setUrl(value) {
		if (typeof(value) !== "string") { return; }
		this.searchTarget.url = value;
		this.parent.saveConfig();
	}

	setEnabled(value) {
		this.searchTarget.enabled = !!value;
		this.parent.saveConfig();
	}

	updateIndex(index) {
		this.index = index;
		this.moveUpButton.disabled = (index <= 0);
		this.moveDownButton.disabled = (index >= this.parent.searchTargets.length - 1);
	}

	_hook(node, event, callback) {
		this.hookedEvents.push({ node, event, callback });
		node.addEventListener(event, callback, false);
	}
}


function isObject(v) {
	return (v !== null && typeof(v) === "object" && !Array.isArray(v));
}

function addLink() {
	settings.addLink();
}

async function initialize() {
	settings.initialize();

	const section = settings.addSection("Search Links", "search-links", 3);
	if (section !== null) {
		const config = require("./config");
		const configValue = await config.get();
		setupSettings(config, configValue, section);
	}
}

function setupSettings(config, configValue, container) {
	if (settingsController !== null) { return; }

	container.innerHTML = require("./settings.html");

	const template = container.querySelector(".x-search-links-search-target-entry");
	const parent = template.parentNode;
	const addButton = container.querySelector(".x-search-links-add-button");
	const resetButton = container.querySelector(".x-search-links-reset-link");
	const hideNode = container.querySelector(".x-search-links-search-target-container");
	parent.removeChild(template);

	settingsController = new SettingsController(config, configValue, template, parent, addButton, resetButton, hideNode);
}


module.exports = {
	addLink,
	initialize
};

},{"../api/settings":9,"./config":17,"./settings.html":19}],21:[function(require,module,exports){
module.exports = "input.x-search-links-settings-button[type=button]{display:inline-block;border:none;border-radius:0;margin:0;padding:0;line-height:1.875em;box-sizing:border-box;font-size:inherit;font-weight:700;width:1.875em;height:1.875em;min-height:0;background-color:#43464e;text-align:center;cursor:pointer}:root.x-is-dark input.x-search-links-settings-button[type=button]:disabled{color:rgba(241,241,241,.5);-webkit-text-fill-color:rgba(241,241,241,.5)}:root:not(.x-is-dark) input.x-search-links-settings-button[type=button]{background-color:#e3e0d1}input.x-search-links-settings-button[type=button]::-moz-focus-inner{border:0}input.x-search-links-settings-button[type=button]+input.x-search-links-settings-button[type=button]{margin-left:.25em}input.x-settings-section-input[type=text].x-search-links-url-input{width:100%}.x-search-links-search-target-container{width:100%}.x-search-links-reset-link{text-decoration:underline;cursor:pointer}.x-search-links-reset-link:not(:hover){opacity:.5}";
},{}],22:[function(require,module,exports){
"use strict";

let apiStyle = null;


function getId(id) {
	return `${id}-stylesheet`;
}

function getStylesheet(id) {
	return document.getElementById(getId(id));
}

function hasStylesheet(id) {
	return !!getStylesheet(id);
}

function addStylesheet(source, id) {
	if (apiStyle === null) { apiStyle = require("./api/style"); }
	apiStyle.setDocumentDarkFlag();

	const style = document.createElement("link");
	style.rel = "stylesheet";
	style.href = `data:text/css;base64,${window.btoa(source)}`;
	if (typeof(id) === "string") {
		style.id = getId(id);
	}
	document.head.appendChild(style);
	return style;
}


module.exports = {
	hasStylesheet,
	getStylesheet,
	addStylesheet
};

},{"./api/style":10}],23:[function(require,module,exports){
"use strict";


const xPrefix = "#!x";
const separator = "/";
const routes = [];


function clear(addHistory) {
	const url = window.location.pathname + window.location.search;
	if (addHistory) {
		window.history.pushState(null, "", url);
	} else {
		window.history.replaceState(null, "", url);
	}
}

function create(path) {
	return path ? `${xPrefix}${separator}${path}` : xPrefix;
}

function addRoute(match, callback) {
	const route = { match, callback };
	routes.push(route);
	if (routes.length === 1) {
		window.addEventListener("popstate", onUrlFragmentChanged, false);
	}
	testRoutes([route]);
}

function removeRoute(match, callback) {
	for (let i = 0, ii = routes.length; i < ii; ++i) {
		const route = routes[i];
		if (route.match === match && route.callback === callback) {
			routes.splice(i, 1);
			if (routes.length === 0) {
				window.removeEventListener("popstate", onUrlFragmentChanged, false);
			}
			return true;
		}
	}
	return false;
}

function getXFragment() {
	const fragment = window.location.hash;
	return (
		!fragment ||
		fragment.length < xPrefix.length ||
		fragment.substr(0, xPrefix.length) !== xPrefix ||
		(fragment.length > xPrefix.length && fragment[xPrefix.length] !== separator)) ?
		null :
		fragment.substr(xPrefix.length);
}

function testRoutes(routes) {
	const fragment = getXFragment();
	if (fragment === null) { return; }

	for (const route of routes) {
		const match = route.match.exec(fragment);
		route.callback(match, fragment);
	}
}

function onUrlFragmentChanged() {
	testRoutes(routes);
}


module.exports = {
	clear: clear,
	create: create,
	addRoute: addRoute,
	removeRoute: removeRoute
};

},{}]},{},[18])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktZGV0YWlscy5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pZGVudGlmaWVyLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbC5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3R5cGVzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHMuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BvcHVwLW1lbnUuanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvZ2FsbGVyeS1kZXRhaWxzLmNzcyIsInNyYy9hcGkvc3R5bGUvcG9wdXAtbWVudS5jc3MiLCJzcmMvYXBpL3N0eWxlL3NldHRpbmdzLmNzcyIsInNyYy9jb25maWcuanMiLCJzcmMvZ20uanMiLCJzcmMvcmVhZHkuanMiLCJzcmMvc2VhcmNoLWxpbmtzL2NvbmZpZy5qcyIsInNyYy9zZWFyY2gtbGlua3MvbWFpbi5qcyIsInNyYy9zZWFyY2gtbGlua3Mvc2V0dGluZ3MuaHRtbCIsInNyYy9zZWFyY2gtbGlua3Mvc2V0dGluZ3MuanMiLCJzcmMvc2VhcmNoLWxpbmtzL3N0eWxlLmNzcyIsInNyYy9zdHlsZS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JRQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3QgZ2FsbGVyeURldGFpbHNTdHlsZXNoZWV0SWQgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLXN0eWxlXCI7XHJcbmNvbnN0IGdhbGxlcnlEZXRhaWxzQ29udGFpbmVySWQgPSBcIngtZ2FsbGVyeS1kZXRhaWxzXCI7XHJcbmNvbnN0IGdhbGxlcnlEZXRhaWxzTGlua3NDb250YWluZXJDbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLWxpbmtzXCI7XHJcbmNvbnN0IGdhbGxlcnlEZXRhaWxzQ29udGVudENvbnRhaW5lckNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWRldGFpbHMtY29udGVudC1jb250YWluZXJcIjtcclxuXHJcbmxldCBnYWxsZXJ5RGV0YWlsc0luc3RhbmNlID0gbnVsbDtcclxubGV0IHdhaXRGb3JHYWxsZXJ5RGV0YWlsc1Byb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbmNsYXNzIEdhbGxlcnlEZXRhaWxzIHtcclxuXHRjb25zdHJ1Y3Rvcihjb250YWluZXJOb2RlKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lck5vZGUgPSBjb250YWluZXJOb2RlO1xyXG5cdFx0dGhpcy5saW5rc0NvbnRhaW5lciA9IGNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihgLiR7Z2FsbGVyeURldGFpbHNMaW5rc0NvbnRhaW5lckNsYXNzTmFtZX1gKTtcclxuXHRcdHRoaXMuY29udGVudENvbnRhaW5lciA9IGNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihgLiR7Z2FsbGVyeURldGFpbHNDb250ZW50Q29udGFpbmVyQ2xhc3NOYW1lfWApO1xyXG5cdH1cclxuXHJcblx0YWRkTGluayh0aXRsZSwgb3JkZXIpIHtcclxuXHRcdGlmICh0aGlzLmxpbmtzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRcdG4wLmNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWRldGFpbHMtbGluay1jb250YWluZXJcIjtcclxuXHRcdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdG4wLnN0eWxlLm9yZGVyID0gYCR7TWF0aC5yb3VuZChvcmRlcil9YDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdFx0bjEuY2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlscy1saW5rXCI7XHJcblx0XHRuMS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuXHRcdG4wLmFwcGVuZENoaWxkKG4xKTtcclxuXHJcblx0XHR0aGlzLmxpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKG4wKTtcclxuXHRcdHJldHVybiBuMTtcclxuXHR9XHJcblxyXG5cdGFkZENvbnRlbnRDb250YWluZXIobmFtZSwgb3JkZXIpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRlbnRDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBuMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRuMC5jbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnRcIjtcclxuXHRcdGlmICh0eXBlb2YobmFtZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0bjAuc2V0QXR0cmlidXRlKFwiZGF0YS14LWNvbnRlbnQtbmFtZVwiLCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdG4wLnN0eWxlLm9yZGVyID0gYCR7TWF0aC5yb3VuZChvcmRlcil9YDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobjApO1xyXG5cdFx0cmV0dXJuIG4wO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29udGVudENvbnRhaW5lcihuYW1lKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZW50Q29udGFpbmVyICE9PSBudWxsID8gdGhpcy5jb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtY29udGVudC1uYW1lPVwiJHtuYW1lfVwiXWApIDogbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmaW5kUGFyZW50V2l0aENsYXNzKG5vZGUsIGNsYXNzTmFtZSkge1xyXG5cdGlmIChub2RlICE9PSBudWxsKSB7XHJcblx0XHR3aGlsZSAoKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpICE9PSBudWxsKSB7XHJcblx0XHRcdGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5vZGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJbmZvQ29udGFpbmVyKCkge1xyXG5cdHJldHVybiBmaW5kUGFyZW50V2l0aENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIiksIFwiZ21cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlEZXRhaWxzU3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IGdhbGxlcnlEZXRhaWxzU3R5bGVzaGVldElkO1xyXG5cdGNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5cdGlmICghc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHtcclxuXHRcdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL2dhbGxlcnktZGV0YWlscy5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURldGFpbHNIdG1sKCkge1xyXG5cdGNvbnN0IG4wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRuMC5pZCA9IGdhbGxlcnlEZXRhaWxzQ29udGFpbmVySWQ7XHJcblx0bjAuY2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlsc1wiO1xyXG5cclxuXHRjb25zdCBuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bjEuY2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlscy1pbm5lclwiO1xyXG5cclxuXHRsZXQgbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdG4yLmNsYXNzTmFtZSA9IGdhbGxlcnlEZXRhaWxzTGlua3NDb250YWluZXJDbGFzc05hbWU7XHJcblx0bjEuYXBwZW5kQ2hpbGQobjIpO1xyXG5cclxuXHRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bjIuY2xhc3NOYW1lID0gZ2FsbGVyeURldGFpbHNDb250ZW50Q29udGFpbmVyQ2xhc3NOYW1lO1xyXG5cdG4xLmFwcGVuZENoaWxkKG4yKTtcclxuXHJcblx0bjAuYXBwZW5kQ2hpbGQobjEpO1xyXG5cclxuXHRyZXR1cm4gbjA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlEZXRhaWxzKGFsbG93Q3JlYXRlKSB7XHJcblx0bGV0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnYWxsZXJ5RGV0YWlsc0NvbnRhaW5lcklkKTtcclxuXHRpZiAobiAhPT0gbnVsbCkge1xyXG5cdFx0aWYgKGdhbGxlcnlEZXRhaWxzSW5zdGFuY2UgPT09IG51bGwgfHwgZ2FsbGVyeURldGFpbHNJbnN0YW5jZS5jb250YWluZXJOb2RlICE9PSBuKSB7XHJcblx0XHRcdGdhbGxlcnlEZXRhaWxzSW5zdGFuY2UgPSBuZXcgR2FsbGVyeURldGFpbHMobik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZ2FsbGVyeURldGFpbHNJbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdGlmICghYWxsb3dDcmVhdGUpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZ2FsbGVyeUluZm9Db250YWluZXIgPSBnZXRHYWxsZXJ5SW5mb0NvbnRhaW5lcigpO1xyXG5cdGlmIChnYWxsZXJ5SW5mb0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjcmVhdGVHYWxsZXJ5RGV0YWlsc1N0eWxlc2hlZXQoKTtcclxuXHRuID0gY3JlYXRlR2FsbGVyeURldGFpbHNIdG1sKCk7XHJcblxyXG5cdGdhbGxlcnlJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG4pO1xyXG5cclxuXHRnYWxsZXJ5RGV0YWlsc0luc3RhbmNlID0gbmV3IEdhbGxlcnlEZXRhaWxzKG4pO1xyXG5cdHJldHVybiBnYWxsZXJ5RGV0YWlsc0luc3RhbmNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YWl0Rm9yR2FsbGVyeURldGFpbHMoKSB7XHJcblx0Y29uc3QgZ2QgPSBnZXRHYWxsZXJ5RGV0YWlscyh0cnVlKTtcclxuXHRpZiAoZ2QgIT09IG51bGwpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnZCk7IH1cclxuXHJcblx0aWYgKHdhaXRGb3JHYWxsZXJ5RGV0YWlsc1Byb21pc2UgPT09IG51bGwpIHtcclxuXHRcdHdhaXRGb3JHYWxsZXJ5RGV0YWlsc1Byb21pc2UgPSBjcmVhdGVXYWl0Rm9yR2FsbGVyeURldGFpbHNQcm9taXNlKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gd2FpdEZvckdhbGxlcnlEZXRhaWxzUHJvbWlzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2FpdEZvckdhbGxlcnlEZXRhaWxzUHJvbWlzZSgpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBnZCA9IGdldEdhbGxlcnlEZXRhaWxzKHRydWUpO1xyXG5cdFx0XHRpZiAoZ2QgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0XHRtby5kaXNjb25uZWN0KCk7XHJcblx0XHRcdHdhaXRGb3JHYWxsZXJ5RGV0YWlsc1Byb21pc2UgPSBudWxsO1xyXG5cdFx0XHRyZXNvbHZlKGdkKTtcclxuXHRcdH0pO1xyXG5cdFx0bW8ub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XHJcblx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcclxuXHRcdFx0c3VidHJlZTogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQ6IGdldEdhbGxlcnlEZXRhaWxzLFxyXG5cdHdhaXRGb3I6IHdhaXRGb3JHYWxsZXJ5RGV0YWlsc1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIEdhbGxlcnlJZGVudGlmaWVyIHtcclxuXHRjb25zdHJ1Y3RvcihpZCwgdG9rZW4pIHtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMudG9rZW4gPSB0b2tlbjtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVGcm9tVXJsKHVybCkge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSAvXi4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pPyQvLmV4ZWModXJsKTtcclxuXHRcdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IHBhdGggPSBtYXRjaFsxXS5yZXBsYWNlKC9eXFwvK3xcXC8rJC9nLCBcIlwiKS5yZXBsYWNlKC9cXC97Mix9L2csIFwiL1wiKS5zcGxpdChcIi9cIik7XHJcblx0XHRpZiAocGF0aFswXSAhPT0gXCJnXCIgfHwgcGF0aC5sZW5ndGggPCAzKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgaWQgPSBwYXJzZUludChwYXRoWzFdLCAxMCk7XHJcblx0XHRyZXR1cm4gKE51bWJlci5pc05hTihpZCkgPyBudWxsIDogbmV3IEdhbGxlcnlJZGVudGlmaWVyKGlkLCBwYXRoWzJdKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0R2FsbGVyeUlkZW50aWZpZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENzc1VybCh1cmxTdHJpbmcpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gL3VybFxccypcXChcXHMqKFsnXCJdKT8vO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybFN0cmluZyk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHF1b3RlID0gbWF0Y2hbMV0gfHwgXCJcIjtcclxuXHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIC0gcXVvdGUubGVuZ3RoKTtcclxuXHJcblx0Y29uc3QgcGF0dGVybjIgPSBuZXcgUmVnRXhwKGAoJHtxdW90ZX0pXFxcXHMqXFxcXClcXFxccyokYCk7XHJcblx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybjIuZXhlYyh1cmxTdHJpbmcpO1xyXG5cdGlmIChtYXRjaDIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdXJsID0gdXJsU3RyaW5nLnN1YnN0cigwLCBtYXRjaDIuaW5kZXggKyBtYXRjaDJbMV0ubGVuZ3RoKTtcclxuXHJcblx0bGV0IHVybDIgPSB1cmw7XHJcblx0aWYgKCFxdW90ZSkge1xyXG5cdFx0dXJsMiA9IHVybC5yZXBsYWNlKC9cIi9nLCBcIlxcXFxcXFwiXCIpO1xyXG5cdFx0dXJsMiA9IGBcIiR7dXJsMn1cImA7XHJcblx0fSBlbHNlIGlmIChxdW90ZSA9PT0gXCInXCIpIHtcclxuXHRcdHVybDIgPSB1cmwuc3Vic3RyKDEsIHVybC5sZW5ndGggLSAyKTtcclxuXHRcdHVybDIgPSB1cmwyLnJlcGxhY2UoL1xcXFwnL2csIFwiJ1wiKTtcclxuXHRcdHVybDIgPSBgXCIke3VybDJ9XCJgO1xyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdHJldHVybiBKU09OLnBhcnNlKHVybDIpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdHJldHVybiB1cmw7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXAodGV4dCkge1xyXG5cdGNvbnN0IG1hdGNoID0gLyhbMC05XSspLShbMC05XSspLShbMC05XSspXFxzKyhbMC05XSspOihbMC05XSspLy5leGVjKHRleHQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRyZXR1cm4gRGF0ZS5VVEMoXHJcblx0XHRwYXJzZUludChtYXRjaFsxXSwgMTApLCAvLyB5ZWFyXHJcblx0XHRwYXJzZUludChtYXRjaFsyXSwgMTApIC0gMSwgLy8gbW9udGhcclxuXHRcdHBhcnNlSW50KG1hdGNoWzNdLCAxMCksIC8vIGRheVxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbNF0sIDEwKSwgLy8gaG91cnNcclxuXHRcdHBhcnNlSW50KG1hdGNoWzVdLCAxMCksIC8vIG1pbnV0ZXNcclxuXHRcdDAsIC8vIHNlY29uZHNcclxuXHRcdDApOyAvLyBtaWxsaXNlY29uZHNcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRpdGxlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2duXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IG5vZGUudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpdGxlT3JpZ2luYWwoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2pcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gbm9kZS50ZXh0Q29udGVudC50cmltKCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWFpblRodW1ibmFpbFVybChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZDE+ZGl2XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGxldCB1cmwgPSBnZXRDc3NVcmwobm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xyXG5cdGlmICh1cmwgIT09IG51bGwpIHsgcmV0dXJuIHVybDsgfVxyXG5cclxuXHRjb25zdCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRyZXR1cm4gKGltZyAhPT0gbnVsbCA/IGltZy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2RjPmRpdltvbmNsaWNrXVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1snXCJdLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/WydcIl0vO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwib25jbGlja1wiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0gOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXBsb2FkZXIoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2RuPmFcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyAobWF0Y2hbMV0uc3BsaXQoXCIvXCIpWzFdIHx8IFwiXCIpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhdGluZ0NvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3JhdGluZ19jb3VudFwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB2YWx1ZSA9IHBhcnNlSW50KG5vZGUudGV4dENvbnRlbnQudHJpbSgpLCAxMCk7XHJcblx0cmV0dXJuIChOdW1iZXIuaXNOYU4odmFsdWUpID8gbnVsbCA6IHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmF0aW5nQXZlcmFnZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfbGFiZWxcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9hdmVyYWdlOlxccyooWzAtOVxcLl0rKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xyXG5cdHJldHVybiAoTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhdm9yaXRlQ291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZmF2Y291bnRcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXHMqKFswLTldK3xvbmNlKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBtYXRjaDEgPSBtYXRjaFsxXTtcclxuXHRyZXR1cm4gKG1hdGNoMS50b0xvd2VyQ2FzZSgpID09PSBcIm9uY2VcIiA/IDEgOiBwYXJzZUludChtYXRjaDEsIDEwKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhdm9yaXRlQ2F0ZWdvcnkoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZmF2PmRpdi5pXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHRpdGxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSB8fCBcIlwiO1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvYmFja2dyb3VuZC1wb3NpdGlvblxccyo6XFxzKlxcZCsoPzpweCk/XFxzKygtP1xcZCspKD86cHgpLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpIHx8IFwiXCIpO1xyXG5cdGNvbnN0IGluZGV4ID0gKG1hdGNoICE9PSBudWxsKSA/XHJcblx0XHRNYXRoLmZsb29yKChNYXRoLmFicyhwYXJzZUludChtYXRjaFsxXSwgMTApKSAtIDIpIC8gMTkpIDpcclxuXHRcdC0xO1xyXG5cclxuXHRyZXR1cm4geyBpbmRleCwgdGl0bGUgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGh1bWJuYWlsU2l6ZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RvND4ubm9zZWxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA8IDIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRyZXR1cm4gKG5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucyhcInRoc1wiKSA/IFwibm9ybWFsXCIgOiBcImxhcmdlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaHVtYm5haWxSb3dzKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZG8yPi5ub3NlbFwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxzKihbMC05XSspLztcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInRoc1wiKSkge1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYWdzKGh0bWwpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gLyguKyk6LztcclxuXHRjb25zdCBncm91cHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGFnbGlzdCB0clwiKTtcclxuXHRjb25zdCB0YWdzID0ge307XHJcblxyXG5cdGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSB7XHJcblx0XHRjb25zdCB0ZHMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XHJcblx0XHRpZiAodGRzLmxlbmd0aCA9PT0gMCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHRkc1swXS50ZXh0Q29udGVudCk7XHJcblx0XHRjb25zdCBuYW1lc3BhY2UgPSAobWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXS50cmltKCkgOiBcIlwiKTtcclxuXHJcblx0XHRsZXQgbmFtZXNwYWNlVGFncztcclxuXHRcdGlmICh0YWdzLmhhc093blByb3BlcnR5KG5hbWVzcGFjZSkpIHtcclxuXHRcdFx0bmFtZXNwYWNlVGFncyA9IHRhZ3NbbmFtZXNwYWNlXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MgPSBbXTtcclxuXHRcdFx0dGFnc1tuYW1lc3BhY2VdID0gbmFtZXNwYWNlVGFncztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0YWdEaXZzID0gdGRzW3Rkcy5sZW5ndGggLSAxXS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xyXG5cdFx0Zm9yIChjb25zdCBkaXYgb2YgdGFnRGl2cykge1xyXG5cdFx0XHRjb25zdCBsaW5rID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xyXG5cdFx0XHRpZiAobGluayA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdFx0Y29uc3QgdGFnID0gbGluay50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MucHVzaCh0YWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRhZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERldGFpbHNOb2RlcyhodG1sKSB7XHJcblx0cmV0dXJuIGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZGQgdHJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGVVcGxvYWRlZChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gZ2V0VGltZXN0YW1wKG5vZGUudGV4dENvbnRlbnQpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVJbmZvKGRldGFpbHNOb2Rlcykge1xyXG5cdGxldCB2aXNpYmxlID0gdHJ1ZTtcclxuXHRsZXQgdmlzaWJsZVJlYXNvbiA9IG51bGw7XHJcblxyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoID4gMikge1xyXG5cdFx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1syXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0XHRpZiAobm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBwYXR0ZXJuID0gL25vXFxzK1xcKCguKz8pXFwpL2k7XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0XHR2aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0dmlzaWJsZVJlYXNvbiA9IG1hdGNoWzFdLnRyaW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdmlzaWJsZSwgdmlzaWJsZVJlYXNvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYW5ndWFnZUluZm8oZGV0YWlsc05vZGVzKSB7XHJcblx0bGV0IGxhbmd1YWdlID0gbnVsbDtcclxuXHRsZXQgdHJhbnNsYXRlZCA9IGZhbHNlO1xyXG5cclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA+IDMpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbM10ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgdGV4dE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcblx0XHRcdGlmICh0ZXh0Tm9kZSAhPT0gbnVsbCAmJiB0ZXh0Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcclxuXHRcdFx0XHRsYW5ndWFnZSA9IHRleHROb2RlLm5vZGVWYWx1ZS50cmltKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHRyTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5oYWxwXCIpO1xyXG5cdFx0XHR0cmFuc2xhdGVkID0gKHRyTm9kZSAhPT0gbnVsbCAmJiB0ck5vZGUudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IFwidHJcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyBsYW5ndWFnZSwgdHJhbnNsYXRlZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gNCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzRdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gLyhbMC05XFwuXSspXFxzKihcXHcrKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyB1dGlscy5nZXRCeXRlc1NpemVGcm9tTGFiZWwobWF0Y2hbMV0sIG1hdGNoWzJdKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaWxlQ291bnQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gNSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzVdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gLyhbMC05LF0rKVxccypwYWdlcy9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyBwYXJzZUludChtYXRjaFsxXS5yZXBsYWNlKC8sL2csIFwiXCIpLCAxMCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50KGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDEpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1sxXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDI+YVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChpbmZvICE9PSBudWxsID8gaW5mby5pZGVudGlmaWVyIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5ld2VyVmVyc2lvbnMoaHRtbCkge1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnbmQ+YVwiKTtcclxuXHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0XHRpZiAoaW5mbyA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IGdhbGxlcnlJbmZvID0ge1xyXG5cdFx0XHRpZGVudGlmaWVyOiBpbmZvLmlkZW50aWZpZXIsXHJcblx0XHRcdG5hbWU6IG5vZGUudGV4dENvbnRlbnQudHJpbSgpLFxyXG5cdFx0XHRkYXRlVXBsb2FkZWQ6IG51bGxcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG5vZGUubmV4dFNpYmxpbmcgIT09IG51bGwpIHtcclxuXHRcdFx0Z2FsbGVyeUluZm8uZGF0ZVVwbG9hZGVkID0gZ2V0VGltZXN0YW1wKG5vZGUubmV4dFNpYmxpbmcudGV4dENvbnRlbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlc3VsdHMucHVzaChnYWxsZXJ5SW5mbyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9ycmVudENvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZDUgLmcyPmFcIik7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXGJ0b3JyZW50XFxzK2Rvd25sb2FkXFxzKlxcKFxccyooXFxkKylcXHMqXFwpL2k7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcmNoaXZlcktleShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2Q1IC5nMj5hXCIpO1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxiYXJjaGl2ZVxccytkb3dubG9hZFxcYi9pO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcGF0dGVybjIgPSAvJm9yPShbXidcIl0qKVsnXCJdLztcclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybjIuZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcIm9uY2xpY2tcIikgfHwgXCJcIik7XHJcblx0XHRcdHJldHVybiAobWF0Y2gyICE9PSBudWxsID8gbWF0Y2gyWzFdIDogbnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21IdG1sKGluZm8sIGh0bWwpIHtcclxuXHQvLyBHZW5lcmFsXHJcblx0aW5mby50aXRsZSA9IGdldFRpdGxlKGh0bWwpO1xyXG5cdGluZm8udGl0bGVPcmlnaW5hbCA9IGdldFRpdGxlT3JpZ2luYWwoaHRtbCk7XHJcblx0aW5mby5tYWluVGh1bWJuYWlsVXJsID0gZ2V0TWFpblRodW1ibmFpbFVybChodG1sKTtcclxuXHRpbmZvLmNhdGVnb3J5ID0gZ2V0Q2F0ZWdvcnkoaHRtbCk7XHJcblx0aW5mby51cGxvYWRlciA9IGdldFVwbG9hZGVyKGh0bWwpO1xyXG5cclxuXHRpbmZvLnJhdGluZ0NvdW50ID0gZ2V0UmF0aW5nQ291bnQoaHRtbCk7XHJcblx0aW5mby5yYXRpbmdBdmVyYWdlID0gZ2V0UmF0aW5nQXZlcmFnZShodG1sKTtcclxuXHJcblx0aW5mby5mYXZvcml0ZUNvdW50ID0gZ2V0RmF2b3JpdGVDb3VudChodG1sKTtcclxuXHRpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgPSBnZXRGYXZvcml0ZUNhdGVnb3J5KGh0bWwpO1xyXG5cclxuXHRpbmZvLnRodW1ibmFpbFNpemUgPSBnZXRUaHVtYm5haWxTaXplKGh0bWwpO1xyXG5cdGluZm8udGh1bWJuYWlsUm93cyA9IGdldFRodW1ibmFpbFJvd3MoaHRtbCk7XHJcblxyXG5cdGluZm8ubmV3ZXJWZXJzaW9ucyA9IGdldE5ld2VyVmVyc2lvbnMoaHRtbCk7XHJcblxyXG5cdGluZm8udG9ycmVudENvdW50ID0gZ2V0VG9ycmVudENvdW50KGh0bWwpO1xyXG5cdGluZm8uYXJjaGl2ZXJLZXkgPSBnZXRBcmNoaXZlcktleShodG1sKTtcclxuXHJcblx0Ly8gRGV0YWlsc1xyXG5cdGNvbnN0IGRldGFpbHNOb2RlcyA9IGdldERldGFpbHNOb2RlcyhodG1sKTtcclxuXHJcblx0aW5mby5kYXRlVXBsb2FkZWQgPSBnZXREYXRlVXBsb2FkZWQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0aW5mby5wYXJlbnQgPSBnZXRQYXJlbnQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0Y29uc3QgdmlzaWJsZUluZm8gPSBnZXRWaXNpYmxlSW5mbyhkZXRhaWxzTm9kZXMpO1xyXG5cdGluZm8udmlzaWJsZSA9IHZpc2libGVJbmZvLnZpc2libGU7XHJcblx0aW5mby52aXNpYmxlUmVhc29uID0gdmlzaWJsZUluZm8udmlzaWJsZVJlYXNvbjtcclxuXHJcblx0Y29uc3QgbGFuZ3VhZ2VJbmZvID0gZ2V0TGFuZ3VhZ2VJbmZvKGRldGFpbHNOb2Rlcyk7XHJcblx0aW5mby5sYW5ndWFnZSA9IGxhbmd1YWdlSW5mby5sYW5ndWFnZTtcclxuXHRpbmZvLnRyYW5zbGF0ZWQgPSBsYW5ndWFnZUluZm8udHJhbnNsYXRlZDtcclxuXHJcblx0aW5mby5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBnZXRBcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0aW5mby5maWxlQ291bnQgPSBnZXRGaWxlQ291bnQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0Ly8gVGFnc1xyXG5cdGluZm8udGFncyA9IGdldFRhZ3MoaHRtbCk7XHJcblx0aW5mby50YWdzSGF2ZU5hbWVzcGFjZSA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21IdG1sKGh0bWwsIHVybCkge1xyXG5cdGNvbnN0IGxpbmsgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIucHR0IHRkLnB0ZHM+YVtocmVmXSwucHR0IHRkLnB0ZGQ+YVtocmVmXVwiKTtcclxuXHRpZiAobGluayA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpZFBhZ2UgPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRpZiAoaWRQYWdlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSBuZXcgdHlwZXMuR2FsbGVyeUluZm8oKTtcclxuXHRpbmZvLmlkZW50aWZpZXIgPSBpZFBhZ2UuaWRlbnRpZmllcjtcclxuXHRpbmZvLmN1cnJlbnRQYWdlID0gaWRQYWdlLnBhZ2U7XHJcblx0aW5mby5zb3VyY2UgPSBcImh0bWxcIjtcclxuXHRwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUh0bWwoaW5mbywgaHRtbCk7XHJcblx0aW5mby5zb3VyY2VTaXRlID0gdXRpbHMuZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKTtcclxuXHRpbmZvLmRhdGVHZW5lcmF0ZWQgPSBEYXRlLm5vdygpO1xyXG5cdHJldHVybiBpbmZvO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXRGcm9tSHRtbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5SWRlbnRpZmllciA9IHJlcXVpcmUoXCIuLi9nYWxsZXJ5LWlkZW50aWZpZXJcIikuR2FsbGVyeUlkZW50aWZpZXI7XHJcblxyXG5cclxuY2xhc3MgR2FsbGVyeUluZm8ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pZGVudGlmaWVyID0gbnVsbDtcclxuXHRcdHRoaXMudGl0bGUgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZU9yaWdpbmFsID0gbnVsbDtcclxuXHRcdHRoaXMuZGF0ZVVwbG9hZGVkID0gbnVsbDtcclxuXHRcdHRoaXMuY2F0ZWdvcnkgPSBudWxsO1xyXG5cdFx0dGhpcy51cGxvYWRlciA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5yYXRpbmdDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkgPSBudWxsO1xyXG5cdFx0dGhpcy5mYXZvcml0ZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMubWFpblRodW1ibmFpbFVybCA9IG51bGw7XHJcblx0XHR0aGlzLnRodW1ibmFpbFNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy50aHVtYm5haWxSb3dzID0gbnVsbDtcclxuXHRcdHRoaXMuZmlsZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblx0XHR0aGlzLnZpc2libGVSZWFzb24gPSBudWxsO1xyXG5cdFx0dGhpcy5sYW5ndWFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcmNoaXZlcktleSA9IG51bGw7XHJcblx0XHR0aGlzLnRvcnJlbnRDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3MgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzSGF2ZU5hbWVzcGFjZSA9IG51bGw7XHJcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHRcdHRoaXMubmV3ZXJWZXJzaW9ucyA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZSA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZVNpdGUgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlR2VuZXJhdGVkID0gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRHYWxsZXJ5SWRlbnRpZmllcixcclxuXHRHYWxsZXJ5SW5mb1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcblxyXG5jb25zdCBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMgPSBbIFwiYlwiLCBcImtiXCIsIFwibWJcIiwgXCJnYlwiIF07XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVBhZ2VGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IG1hdGNoID0gL1xcPyg/Oih8W1xcd1xcV10qPyYpcD0oW1xcK1xcLV0/XFxkKykpPy8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHRpZiAoIU51bWJlci5pc05hTihwYWdlKSkgeyByZXR1cm4gcGFnZTsgfVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBpZGVudGlmaWVyID0gdHlwZXMuR2FsbGVyeUlkZW50aWZpZXIuY3JlYXRlRnJvbVVybCh1cmwpO1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhZ2UgPSBnZXRHYWxsZXJ5UGFnZUZyb21VcmwodXJsKTtcclxuXHRyZXR1cm4geyBpZGVudGlmaWVyLCBwYWdlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJ5dGVzU2l6ZUZyb21MYWJlbChudW1iZXIsIGxhYmVsKSB7XHJcblx0bGV0IGkgPSBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMuaW5kZXhPZihsYWJlbC50b0xvd2VyQ2FzZSgpKTtcclxuXHRpZiAoaSA8IDApIHsgaSA9IDA7IH1cclxuXHRyZXR1cm4gTWF0aC5mbG9vcihwYXJzZUZsb2F0KG51bWJlcikgKiBNYXRoLnBvdygxMDI0LCBpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNvdXJjZVNpdGVGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXig/Oig/OlthLXpdW2EtejAtOVxcK1xcLVxcLl0qOlxcLyp8XFwvezIsfSkoW15cXC9dKikpPyhcXC8/W1xcd1xcV10qKSQvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh1cmwpO1xyXG5cclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0pIHtcclxuXHRcdGNvbnN0IGhvc3QgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKGhvc3QuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDApIHsgcmV0dXJuIFwiZXhoZW50YWlcIjsgfVxyXG5cdFx0aWYgKGhvc3QuaW5kZXhPZihcImUtaGVudGFpXCIpID49IDApIHsgcmV0dXJuIFwiZS1oZW50YWlcIjsgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsLFxyXG5cdGdldEJ5dGVzU2l6ZUZyb21MYWJlbCxcclxuXHRnZXRTb3VyY2VTaXRlRnJvbVVybFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKGxhYmVsLCB1cmwsIG9yZGVyKSB7XHJcblx0Y29uc3QgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJcIik7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0YS5ocmVmID0gdXJsO1xyXG5cdGEudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuXHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0ZGl2LnN0eWxlLm9yZGVyID0gYCR7b3JkZXJ9YDtcclxuXHR9XHJcblx0ZGl2LmFwcGVuZENoaWxkKGEpO1xyXG5cdG4uYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0cmV0dXJuIGRpdjtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBvdmVycmlkZUF0dHJpYnV0ZU5hbWUgPSBcImRhdGEteC1vdmVycmlkZS1wYWdlLXR5cGVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRPdmVycmlkZSh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3ZlcnJpZGUoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0cmV0dXJuIHZhbHVlID8gdmFsdWUgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoZG9jLCBsb2NhdGlvbikge1xyXG5cdGNvbnN0IG92ZXJyaWRlVHlwZSA9IGdldE92ZXJyaWRlKCk7XHJcblx0aWYgKG92ZXJyaWRlVHlwZSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIG92ZXJyaWRlVHlwZTtcclxuXHR9XHJcblxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hib3hcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNlYXJjaFwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPWZhdmNhdF1cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImZhdm9yaXRlc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjaTE+aDFcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImltYWdlXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIi5nbSBoMSNnblwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZ2FsbGVyeVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9vdXRlclwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2V0dGluZ3NcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3RvcnJlbnRpbmZvXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJ0b3JyZW50SW5mb1wiO1xyXG5cdH1cclxuXHJcblx0bGV0IG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImJvZHk+LmQ+cFwiKTtcclxuXHRpZiAoXHJcblx0XHQobiAhPT0gbnVsbCAmJiAvZ2FsbGVyeVxccytoYXNcXHMrYmVlblxccytyZW1vdmVkL2kudGVzdChuLnRleHRDb250ZW50KSkgfHxcclxuXHRcdGRvYy5xdWVyeVNlbGVjdG9yKFwiLmV6ZV9kZ2FsbGVyeV90YWJsZVwiKSAhPT0gbnVsbCkgeyAvLyBlemUgcmVzdXJyZWN0aW9uXHJcblx0XHRyZXR1cm4gXCJkZWxldGVkR2FsbGVyeVwiO1xyXG5cdH1cclxuXHJcblx0biA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0aWYgKG4gIT09IG51bGwgJiYgbG9jYXRpb24gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IHAgPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdGlmIChcclxuXHRcdFx0bi5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT09IGxvY2F0aW9uLmhyZWYgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgMykgIT09IFwiL3QvXCIgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgNSkgIT09IFwiL2ltZy9cIikge1xyXG5cdFx0XHRyZXR1cm4gXCJwYW5kYVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVW5rbm93blxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0LFxyXG5cdGdldE92ZXJyaWRlLFxyXG5cdHNldE92ZXJyaWRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcblxyXG5cclxuY2xhc3MgUG9wdXBNZW51IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubWVudU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0dGhpcy5tZW51Tm9kZS5jbGFzc05hbWUgPSBcIngtcG9wdXAtbWVudVwiO1xyXG5cclxuXHRcdHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50ID0gbnVsbDtcclxuXHRcdHRoaXMuX29uRG9jdW1lbnRDbGljayA9IChlKSA9PiBvbkRvY3VtZW50Q2xpY2tUb0Nsb3NlKGUsIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0c2hvdyhub2RlLCBmaXhlZCwgYW5jaG9yKSB7XHJcblx0XHQvKiBnbG9iYWxzIERPTVJlY3QgKi9cclxuXHRcdGluc2VydFN0eWxlc2hlZXQoKTtcclxuXHJcblx0XHRjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5O1xyXG5cdFx0aWYgKHRoaXMubWVudU5vZGUucGFyZW50Tm9kZSAhPT0gcGFyZW50KSB7XHJcblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm1lbnVOb2RlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubWVudU5vZGUuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG5cdFx0dGhpcy5tZW51Tm9kZS5zdHlsZS50b3AgPSBcIjBcIjtcclxuXHRcdHRoaXMubWVudU5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcIngtcG9wdXAtbWVudS1maXhlZFwiLCBmaXhlZCk7XHJcblxyXG5cdFx0Y29uc3QgaHRtbFJlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRjb25zdCBub2RlUmVjdCA9IChub2RlIGluc3RhbmNlb2YgRE9NUmVjdCkgPyBub2RlIDogbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGNvbnN0IG1lbnVSZWN0ID0gdGhpcy5tZW51Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgMDtcclxuXHRcdGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCAwO1xyXG5cclxuXHRcdGxldCB4QW5jaG9yID0gbnVsbDtcclxuXHRcdGxldCB5QW5jaG9yID0gbnVsbDtcclxuXHRcdGlmIChpc09iamVjdChhbmNob3IpKSB7XHJcblx0XHRcdGxldCB2ID0gYW5jaG9yLng7XHJcblx0XHRcdGlmICh0eXBlb2YodikgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2KSkgeyB4QW5jaG9yID0gKHYgPiAwLjUgPyAxLjAgOiAwLjApOyB9XHJcblx0XHRcdHYgPSBhbmNob3IueTtcclxuXHRcdFx0aWYgKHR5cGVvZih2KSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHYpKSB7IHlBbmNob3IgPSAodiA+IDAuNSA/IDEuMCA6IDAuMCk7IH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoeEFuY2hvciA9PT0gbnVsbCkge1xyXG5cdFx0XHR4QW5jaG9yID0gKG5vZGVSZWN0LnggKyBtZW51UmVjdC53aWR0aCA+PSB3aW5kb3dXaWR0aCkgPyAxLjAgOiAwLjA7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHlBbmNob3IgPT09IG51bGwpIHtcclxuXHRcdFx0eUFuY2hvciA9IChub2RlUmVjdC55ICsgbm9kZVJlY3QuaGVpZ2h0ICsgbWVudVJlY3QuaGVpZ2h0ID49IHdpbmRvd0hlaWdodCkgPyAwLjAgOiAxLjA7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHggPSBub2RlUmVjdC54ICsgeEFuY2hvciAqIChub2RlUmVjdC53aWR0aCAtIG1lbnVSZWN0LndpZHRoKTtcclxuXHRcdGxldCB5ID0gbm9kZVJlY3QueSArIHlBbmNob3IgKiBub2RlUmVjdC5oZWlnaHQgLSBtZW51UmVjdC5oZWlnaHQgKiAoMS4wIC0geUFuY2hvcik7XHJcblxyXG5cdFx0eCA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4od2luZG93V2lkdGggLSBtZW51UmVjdC53aWR0aCwgeCkpO1xyXG5cdFx0eSA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4od2luZG93SGVpZ2h0IC0gbWVudVJlY3QuaGVpZ2h0LCB5KSk7XHJcblxyXG5cdFx0aWYgKCFmaXhlZCkge1xyXG5cdFx0XHR4IC09IGh0bWxSZWN0Lng7XHJcblx0XHRcdHkgLT0gaHRtbFJlY3QueTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm1lbnVOb2RlLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuXHRcdHRoaXMubWVudU5vZGUuc3R5bGUudG9wID0gYCR7eX1weGA7XHJcblxyXG5cdFx0aWYgKHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50ID09PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdFx0XHR0aGlzLl9vbkRvY3VtZW50Q2xpY2tIb29rRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fb25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoaWRlKCkge1xyXG5cdFx0aWYgKHRoaXMubWVudU5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLm1lbnVOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5tZW51Tm9kZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2ssIGZhbHNlKTtcclxuXHRcdFx0dGhpcy5fb25Eb2N1bWVudENsaWNrSG9va0VsZW1lbnQgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWRkT3B0aW9uKG9wdGlvbnMpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRcdG5vZGUuY2xhc3NOYW1lID0gXCJ4LXBvcHVwLW1lbnUtb3B0aW9uXCI7XHJcblx0XHRub2RlLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcIm5vcmVmZXJyZXJcIik7XHJcblxyXG5cdFx0bGV0IGNsb3NlT25DbGljayA9IHRydWU7XHJcblx0XHRpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLnRpdGxlKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdG5vZGUudGV4dENvbnRlbnQgPSBvcHRpb25zLnRpdGxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy51cmwpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0bm9kZS5ocmVmID0gb3B0aW9ucy51cmw7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLnRhcmdldCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRub2RlLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5vcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0XHRub2RlLnN0eWxlLm9yZGVyID0gYCR7b3B0aW9ucy5vcmRlcn1gO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5jYWxsYmFjaykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wdGlvbnMuY2FsbGJhY2ssIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjbG9zZU9uQ2xpY2sgPSAodHlwZW9mKG9wdGlvbnMuY2xvc2UpICE9PSBcImJvb2xlYW5cIiB8fCBvcHRpb25zLmNsb3NlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2xvc2VPbkNsaWNrKSB7XHJcblx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBvbk1lbnVJdGVtQ2xpY2tUb0Nsb3NlKGUsIHRoaXMpLCBmYWxzZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5tZW51Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcclxuXHRcdHJldHVybiBub2RlO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlT3B0aW9uKG5vZGUpIHtcclxuXHRcdGlmIChub2RlLnBhcmVudE5vZGUgPT09IHRoaXMubWVudU5vZGUpIHtcclxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uRG9jdW1lbnRDbGlja1RvQ2xvc2UoZSwgbWVudSkge1xyXG5cdGlmICghbWVudS5tZW51Tm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuXHRcdG1lbnUuaGlkZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25NZW51SXRlbUNsaWNrVG9DbG9zZShlLCBtZW51KSB7XHJcblx0bWVudS5oaWRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHYpIHtcclxuXHRyZXR1cm4gdiAhPT0gbnVsbCAmJiB0eXBlb2YodikgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlc2hlZXQoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtcG9wdXAtbWVudVwiO1xyXG5cdGlmIChzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUvcG9wdXAtbWVudS5jc3NcIik7XHJcblx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFBvcHVwTWVudVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgdXJsRnJhZ21lbnQgPSByZXF1aXJlKFwiLi4vdXJsLWZyYWdtZW50XCIpO1xyXG5cclxuXHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVyQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyXCI7XHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyLWhpZGRlblwiO1xyXG5jb25zdCBkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcyA9IFwieC1zZXR0aW5ncy1oaWRkZW5cIjtcclxuXHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lck91dGVyID0gbnVsbDtcclxubGV0IHNldHRpbmdzQ29udGFpbmVyID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LW5hdi1zZXR0aW5ncy1saW5rXCI7XHJcblxyXG5cdGxldCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdGlmIChuICE9PSBudWxsKSB7IHJldHVybiBuOyB9XHJcblxyXG5cdGNvbnN0IG5hdkJhciA9IHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyXCIpO1xyXG5cdG4gPSBuYXZCYXIuYWRkTGluayhcInhcIiwgYC91Y29uZmlnLnBocCR7dXJsRnJhZ21lbnQuY3JlYXRlKFwic2V0dGluZ3NcIil9YCwgMSk7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0bi5pZCA9IGlkO1xyXG5cdHJldHVybiBuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dGVyLnN0dWZmYm94XCIpO1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lck91dGVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRzZXR0aW5nc0NvbnRhaW5lciA9IHNldHRpbmdzQ29udGFpbmVyT3V0ZXIucXVlcnlTZWxlY3RvcihgLiR7c2V0dGluZ3NDb250YWluZXJDbGFzc31gKTtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTmFtZSA9IGAke3NldHRpbmdzQ29udGFpbmVyQ2xhc3N9ICR7c2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzc31gO1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXJPdXRlci5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpZCA9IFwieC1zZXR0aW5nc1wiO1xyXG5cdGlmICghc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHtcclxuXHRcdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL3NldHRpbmdzLmNzc1wiKTtcclxuXHRcdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcblx0fVxyXG5cclxuXHR1cmxGcmFnbWVudC5hZGRSb3V0ZSgvXlxcL3NldHRpbmdzKFxcL1tcXHdcXFddKik/JC8sIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZChtYXRjaCkge1xyXG5cdHNldFNldHRpbmdzVmlzaWJsZShtYXRjaCAhPT0gbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNldHRpbmdzVmlzaWJsZSh2aXNpYmxlKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPT09IG51bGwgfHwgc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcykgIT09IHZpc2libGUpIHtcclxuXHRcdC8vIE5vIGNoYW5nZVxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0c2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzLCAhdmlzaWJsZSk7XHJcblxyXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygc2V0dGluZ3NDb250YWluZXJPdXRlci5jaGlsZHJlbikge1xyXG5cdFx0aWYgKGNoaWxkID09PSBzZXR0aW5nc0NvbnRhaW5lcikgeyBjb250aW51ZTsgfVxyXG5cdFx0Y2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcywgdmlzaWJsZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTZWN0aW9uKGhlYWRlciwgaWQsIG9yZGVyKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGZ1bGxJZCA9IGB4LXNldHRpbmdzLXNlY3Rpb24tJHtpZH1gO1xyXG5cclxuXHRsZXQgc2VjdGlvbiA9IHNldHRpbmdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2Z1bGxJZH1gKTtcclxuXHRpZiAoc2VjdGlvbiA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uLmlkID0gZnVsbElkO1xyXG5cdFx0c2VjdGlvbi5jbGFzc05hbWUgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJcIjtcclxuXHRcdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHNlY3Rpb24uc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cdH1cclxuXHJcblx0bGV0IGNscyA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWhlYWRlclwiO1xyXG5cdGxldCBzZWN0aW9uSGVhZGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKGAuJHtjbHN9YCk7XHJcblx0aWYgKHNlY3Rpb25IZWFkZXIgPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblx0XHRzZWN0aW9uSGVhZGVyLmNsYXNzTmFtZSA9IGNscztcclxuXHRcdHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkZXI7XHJcblx0XHRjb25zdCByZWxhdGl2ZSA9IHNlY3Rpb24uZmlyc3RDaGlsZDtcclxuXHRcdGlmIChyZWxhdGl2ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRzZWN0aW9uLmluc2VydEJlZm9yZShyZWxhdGl2ZSwgc2VjdGlvbkhlYWRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xzID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24tY29udGVudFwiO1xyXG5cdGxldCBzZWN0aW9uQ29udGVudCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihgLiR7Y2xzfWApO1xyXG5cdGlmIChzZWN0aW9uQ29udGVudCA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2VjdGlvbkNvbnRlbnQuY2xhc3NOYW1lID0gY2xzO1xyXG5cdFx0c2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2VjdGlvbkNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rLFxyXG5cdGluaXRpYWxpemUsXHJcblx0YWRkU2VjdGlvblxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGlzRGFyaygpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluZGV4T2YoXCJleGhlbnRhaVwiKSA+PSAwIHx8XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwieC1mb3JjZS1kYXJrXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RG9jdW1lbnREYXJrRmxhZygpIHtcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIngtaXMtZGFya1wiLCBpc0RhcmsoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFycm93SWNvblVybCgpIHtcclxuXHRyZXR1cm4gKGlzRGFyaygpID8gXCJodHRwczovL2V4aGVudGFpLm9yZy9pbWcvbXIuZ2lmXCIgOiBcImh0dHBzOi8vZWhndC5vcmcvZy9tci5naWZcIik7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpc0RhcmssXHJcblx0c2V0RG9jdW1lbnREYXJrRmxhZyxcclxuXHRnZXRBcnJvd0ljb25VcmxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi54LWdhbGxlcnktZGV0YWlsc3tmb250LXNpemU6MTBwdDtib3JkZXI6bm9uZTtwYWRkaW5nOi41ZW0gMCAwIDA7bWFyZ2luOi0zcHggLTVweH0ueC1nYWxsZXJ5LWRldGFpbHMtY29udGVudDpiZWZvcmUsLngtZ2FsbGVyeS1kZXRhaWxzOmJlZm9yZXtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgLjVlbTtib3JkZXItdG9wOjFweCBzb2xpZCAjMDAwfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1nYWxsZXJ5LWRldGFpbHMtY29udGVudDpiZWZvcmUsOnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWdhbGxlcnktZGV0YWlsczpiZWZvcmV7Ym9yZGVyLXRvcC1jb2xvcjojNWMwZDEyfS54LWdhbGxlcnktZGV0YWlscy1pbm5lcntib3JkZXI6bm9uZTttYXJnaW46MH0ueC1nYWxsZXJ5LWRldGFpbHMtbGlua3N7ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpyb3cgd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0O3BhZGRpbmc6LjVlbTttYXJnaW4tbGVmdDotMWVtfS54LWdhbGxlcnktZGV0YWlscy1saW5rLWNvbnRhaW5lcntmbGV4OjAgMSBhdXRvO21hcmdpbi1sZWZ0OjFlbX0ueC1nYWxsZXJ5LWRldGFpbHMtbGlua3tkaXNwbGF5OmlubGluZS1ibG9jaztjdXJzb3I6cG9pbnRlcn0ueC1nYWxsZXJ5LWRldGFpbHMtY29udGVudC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7ZmxleC1mbG93OmNvbHVtbiB3cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0fS54LWdhbGxlcnktZGV0YWlscy1jb250ZW50e2ZsZXg6MCAxIGF1dG87d2lkdGg6MTAwJX1cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtcG9wdXAtbWVudXtwb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6MTBwdDtib3JkZXI6MXB4IHNvbGlkICMwMDA7YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ei1pbmRleDoyMTA7dGV4dC1hbGlnbjpsZWZ0O2JveC1zaGFkb3c6LjI1ZW0gLjI1ZW0gMCAwIHJnYmEoMCwwLDAsLjUpfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1wb3B1cC1tZW51e2JvcmRlci1jb2xvcjojNWMwZDEyO2JhY2tncm91bmQtY29sb3I6I2UzZTBkMTtib3gtc2hhZG93Oi4yNWVtIC4yNWVtIDAgMCByZ2JhKDkyLDEzLDE4LC41KX0ueC1wb3B1cC1tZW51LngtcG9wdXAtbWVudS1maXhlZHtwb3NpdGlvbjpmaXhlZH0ueC1wb3B1cC1tZW51LW9wdGlvbntwYWRkaW5nOi4yNWVtIDFlbTtsaW5lLWhlaWdodDoxLjM3NWVtO3RleHQtZGVjb3JhdGlvbjpub25lfS54LXBvcHVwLW1lbnUtb3B0aW9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzM0MzUzYn06cm9vdDpub3QoLngtaXMtZGFyaykgLngtcG9wdXAtbWVudS1vcHRpb246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWRlYmRmfVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1zZXR0aW5ncy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tdG9wOi0xZW19Lngtc2V0dGluZ3MtY29udGFpbmVyLngtc2V0dGluZ3MtY29udGFpbmVyLWhpZGRlbntkaXNwbGF5Om5vbmV9Lngtc2V0dGluZ3MtaGlkZGVue2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9Lngtc2V0dGluZ3Mtb3B0aW9uIHNlbGVjdHttYXJnaW4tcmlnaHQ6LjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1jb250ZW50e21hcmdpbjo4cHggYXV0byAxMHB4IDEwcHg7Y2xlYXI6Ym90aH0ueC1zZXR0aW5ncy1zZWN0aW9uLWhlYWRlcntmb250LXNpemU6MS4yNWVtO2xpbmUtaGVpZ2h0OjEuNWVtO21hcmdpbjouMjVlbSAwfS54LXNldHRpbmdzLXNlY3Rpb257ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpyb3cgd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0O2ZsZXgtd3JhcDpub3dyYXA7d2lkdGg6MTAwJTtwYWRkaW5nOi41ZW0gMH0ueC1zZXR0aW5ncy1zZWN0aW9uKy54LXNldHRpbmdzLXNlY3Rpb257Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuMjUpfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1zZXR0aW5ncy1zZWN0aW9uKy54LXNldHRpbmdzLXNlY3Rpb257Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDkyLDEzLDE4LC4yNSl9Lngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0e2ZsZXg6MSAxIGF1dG87cGFkZGluZy1yaWdodDouNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tcmlnaHR7ZmxleDowIDAgYXV0bzttaW4td2lkdGg6MzAlO3RleHQtYWxpZ246cmlnaHR9Lngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZXtmb250LXdlaWdodDo3MDA7bGluZS1oZWlnaHQ6MS41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbntsaW5lLWhlaWdodDoxLjM1ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbisueC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9ue21hcmdpbi10b3A6LjI1ZW19aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXSxpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjA7cGFkZGluZzouMjVlbSAuNWVtO2xpbmUtaGVpZ2h0OjEuMzc1ZW07YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO2JveC1zaXppbmc6Ym9yZGVyLWJveH06cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXSw6cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde3dpZHRoOjIwZW19aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXXt3aWR0aDo1ZW07LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZH1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjB9dGV4dGFyZWEueC1zZXR0aW5ncy1zZWN0aW9uLXRleHRhcmVhe2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MDttYXJnaW46MDtwYWRkaW5nOi4yNWVtIC41ZW07bGluZS1oZWlnaHQ6MS4zNzVlbTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7cmVzaXplOnZlcnRpY2FsO2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7bWluLWhlaWdodDoxLjg3NWVtO2hlaWdodDo0LjYyNWVtO2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LWZhbWlseTpcXFwiQ291cmllciBOZXdcXFwiLENvdXJpZXIsbW9ub3NwYWNlfTpyb290Om5vdCgueC1pcy1kYXJrKSB0ZXh0YXJlYS54LXNldHRpbmdzLXNlY3Rpb24tdGV4dGFyZWF7YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfS54LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lciAubGN7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0Oi02cHh9Lngtc2V0dGluZ3MtY29udGFpbmVyIGNvZGV7Zm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JyxDb3VyaWVyLG1vbm9zcGFjZTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7Zm9udC13ZWlnaHQ6NzAwfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1zZXR0aW5ncy1jb250YWluZXIgY29kZXtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDF9Lngtc2V0dGluZ3MtbGlnaHQtdGV4dHtmb250LXdlaWdodDo0MDA7b3BhY2l0eTouNzV9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246bGVmdH0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZXtkaXNwbGF5OnRhYmxlfS54LXNldHRpbmdzLWlucHV0LXJvd3tkaXNwbGF5OnRhYmxlLXJvd30ueC1zZXR0aW5ncy1pbnB1dC1yb3cueC1zZXR0aW5ncy1pbnB1dC1oZWFkZXItcm93e2ZvbnQtc2l6ZTouOGVtO2xpbmUtaGVpZ2h0OjFlbTtvcGFjaXR5Oi43NX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbH0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsKy54LXNldHRpbmdzLWlucHV0LWNlbGx7cGFkZGluZy1sZWZ0Oi4yNWVtfS54LXNldHRpbmdzLWlucHV0LXJvdzpub3QoLngtc2V0dGluZ3MtaW5wdXQtaGVhZGVyLXJvdykrLngtc2V0dGluZ3MtaW5wdXQtcm93Pi54LXNldHRpbmdzLWlucHV0LWNlbGx7cGFkZGluZy10b3A6LjI1ZW19Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtbWlkZGxle3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsLngtc2V0dGluZ3MtaW5wdXQtY2VsbC1maWxse3dpZHRoOjEwMCV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtbm93cmFwe3doaXRlLXNwYWNlOm5vd3JhcH0ueC1zZXR0aW5ncy1pbnB1dC1sYWJlbHtjdXJzb3I6cG9pbnRlcjttYXJnaW46MCAwIDAgMWVtfS54LXNldHRpbmdzLWlucHV0LWNoZWNrYm94LXByZWZpeHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1yaWdodDouNWVtfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZ20gPSByZXF1aXJlKFwiLi9nbVwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KSB7XHJcblx0bGV0IGNvbmZpZyA9IG51bGw7XHJcblx0bGV0IGNvbmZpZ0dldFByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZygpIHtcclxuXHRcdGNvbnN0IGNvbmZpZ1N0cmluZyA9IGF3YWl0IGdtLmdldFZhbHVlKGNvbmZpZ0tleSwgbnVsbCk7XHJcblx0XHRpZiAodHlwZW9mKGNvbmZpZ1N0cmluZykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCBjID0gSlNPTi5wYXJzZShjb25maWdTdHJpbmcpO1xyXG5cdFx0XHRcdGlmIChjICE9PSBudWxsICYmIHR5cGVvZihjKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShjKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ0RlZmF1bHQsIGMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZSkge31cclxuXHRcdH1cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWdEZWZhdWx0KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdGlmIChjb25maWcgIT09IG51bGwpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25maWcpOyB9XHJcblxyXG5cdFx0aWYgKGNvbmZpZ0dldFByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0Y29uZmlnR2V0UHJvbWlzZSA9IGxvYWRDb25maWcoKS50aGVuKCh2KSA9PiBjb25maWcgPSB2KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29uZmlnR2V0UHJvbWlzZTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIHNhdmUoKSB7XHJcblx0XHRpZiAoY29uZmlnICE9PSBudWxsKSB7XHJcblx0XHRcdGF3YWl0IGdtLnNldFZhbHVlKGNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCBcIlwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBiaW5kSW5wdXQobm9kZSwgc2V0dGluZ05hbWUsIG9wdGlvbnMsIHZhbHVlTmFtZSkge1xyXG5cdFx0Y29uc3QgYyA9IGF3YWl0IGdldCgpO1xyXG5cclxuXHRcdGlmICh0eXBlb2YodmFsdWVOYW1lKSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHR2YWx1ZU5hbWUgPSBnZXREZWZhdWx0VmFsdWVOYW1lKG5vZGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHVwZGF0ZUlucHV0ID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB7dmFsdWUsIHZhbGlkfSA9IGNvbnZlcnRUb1R5cGUoY1tzZXR0aW5nTmFtZV0sIG9wdGlvbnMsIHRydWUpO1xyXG5cdFx0XHRpZiAodmFsaWQpIHsgbm9kZVt2YWx1ZU5hbWVdID0gdmFsdWU7IH1cclxuXHRcdH07XHJcblxyXG5cdFx0dXBkYXRlSW5wdXQoKTtcclxuXHJcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB7dmFsdWUsIHZhbGlkfSA9IGNvbnZlcnRUb1R5cGUobm9kZVt2YWx1ZU5hbWVdLCBvcHRpb25zLCBmYWxzZSk7XHJcblx0XHRcdGlmICh2YWxpZCkge1xyXG5cdFx0XHRcdGNbc2V0dGluZ05hbWVdID0gdmFsdWU7XHJcblx0XHRcdFx0c2F2ZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVJbnB1dCgpO1xyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnZXQsXHJcblx0XHRzYXZlLFxyXG5cdFx0YmluZElucHV0XHJcblx0fTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRUeXBlQ29udmVydE9wdGlvbnMgPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVOYW1lKG5vZGUpIHtcclxuXHRzd2l0Y2ggKG5vZGUudGFnTmFtZSkge1xyXG5cdFx0Y2FzZSBcIklOUFVUXCI6XHJcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IFwiY2hlY2tib3hcIikgeyByZXR1cm4gXCJjaGVja2VkXCI7IH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gXCJ2YWx1ZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9UeXBlKHZhbHVlLCBvcHRpb25zLCB0b0lucHV0KSB7XHJcblx0aWYgKHR5cGVvZihvcHRpb25zKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0cmV0dXJuIGNvbnZlcnRUb1R5cGVOb3JtYWxpemVkKHZhbHVlLCBvcHRpb25zLCBkZWZhdWx0VHlwZUNvbnZlcnRPcHRpb25zLCB0b0lucHV0KTtcclxuXHR9IGlmIChvcHRpb25zICE9PSBudWxsICYmIHR5cGVvZihvcHRpb25zKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Yob3B0aW9ucy50eXBlKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0cmV0dXJuIGNvbnZlcnRUb1R5cGVOb3JtYWxpemVkKHZhbHVlLCBvcHRpb25zLnR5cGUsIG9wdGlvbnMsIHRvSW5wdXQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4geyB2YWx1ZSwgdmFsaWQ6IHRydWUgfTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb1R5cGVOb3JtYWxpemVkKHZhbHVlLCB0eXBlTmFtZSwgb3B0aW9ucywgdG9JbnB1dCkge1xyXG5cdGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG5cdC8vIENvbnZlcnRcclxuXHRzd2l0Y2ggKHR5cGVOYW1lKSB7XHJcblx0XHRjYXNlIFwiYm9vbGVhblwiOlxyXG5cdFx0XHR2YWx1ZSA9ICEhdmFsdWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImludGVnZXJcIjpcclxuXHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0dmFsdWUgPSAodHlwZU5hbWUgPT09IFwibnVtYmVyXCIgPyBwYXJzZUZsb2F0KGAke3ZhbHVlfWApIDogcGFyc2VJbnQoYCR7dmFsdWV9YCwgMTApKTtcclxuXHRcdFx0aWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XHJcblx0XHRcdFx0dmFsdWUgPSAwO1xyXG5cdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRcdHZhbHVlID0gYCR7dmFsdWV9YDtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHQvLyBUcmFuc2Zvcm1cclxuXHRpZiAoIXRvSW5wdXQgJiYgdHlwZW9mKG9wdGlvbnMuaW5wdXRUb1ZhbHVlKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHR2YWx1ZSA9IG9wdGlvbnMuaW5wdXRUb1ZhbHVlKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8vIExpbWl0c1xyXG5cdHN3aXRjaCAodHlwZU5hbWUpIHtcclxuXHRcdGNhc2UgXCJpbnRlZ2VyXCI6XHJcblx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5taW4pID09PSBcIm51bWJlclwiICYmIHZhbHVlIDwgb3B0aW9ucy5taW4pIHsgdmFsdWUgPSBvcHRpb25zLm1pbjsgfVxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWF4KSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA+IG9wdGlvbnMubWF4KSB7IHZhbHVlID0gb3B0aW9ucy5tYXg7IH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5tYXhMZW5ndGgpID09PSBcIm51bWJlclwiICYmIHZhbHVlLmxlbmd0aCA+IG9wdGlvbnMubWF4TGVuZ3RoKSB7XHJcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgb3B0aW9ucy5tYXhMZW5ndGgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Ly8gVHJhbnNmb3JtXHJcblx0aWYgKHRvSW5wdXQgJiYgdHlwZW9mKG9wdGlvbnMudmFsdWVUb0lucHV0KSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHR2YWx1ZSA9IG9wdGlvbnMudmFsdWVUb0lucHV0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7IHZhbHVlLCB2YWxpZCB9O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y3JlYXRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9Qcm9taXNlKGZuLCBzZWxmKSB7XHJcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc29sdmUoZm4uYXBwbHkoc2VsZiwgYXJncykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBnbSA9ICgob2JqZWN0cykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB2ID0gR007IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cdFx0aWYgKHYgIT09IG51bGwgJiYgdHlwZW9mKHYpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdHJldHVybiB2O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGlmIChvYmouR00gIT09IG51bGwgJiYgdHlwZW9mKG9iai5HTSkgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2JqLkdNO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNhdGNoIChlKSB7IH1cclxuXHJcblx0Y29uc3QgbWFwcGluZyA9IFtcclxuXHRcdFsgXCJnZXRWYWx1ZVwiLCBcIkdNX2dldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJzZXRWYWx1ZVwiLCBcIkdNX3NldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJkZWxldGVWYWx1ZVwiLCBcIkdNX2RlbGV0ZVZhbHVlXCIgXSxcclxuXHRcdFsgXCJ4bWxIdHRwUmVxdWVzdFwiLCBcIkdNX3htbGh0dHBSZXF1ZXN0XCIgXVxyXG5cdF07XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcHBpbmcpIHtcclxuXHRcdGxldCBwcm9taXNlID0gbnVsbDtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0Y29uc3QgZm4gPSBvYmpbdmFsdWVdO1xyXG5cdFx0XHRpZiAodHlwZW9mKGZuKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0cHJvbWlzZSA9IHRvUHJvbWlzZShmbiwgb2JqKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0cHJvbWlzZSA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdChuZXcgRXJyb3IoYE5vdCBzdXBwb3J0ZWQgKCR7a2V5fSlgKSkpO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0W2tleV0gPSBwcm9taXNlO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59KS5jYWxsKHRoaXMsIFt0aGlzLCB3aW5kb3ddKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBjb25maWdLZXkgPSBcIngtc2VhcmNoLWxpbmtzLWNvbmZpZ1wiO1xyXG5jb25zdCBzZWFyY2hUYXJnZXRzRGVmYXVsdCA9IFtcclxuXHR7XHJcblx0XHR0aXRsZTogXCJTZWFyY2ggYnkgTmFtZVwiLFxyXG5cdFx0dXJsOiBcIi8/Zl9jYXRzPTAmZl9zbmFtZT0xJmZfc2VhcmNoPVxcXCJ7c2hvcnQtbmFtZX1cXFwiXCIsXHJcblx0XHRlbmFibGVkOiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJTZWFyY2ggYnkgRnVsbCBOYW1lXCIsXHJcblx0XHR1cmw6IFwiLz9mX2NhdHM9MCZmX3NuYW1lPTEmZl9zZWFyY2g9XFxcIntmdWxsLW5hbWV9XFxcIlwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IE5hbWUgKG5oZW50YWkubmV0KVwiLFxyXG5cdFx0dXJsOiBcImh0dHBzOi8vbmhlbnRhaS5uZXQvc2VhcmNoLz9xPVxcXCJ7c2hvcnQtbmFtZX1cXFwiXCIsXHJcblx0XHRlbmFibGVkOiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJTZWFyY2ggYnkgRnVsbCBOYW1lIChuaGVudGFpLm5ldClcIixcclxuXHRcdHVybDogXCJodHRwczovL25oZW50YWkubmV0L3NlYXJjaC8/cT1cXFwie2Z1bGwtbmFtZX1cXFwiXCIsXHJcblx0XHRlbmFibGVkOiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJTZWFyY2ggYnkgTmFtZSAoaGl0b21pLmxhKVwiLFxyXG5cdFx0dXJsOiBcImh0dHBzOi8vaGl0b21pLmxhL3NlYXJjaC5odG1sP3tzaG9ydC1uYW1lfVwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IEZ1bGwgTmFtZSAoY2hhaWthKVwiLFxyXG5cdFx0dXJsOiBcImh0dHBzOi8vcGFuZGEuY2hhaWthLm1vZS9zZWFyY2gvP3FzZWFyY2g9e2Z1bGwtbmFtZX1cIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlNlYXJjaCBieSBOYW1lIChjaGFpa2EpXCIsXHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9wYW5kYS5jaGFpa2EubW9lL3NlYXJjaC8/cXNlYXJjaD17c2hvcnQtbmFtZX1cIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlNlYXJjaCBieSBVUkwgKGNoYWlrYSlcIixcclxuXHRcdHVybDogXCJodHRwczovL3BhbmRhLmNoYWlrYS5tb2Uvc2VhcmNoLz9xc2VhcmNoPXt1cmx9XCIsXHJcblx0XHRlbmFibGVkOiB0cnVlXHJcblx0fVxyXG5dO1xyXG5jb25zdCBjb25maWdEZWZhdWx0ID0ge1xyXG5cdHNlYXJjaFRhcmdldHM6IGdldERlZmF1bHRTZWFyY2hUYXJnZXRzKClcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRTZWFyY2hUYXJnZXRzKCkge1xyXG5cdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNlYXJjaFRhcmdldHNEZWZhdWx0LCBudWxsLCBcIlwiKSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKS5jcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KTtcclxubW9kdWxlLmV4cG9ydHMuZ2V0RGVmYXVsdFNlYXJjaFRhcmdldHMgPSBnZXREZWZhdWx0U2VhcmNoVGFyZ2V0cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCByZWFkeSA9IHJlcXVpcmUoXCIuLi9yZWFkeVwiKTtcclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcbmNvbnN0IHBhZ2VUeXBlID0gcmVxdWlyZShcIi4uL2FwaS9wYWdlLXR5cGVcIik7XHJcbmNvbnN0IGdhbGxlcnlEZXRhaWxzID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWRldGFpbHNcIik7XHJcbmNvbnN0IFBvcHVwTWVudSA9IHJlcXVpcmUoXCIuLi9hcGkvcG9wdXAtbWVudVwiKS5Qb3B1cE1lbnU7XHJcbmNvbnN0IHNldHRpbmdzID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XHJcblxyXG5sZXQgbWVudSA9IG51bGw7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0dXBHYWxsZXJ5UGFnZShnZCkge1xyXG5cdGNvbnN0IGNvbmZpZyA9IGF3YWl0IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKS5nZXQoKTtcclxuXHRjb25zdCBzZWFyY2hUYXJnZXRzID0gY29uZmlnLnNlYXJjaFRhcmdldHM7XHJcblx0aWYgKCFBcnJheS5pc0FycmF5KHNlYXJjaFRhcmdldHMpIHx8IHNlYXJjaFRhcmdldHMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBsaW5rID0gZ2QuYWRkTGluayhcIkN1c3RvbSBTZWFyY2hcIiwgMCk7XHJcblx0aWYgKGxpbmsgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBvbk1lbnVMaW5rQ2xpY2soZSwgbGluaywgc2VhcmNoVGFyZ2V0cyksIGZhbHNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25NZW51TGlua0NsaWNrKGUsIG5vZGUsIHNlYXJjaFRhcmdldHMpIHtcclxuXHRpZiAobWVudSA9PT0gbnVsbCkge1xyXG5cdFx0bWVudSA9IGNyZWF0ZU1lbnUoc2VhcmNoVGFyZ2V0cyk7XHJcblx0fVxyXG5cclxuXHRpZiAobWVudSAhPT0gbnVsbCkge1xyXG5cdFx0bWVudS5zaG93KG5vZGUsIGZhbHNlLCBudWxsKTtcclxuXHR9XHJcblxyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudShzZWFyY2hUYXJnZXRzKSB7XHJcblx0Y29uc3Qgb3B0aW9ucyA9IFtdO1xyXG5cdGZvciAoY29uc3Qgc2VhcmNoVGFyZ2V0IG9mIHNlYXJjaFRhcmdldHMpIHtcclxuXHRcdGlmIChzZWFyY2hUYXJnZXQuZW5hYmxlZCA9PT0gZmFsc2UpIHsgY29udGludWU7IH1cclxuXHRcdG9wdGlvbnMucHVzaCh7XHJcblx0XHRcdHRpdGxlOiBzZWFyY2hUYXJnZXQudGl0bGUsXHJcblx0XHRcdHVybDogc2VhcmNoVGFyZ2V0LnVybCxcclxuXHRcdFx0dGFyZ2V0OiBcIl9ibGFua1wiXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBnZXRHYWxsZXJ5SW5mb0Zyb21IdG1sID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbFwiKTtcclxuXHRjb25zdCBpbmZvID0gZ2V0R2FsbGVyeUluZm9Gcm9tSHRtbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCByZXBsYWNlbWVudHMgPSBnZXRHYWxsZXJ5SW5mb1JlcGxhY2VtZW50cyhpbmZvKTtcclxuXHJcblx0Y29uc3QgbWVudSA9IG5ldyBQb3B1cE1lbnUoKTtcclxuXHRmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XHJcblx0XHRvcHRpb24udXJsID0gZm9ybWF0VXJsKG9wdGlvbi51cmwsIHJlcGxhY2VtZW50cyk7XHJcblx0XHRtZW51LmFkZE9wdGlvbihvcHRpb24pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmwsIHJlcGxhY2VtZW50cykge1xyXG5cdHJldHVybiB1cmwucmVwbGFjZSgvXFx7KFteXFx9XSopXFx9L2csIChtMCwgbTEpID0+IHtcclxuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVwbGFjZW1lbnRzLCBtMSkgPyByZXBsYWNlbWVudHNbbTFdIDogbTA7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJbmZvUmVwbGFjZW1lbnRzKGdhbGxlcnlJbmZvKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdFwic2hvcnQtbmFtZVwiOiBlbmNvZGVVUklDb21wb25lbnQoZ2V0U2hvcnRUaXRsZShnYWxsZXJ5SW5mby50aXRsZSkpLFxyXG5cdFx0XCJmdWxsLW5hbWVcIjogZW5jb2RlVVJJQ29tcG9uZW50KGdhbGxlcnlJbmZvLnRpdGxlKSxcclxuXHRcdFwidXJsXCI6IGVuY29kZVVSSUNvbXBvbmVudChnZXRHYWxsZXJ5VXJsKGdhbGxlcnlJbmZvLmlkZW50aWZpZXIpKVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNob3J0VGl0bGUodGl0bGUpIHtcclxuXHRjb25zdCBwcmVmaXhUYWdzID0gL15cXHMqKFxcKChbXlxcKV0qPylcXCl8XFxbKFteXFxdXSo/KVxcXXxcXHsoW15cXH1dKj8pXFx9KVxccyovaTtcclxuXHRjb25zdCBzdWZmaXhUYWdzID0gL1xccyooXFwoKFteXFwpXSo/KSg/OlxcKXwkKXxcXFsoW15cXF1dKj8pKD86XFxdfCQpfFxceyhbXlxcfV0qPykoPzpcXH18JCkpXFxzKiQvaTtcclxuXHJcblx0bGV0IG07XHJcblx0d2hpbGUgKChtID0gcHJlZml4VGFncy5leGVjKHRpdGxlKSkpIHtcclxuXHRcdHRpdGxlID0gdGl0bGUuc3Vic3RyKG0uaW5kZXggKyBtWzBdLmxlbmd0aCk7XHJcblx0fVxyXG5cdHdoaWxlICgobSA9IHN1ZmZpeFRhZ3MuZXhlYyh0aXRsZSkpKSB7XHJcblx0XHR0aXRsZSA9IHRpdGxlLnN1YnN0cigwLCBtLmluZGV4KTtcclxuXHR9XHJcblx0cmV0dXJuIHRpdGxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5VXJsKGlkKSB7XHJcblx0Y29uc3QgbG9jID0gd2luZG93LmxvY2F0aW9uO1xyXG5cdHJldHVybiBgJHtsb2MucHJvdG9jb2x9Ly8ke2xvYy5ob3N0fS9nLyR7aWQuaWR9LyR7aWQudG9rZW59L2A7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZXNoZWV0KCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LXNlYXJjaC1saW5rc1wiO1xyXG5cdGlmIChzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xyXG5cdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdHNldHRpbmdzLmFkZExpbmsoKTtcclxuXHJcblx0Y29uc3QgY3VycmVudFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGRvY3VtZW50LCBsb2NhdGlvbik7XHJcblx0aWYgKGN1cnJlbnRQYWdlVHlwZSA9PT0gXCJzZXR0aW5nc1wiKSB7XHJcblx0XHRpbnNlcnRTdHlsZXNoZWV0KCk7XHJcblx0XHRzZXR0aW5ncy5pbml0aWFsaXplKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2QgPSBhd2FpdCBnYWxsZXJ5RGV0YWlscy53YWl0Rm9yKCk7XHJcblx0XHRpbnNlcnRTdHlsZXNoZWV0KCk7XHJcblx0XHRzZXR1cEdhbGxlcnlQYWdlKGdkKTtcclxuXHR9KSgpO1xyXG59XHJcblxyXG5cclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvblxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWxlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZVxcXCI+U2VhcmNoIFRhcmdldHM8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPlxcclxcblxcdFxcdFxcdExpc3Qgb2Ygc2VhcmNoIHNlYXJjaCB0YXJnZXRzLlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvblxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXIgeC1zZWFyY2gtbGlua3Mtc2VhcmNoLXRhcmdldC1jb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtcm93IHgtc2V0dGluZ3MtaW5wdXQtaGVhZGVyLXJvd1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5PcmRlcjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+VGl0bGU8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPlVSTDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+RW5hYmxlZDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtcm93IHgtc2VhcmNoLWxpbmtzLXNlYXJjaC10YXJnZXQtZW50cnlcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbCB4LXNldHRpbmdzLWlucHV0LWNlbGwtbm93cmFwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvbiB4LXNlYXJjaC1saW5rcy1yZW1vdmUtYnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCImI3gyNzE2O1xcXCIgLz48aW5wdXQgY2xhc3M9XFxcIngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvbiB4LXNlYXJjaC1saW5rcy1tb3ZlLXVwLWJ1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiJiN4MjVCMjtcXFwiIC8+PGlucHV0IGNsYXNzPVxcXCJ4LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b24geC1zZWFyY2gtbGlua3MtbW92ZS1kb3duLWJ1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiJiN4MjVCQztcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dCB4LXNlYXJjaC1saW5rcy10aXRsZS1pbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiIGRhdGEteC1zZXR0aW5ncy1vcHRpb249XFxcInRpdGxlXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbCB4LXNldHRpbmdzLWlucHV0LWNlbGwtZmlsbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXQgeC1zZWFyY2gtbGlua3MtdXJsLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgZGF0YS14LXNldHRpbmdzLW9wdGlvbj1cXFwidXJsXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbCB4LXNldHRpbmdzLWlucHV0LWNlbGwtbWlkZGxlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWw+PHNwYW4gY2xhc3M9XFxcImxjXFxcIj48aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dCB4LXNlYXJjaC1saW5rcy1lbmFibGVkLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwiZW5hYmxlZFxcXCIgLz48c3Bhbj48L3NwYW4+PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC10YWJsZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1yb3cgeC1zZWFyY2gtbGlua3Mtc2VhcmNoLXRhcmdldC1lbnRyeVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvbiB4LXNlYXJjaC1saW5rcy1hZGQtYnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCImI3gyNzk1OyYjeEZFMEU7XFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbCB4LXNldHRpbmdzLWlucHV0LWNlbGwtbWlkZGxlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwieC1zZWFyY2gtbGlua3MtcmVzZXQtbGlua1xcXCI+UmVzZXQgdG8gZGVmYXVsdDwvYT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0gcmVxdWlyZShcIi4uL2FwaS9zZXR0aW5nc1wiKTtcclxuXHJcbmxldCBzZXR0aW5nc0NvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnLCBjb25maWdWYWx1ZSwgdGVtcGxhdGUsIHNlYXJjaFRhcmdldFBhcmVudCwgYWRkQnV0dG9uLCByZXNldEJ1dHRvbiwgaGlkZUlmRW1wdHlOb2RlKSB7XHJcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHRcdHRoaXMuY29uZmlnVmFsdWUgPSBjb25maWdWYWx1ZTtcclxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0UGFyZW50ID0gc2VhcmNoVGFyZ2V0UGFyZW50O1xyXG5cdFx0dGhpcy5hZGRCdXR0b24gPSBhZGRCdXR0b247XHJcblx0XHR0aGlzLnJlc2V0QnV0dG9uID0gcmVzZXRCdXR0b247XHJcblx0XHR0aGlzLmhpZGVJZkVtcHR5Tm9kZSA9IGhpZGVJZkVtcHR5Tm9kZTtcclxuXHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldHMgPSBbXTtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMgPSBbXTtcclxuXHRcdHRoaXMuc2V0dXBTZWFyY2hUYXJnZXRzKCk7XHJcblxyXG5cdFx0dGhpcy5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYWRkU2VhcmNoVGFyZ2V0KCksIGZhbHNlKTtcclxuXHRcdHRoaXMucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMucmVzZXRTZWFyY2hUYXJnZXRzKCksIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGFkZFNlYXJjaFRhcmdldCgpIHtcclxuXHRcdGNvbnN0IHNlYXJjaFRhcmdldCA9IHsgdGl0bGU6IFwiXCIsIHVybDogXCJcIiwgZW5hYmxlZDogdHJ1ZSB9O1xyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnNlYXJjaFRhcmdldHMubGVuZ3RoO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzLnB1c2goc2VhcmNoVGFyZ2V0KTtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMucHVzaChuZXcgU2V0dGluZ3NTZWFyY2hUYXJnZXRDb250cm9sbGVyKHRoaXMsIHNlYXJjaFRhcmdldCwgaW5kZXgpKTtcclxuXHRcdGlmIChpbmRleCA+IDApIHtcclxuXHRcdFx0Y29uc3QgYyA9IHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnNbaW5kZXggLSAxXTtcclxuXHRcdFx0aWYgKGMgIT09IG51bGwpIHsgYy51cGRhdGVJbmRleChjLmluZGV4KTsgfVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudXBkYXRlU2VhcmNoVGFyZ2V0Q291bnQoKTtcclxuXHJcblx0XHRhd2FpdCB0aGlzLnNhdmVDb25maWcoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlc2V0U2VhcmNoVGFyZ2V0cygpIHtcclxuXHRcdHRoaXMuY2xlYW51cFNlYXJjaFRhcmdldHMoKTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZ1ZhbHVlLnNlYXJjaFRhcmdldHMgPSB0aGlzLmNvbmZpZy5nZXREZWZhdWx0U2VhcmNoVGFyZ2V0cygpO1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlQ29uZmlnKCk7XHJcblxyXG5cdFx0dGhpcy5zZXR1cFNlYXJjaFRhcmdldHMoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFudXBTZWFyY2hUYXJnZXRzKCkge1xyXG5cdFx0Zm9yIChjb25zdCBzZWFyY2hUYXJnZXRDb250cm9sbGVyIG9mIHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMpIHtcclxuXHRcdFx0c2VhcmNoVGFyZ2V0Q29udHJvbGxlci5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzID0gW107XHJcblx0fVxyXG5cclxuXHRzZXR1cFNlYXJjaFRhcmdldHMoKSB7XHJcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5jb25maWdWYWx1ZS5zZWFyY2hUYXJnZXRzKSkge1xyXG5cdFx0XHR0aGlzLmNvbmZpZ1ZhbHVlLnNlYXJjaFRhcmdldHMgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldHMgPSB0aGlzLmNvbmZpZ1ZhbHVlLnNlYXJjaFRhcmdldHM7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzID0gW107XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDAsIGlpID0gdGhpcy5zZWFyY2hUYXJnZXRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdFx0Y29uc3Qgc2VhcmNoVGFyZ2V0ID0gdGhpcy5zZWFyY2hUYXJnZXRzW2ldO1xyXG5cdFx0XHRjb25zdCBjb250cm9sbGVyID0gaXNPYmplY3Qoc2VhcmNoVGFyZ2V0KSA/IG5ldyBTZXR0aW5nc1NlYXJjaFRhcmdldENvbnRyb2xsZXIodGhpcywgc2VhcmNoVGFyZ2V0LCBpKSA6IG51bGw7XHJcblx0XHRcdHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMucHVzaChjb250cm9sbGVyKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnVwZGF0ZVNlYXJjaFRhcmdldENvdW50KCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBtb3ZlKGNvbnRyb2xsZXIsIG9mZnNldCkge1xyXG5cdFx0Y29uc3QgaW5kZXhPbGQgPSBjb250cm9sbGVyLmluZGV4O1xyXG5cdFx0Y29uc3QgaW5kZXhOZXcgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLmxlbmd0aCAtIDEsIGluZGV4T2xkICsgb2Zmc2V0KSk7XHJcblx0XHRpZiAoaW5kZXhOZXcgPT09IGluZGV4T2xkKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdGNvbnN0IHNlYXJjaFRhcmdldCA9IHRoaXMuc2VhcmNoVGFyZ2V0c1tpbmRleE9sZF07XHJcblxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzLnNwbGljZShpbmRleE9sZCwgMSk7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldHMuc3BsaWNlKGluZGV4TmV3LCAwLCBzZWFyY2hUYXJnZXQpO1xyXG5cclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMuc3BsaWNlKGluZGV4T2xkLCAxKTtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMuc3BsaWNlKGluZGV4TmV3LCAwLCBjb250cm9sbGVyKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gTWF0aC5taW4oaW5kZXhPbGQsIGluZGV4TmV3KSwgaWkgPSBNYXRoLm1heChpbmRleE9sZCwgaW5kZXhOZXcpICsgMTsgaSA8IGlpOyArK2kpIHtcclxuXHRcdFx0Y29uc3QgYyA9IHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnNbaV07XHJcblx0XHRcdGlmIChjICE9PSBudWxsKSB7IGMudXBkYXRlSW5kZXgoaSk7IH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbmV4dCA9IG51bGw7XHJcblx0XHRmb3IgKGxldCBpID0gaW5kZXhOZXcgKyAxLCBpaSA9IHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0XHRjb25zdCBjID0gdGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVyc1tpXTtcclxuXHRcdFx0aWYgKGMgIT09IG51bGwpIHtcclxuXHRcdFx0XHRuZXh0ID0gYztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChuZXh0ICE9PSBudWxsICYmIG5leHQucm93LnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0bmV4dC5yb3cucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29udHJvbGxlci5yb3csIG5leHQucm93KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2VhcmNoVGFyZ2V0UGFyZW50LmFwcGVuZENoaWxkKGNvbnRyb2xsZXIucm93KTtcclxuXHRcdH1cclxuXHJcblx0XHRhd2FpdCB0aGlzLnNhdmVDb25maWcoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlbW92ZShjb250cm9sbGVyKSB7XHJcblx0XHRjb25zdCBpbmRleCA9IGNvbnRyb2xsZXIuaW5kZXg7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcblx0XHRjb250cm9sbGVyLmRlc3Ryb3koKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gTWF0aC5tYXgoMCwgaW5kZXggLSAxKSwgaWkgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdFx0Y29uc3QgYyA9IHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnNbaV07XHJcblx0XHRcdGlmIChjICE9PSBudWxsKSB7IGMudXBkYXRlSW5kZXgoaSk7IH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnVwZGF0ZVNlYXJjaFRhcmdldENvdW50KCk7XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5zYXZlQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTZWFyY2hUYXJnZXRDb3VudCgpIHtcclxuXHRcdGlmICh0aGlzLmhpZGVJZkVtcHR5Tm9kZSA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuaGlkZUlmRW1wdHlOb2RlLnN0eWxlLmRpc3BsYXkgPSAodGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5sZW5ndGggPiAwID8gXCJcIiA6IFwibm9uZVwiKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmVDb25maWcoKSB7XHJcblx0XHR0aGlzLmNvbmZpZy5zYXZlKCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTZXR0aW5nc1NlYXJjaFRhcmdldENvbnRyb2xsZXIge1xyXG5cdGNvbnN0cnVjdG9yKHBhcmVudCwgc2VhcmNoVGFyZ2V0LCBpbmRleCkge1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldCA9IHNlYXJjaFRhcmdldDtcclxuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcblx0XHR0aGlzLmhvb2tlZEV2ZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5yb3cgPSB0aGlzLnBhcmVudC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHR0aGlzLnBhcmVudC5zZWFyY2hUYXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5yb3cpO1xyXG5cclxuXHRcdHRoaXMucmVtb3ZlQnV0dG9uID0gdGhpcy5yb3cucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1yZW1vdmUtYnV0dG9uXCIpO1xyXG5cdFx0dGhpcy5tb3ZlVXBCdXR0b24gPSB0aGlzLnJvdy5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLW1vdmUtdXAtYnV0dG9uXCIpO1xyXG5cdFx0dGhpcy5tb3ZlRG93bkJ1dHRvbiA9IHRoaXMucm93LnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtbW92ZS1kb3duLWJ1dHRvblwiKTtcclxuXHRcdHRoaXMudGl0bGVGaWVsZCA9IHRoaXMucm93LnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtdGl0bGUtaW5wdXRcIik7XHJcblx0XHR0aGlzLnVybEZpZWxkID0gdGhpcy5yb3cucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy11cmwtaW5wdXRcIik7XHJcblx0XHR0aGlzLmVuYWJsZWRDaGVja2JveCA9IHRoaXMucm93LnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtZW5hYmxlZC1pbnB1dFwiKTtcclxuXHJcblx0XHR0aGlzLnRpdGxlRmllbGQudmFsdWUgPSAodHlwZW9mKHNlYXJjaFRhcmdldC50aXRsZSkgPT09IFwic3RyaW5nXCIgPyBzZWFyY2hUYXJnZXQudGl0bGUgOiBcIlwiKTtcclxuXHRcdHRoaXMudXJsRmllbGQudmFsdWUgPSAodHlwZW9mKHNlYXJjaFRhcmdldC51cmwpID09PSBcInN0cmluZ1wiID8gc2VhcmNoVGFyZ2V0LnVybCA6IFwiXCIpO1xyXG5cdFx0dGhpcy5lbmFibGVkQ2hlY2tib3guY2hlY2tlZCA9ICEhc2VhcmNoVGFyZ2V0LmVuYWJsZWQ7XHJcblxyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLl9ob29rKHRoaXMucmVtb3ZlQnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHRoaXMucmVtb3ZlKCkpO1xyXG5cdFx0dGhpcy5faG9vayh0aGlzLm1vdmVVcEJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLm1vdmVVcCgpKTtcclxuXHRcdHRoaXMuX2hvb2sodGhpcy5tb3ZlRG93bkJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLm1vdmVEb3duKCkpO1xyXG5cdFx0dGhpcy5faG9vayh0aGlzLnRpdGxlRmllbGQsIFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgc2VsZi5zZXRUaXRsZSh0aGlzLnZhbHVlKTsgfSk7XHJcblx0XHR0aGlzLl9ob29rKHRoaXMudXJsRmllbGQsIFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgc2VsZi5zZXRVcmwodGhpcy52YWx1ZSk7IH0pO1xyXG5cdFx0dGhpcy5faG9vayh0aGlzLmVuYWJsZWRDaGVja2JveCwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkgeyBzZWxmLnNldEVuYWJsZWQodGhpcy5jaGVja2VkKTsgfSk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVJbmRleChpbmRleCk7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMucm93ID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdGZvciAoY29uc3QgaW5mbyBvZiB0aGlzLmhvb2tlZEV2ZW50cykge1xyXG5cdFx0XHRpbmZvLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihpbmZvLmV2ZW50LCBpbmZvLmNhbGxiYWNrLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmhvb2tlZEV2ZW50cyA9IFtdO1xyXG5cclxuXHRcdHRoaXMucm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5yb3cpO1xyXG5cdFx0dGhpcy5yb3cgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlKCkge1xyXG5cdFx0dGhpcy5wYXJlbnQucmVtb3ZlKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0bW92ZVVwKCkge1xyXG5cdFx0dGhpcy5wYXJlbnQubW92ZSh0aGlzLCAtMSk7XHJcblx0fVxyXG5cclxuXHRtb3ZlRG93bigpIHtcclxuXHRcdHRoaXMucGFyZW50Lm1vdmUodGhpcywgMSk7XHJcblx0fVxyXG5cclxuXHRzZXRUaXRsZSh2YWx1ZSkge1xyXG5cdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldC50aXRsZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5wYXJlbnQuc2F2ZUNvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0c2V0VXJsKHZhbHVlKSB7XHJcblx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gXCJzdHJpbmdcIikgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0LnVybCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5wYXJlbnQuc2F2ZUNvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0c2V0RW5hYmxlZCh2YWx1ZSkge1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXQuZW5hYmxlZCA9ICEhdmFsdWU7XHJcblx0XHR0aGlzLnBhcmVudC5zYXZlQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJbmRleChpbmRleCkge1xyXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xyXG5cdFx0dGhpcy5tb3ZlVXBCdXR0b24uZGlzYWJsZWQgPSAoaW5kZXggPD0gMCk7XHJcblx0XHR0aGlzLm1vdmVEb3duQnV0dG9uLmRpc2FibGVkID0gKGluZGV4ID49IHRoaXMucGFyZW50LnNlYXJjaFRhcmdldHMubGVuZ3RoIC0gMSk7XHJcblx0fVxyXG5cclxuXHRfaG9vayhub2RlLCBldmVudCwgY2FsbGJhY2spIHtcclxuXHRcdHRoaXMuaG9va2VkRXZlbnRzLnB1c2goeyBub2RlLCBldmVudCwgY2FsbGJhY2sgfSk7XHJcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCBmYWxzZSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3Qodikge1xyXG5cdHJldHVybiAodiAhPT0gbnVsbCAmJiB0eXBlb2YodikgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKCkge1xyXG5cdHNldHRpbmdzLmFkZExpbmsoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRzZXR0aW5ncy5pbml0aWFsaXplKCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb24gPSBzZXR0aW5ncy5hZGRTZWN0aW9uKFwiU2VhcmNoIExpbmtzXCIsIFwic2VhcmNoLWxpbmtzXCIsIDMpO1xyXG5cdGlmIChzZWN0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XHJcblx0XHRjb25zdCBjb25maWdWYWx1ZSA9IGF3YWl0IGNvbmZpZy5nZXQoKTtcclxuXHRcdHNldHVwU2V0dGluZ3MoY29uZmlnLCBjb25maWdWYWx1ZSwgc2VjdGlvbik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cFNldHRpbmdzKGNvbmZpZywgY29uZmlnVmFsdWUsIGNvbnRhaW5lcikge1xyXG5cdGlmIChzZXR0aW5nc0NvbnRyb2xsZXIgIT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSByZXF1aXJlKFwiLi9zZXR0aW5ncy5odG1sXCIpO1xyXG5cclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLXNlYXJjaC10YXJnZXQtZW50cnlcIik7XHJcblx0Y29uc3QgcGFyZW50ID0gdGVtcGxhdGUucGFyZW50Tm9kZTtcclxuXHRjb25zdCBhZGRCdXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1hZGQtYnV0dG9uXCIpO1xyXG5cdGNvbnN0IHJlc2V0QnV0dG9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtcmVzZXQtbGlua1wiKTtcclxuXHRjb25zdCBoaWRlTm9kZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLXNlYXJjaC10YXJnZXQtY29udGFpbmVyXCIpO1xyXG5cdHBhcmVudC5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XHJcblxyXG5cdHNldHRpbmdzQ29udHJvbGxlciA9IG5ldyBTZXR0aW5nc0NvbnRyb2xsZXIoY29uZmlnLCBjb25maWdWYWx1ZSwgdGVtcGxhdGUsIHBhcmVudCwgYWRkQnV0dG9uLCByZXNldEJ1dHRvbiwgaGlkZU5vZGUpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YWRkTGluayxcclxuXHRpbml0aWFsaXplXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJpbnB1dC54LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b25bdHlwZT1idXR0b25de2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MDttYXJnaW46MDtwYWRkaW5nOjA7bGluZS1oZWlnaHQ6MS44NzVlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NzAwO3dpZHRoOjEuODc1ZW07aGVpZ2h0OjEuODc1ZW07bWluLWhlaWdodDowO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTt0ZXh0LWFsaWduOmNlbnRlcjtjdXJzb3I6cG9pbnRlcn06cm9vdC54LWlzLWRhcmsgaW5wdXQueC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uW3R5cGU9YnV0dG9uXTpkaXNhYmxlZHtjb2xvcjpyZ2JhKDI0MSwyNDEsMjQxLC41KTstd2Via2l0LXRleHQtZmlsbC1jb2xvcjpyZ2JhKDI0MSwyNDEsMjQxLC41KX06cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uW3R5cGU9YnV0dG9uXXtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDF9aW5wdXQueC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH1pbnB1dC54LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b25bdHlwZT1idXR0b25dK2lucHV0Lngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvblt0eXBlPWJ1dHRvbl17bWFyZ2luLWxlZnQ6LjI1ZW19aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF0ueC1zZWFyY2gtbGlua3MtdXJsLWlucHV0e3dpZHRoOjEwMCV9Lngtc2VhcmNoLWxpbmtzLXNlYXJjaC10YXJnZXQtY29udGFpbmVye3dpZHRoOjEwMCV9Lngtc2VhcmNoLWxpbmtzLXJlc2V0LWxpbmt7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtjdXJzb3I6cG9pbnRlcn0ueC1zZWFyY2gtbGlua3MtcmVzZXQtbGluazpub3QoOmhvdmVyKXtvcGFjaXR5Oi41fVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGFwaVN0eWxlID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJZChpZCkge1xyXG5cdHJldHVybiBgJHtpZH0tc3R5bGVzaGVldGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0SWQoaWQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzU3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiAhIWdldFN0eWxlc2hlZXQoaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNoZWV0KHNvdXJjZSwgaWQpIHtcclxuXHRpZiAoYXBpU3R5bGUgPT09IG51bGwpIHsgYXBpU3R5bGUgPSByZXF1aXJlKFwiLi9hcGkvc3R5bGVcIik7IH1cclxuXHRhcGlTdHlsZS5zZXREb2N1bWVudERhcmtGbGFnKCk7XHJcblxyXG5cdGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0c3R5bGUucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0c3R5bGUuaHJlZiA9IGBkYXRhOnRleHQvY3NzO2Jhc2U2NCwke3dpbmRvdy5idG9hKHNvdXJjZSl9YDtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHhQcmVmaXggPSBcIiMheFwiO1xyXG5jb25zdCBzZXBhcmF0b3IgPSBcIi9cIjtcclxuY29uc3Qgcm91dGVzID0gW107XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXIoYWRkSGlzdG9yeSkge1xyXG5cdGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0aWYgKGFkZEhpc3RvcnkpIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShwYXRoKSB7XHJcblx0cmV0dXJuIHBhdGggPyBgJHt4UHJlZml4fSR7c2VwYXJhdG9yfSR7cGF0aH1gIDogeFByZWZpeDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Y29uc3Qgcm91dGUgPSB7IG1hdGNoLCBjYWxsYmFjayB9O1xyXG5cdHJvdXRlcy5wdXNoKHJvdXRlKTtcclxuXHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdH1cclxuXHR0ZXN0Um91dGVzKFtyb3V0ZV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRmb3IgKGxldCBpID0gMCwgaWkgPSByb3V0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0Y29uc3Qgcm91dGUgPSByb3V0ZXNbaV07XHJcblx0XHRpZiAocm91dGUubWF0Y2ggPT09IG1hdGNoICYmIHJvdXRlLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xyXG5cdFx0XHRyb3V0ZXMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRYRnJhZ21lbnQoKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0IWZyYWdtZW50IHx8XHJcblx0XHRmcmFnbWVudC5sZW5ndGggPCB4UHJlZml4Lmxlbmd0aCB8fFxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKDAsIHhQcmVmaXgubGVuZ3RoKSAhPT0geFByZWZpeCB8fFxyXG5cdFx0KGZyYWdtZW50Lmxlbmd0aCA+IHhQcmVmaXgubGVuZ3RoICYmIGZyYWdtZW50W3hQcmVmaXgubGVuZ3RoXSAhPT0gc2VwYXJhdG9yKSkgP1xyXG5cdFx0bnVsbCA6XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoeFByZWZpeC5sZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0Um91dGVzKHJvdXRlcykge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gZ2V0WEZyYWdtZW50KCk7XHJcblx0aWYgKGZyYWdtZW50ID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5tYXRjaC5leGVjKGZyYWdtZW50KTtcclxuXHRcdHJvdXRlLmNhbGxiYWNrKG1hdGNoLCBmcmFnbWVudCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblVybEZyYWdtZW50Q2hhbmdlZCgpIHtcclxuXHR0ZXN0Um91dGVzKHJvdXRlcyk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjbGVhcjogY2xlYXIsXHJcblx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0YWRkUm91dGU6IGFkZFJvdXRlLFxyXG5cdHJlbW92ZVJvdXRlOiByZW1vdmVSb3V0ZVxyXG59O1xyXG4iXX0=
