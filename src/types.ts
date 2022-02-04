export type Emote = {
	id: string;
	code: string;
	imageType: string;
	userId: string;
}

export type Badge = {
	id: string;
	name: string;
	displayName: string;
	providerId: number;
	badge: {
		description: string;
		svg: string;
	}
}

export type ChannelEmotes = {
	id: string;
	bots: unknown[];
	avatar: string;
	channelEmotes: Emote[];
	sharedEmotes: Emote[];
}

export type FFZRoom = {
	room: {
		_id: number;
		twitch_id: number;
		youtube_id?: string;
		id: string;
		is_group: boolean;
		display_name: string;
		set: number;
	},
	sets: Record<number, {
		id: number;
		_type: number;
		icon?: string;
		title: string;
		css?: unknown;
		emoticons: {
			id: number;
			name: string;
			height: number;
			width: number;
			public: boolean;
			hidden: boolean;
			modifier: boolean;
			offset?: unknown;
			margins?: unknown;
			css?: unknown;
			owner: {
				_id: number;
				name: string;
				display_name: string;
			};
			urls: Record<number, string>;
			status: number;
			usage_count: number;
			created_at: Date;
			last_updated: Date;
		}[]
	}>
}