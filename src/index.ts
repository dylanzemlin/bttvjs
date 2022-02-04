import axios from "axios";
import { Badge, ChannelEmotes, Emote, FFZRoom } from "./types";

class BttvClient {
	public readonly bttv: BttvApi;
	public readonly ffz: FFZApi;

	constructor() {
		this.bttv = new BttvApi();
		this.ffz = new FFZApi();
	}
}

class BaseApiClient {
	private _baseUri: string;

	constructor(baseUri: string) {
		this._baseUri = baseUri;
	}

	protected async request<T>(endpoint: string, method: "GET" | "DELETE" | "POST" | "PATCH" | "PUT"): Promise<T> {
		const response = await axios.request({
			url: `${this._baseUri}/${endpoint.replace(/^\/+/, "")}`,
			method
		});
		if (response.status !== 200) {
			throw new Error(`Received response code #${response.status}`);
		}

		return response.data as T;
	}
}

/**
 * Better Twitch TV API
 */
class BttvApi extends BaseApiClient {
	constructor() {
		super("https://api.betterttv.net");
	}

	/**
	 * Returns a list of global emotes
	 * @returns An array of emotes
	 * @throws An error if a non 200 code was returned
	 * @async
	 */
	async getGlobalEmotes(): Promise<Emote[]> {
		return this.request<Emote[]>("3/cached/emotes/global", "GET");
	}

	/**
	 * Returns a list of badges
	 * @returns An array of badges
	 * @throws An error if a non 200 code was returned
	 * @async
	 */
	async getBadges(): Promise<Badge[]> {
		return this.request<Badge[]>("3/cached/badges", "GET");
	}


	async getEmotes(channel_id: string): Promise<ChannelEmotes> {
		return this.request<ChannelEmotes>(`3/cached/users/twitch/${channel_id}`, "GET");
	}

	/**
	 * Returns a url string of the emote
	 * @param emote_id The emote id
	 * @param version The version of the emote (typically 1x, 2x or 3x)
	 */
	getEmoteUri(emote_id: string, version: string): string {
		return `https://cdn.betterttv.net/emote/${emote_id}/${version}`;
	}
}

/**
 * FFZ API
 */
class FFZApi extends BaseApiClient {
	constructor() {
		super("https://api.frankerfacez.com");
	}

	async getRoom(channel_id: string): Promise<FFZRoom> {
		return this.request<FFZRoom>(`v1/room/id/${channel_id}`, "GET");
	}

	getEmote(emote_id: number, version: number): string {
		return `https://cdn.frankerfacez.com/emote/${emote_id}/${version}`;
	}
}

const api = new BttvClient();
export default api;