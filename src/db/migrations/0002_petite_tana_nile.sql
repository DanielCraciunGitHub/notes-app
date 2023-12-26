CREATE TABLE `notes` (
	`id` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`body` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`deleted` boolean DEFAULT false,
	CONSTRAINT `notes_id` PRIMARY KEY(`id`)
);
