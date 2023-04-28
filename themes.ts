/** @module themes */

import { Reporter } from "./reporter.ts";
import colors from "https://deno.land/x/console_colors@v0.0.2/mod.ts";

colors;

export const salmon = new Reporter({
	info: `${"info".blue.text_bold}: ${"$message".text_dim}`,
	warn: `${"warning".yellow.text_bold}: ${"$message".text_dim}}`,
	ready: `${"ready".green} ${"$message".text_dim}`,
	start: `${"start"} ${"$message".text_dim}`,
	success: `${"success".green.text_bold}: ${"$message".text_dim}`,
	error: {
		name: "$name".red.text_bold,
		message: "$message".text_dim,
	},
});

export const smoked = new Reporter({
	info: `${" info ".bg_blue.text_bold} ${"$message".blue}`,
	warn: `${" warning ".bg_yellow.text_bold} ${"$message".yellow}`,
	ready: `${" ready ".bg_green.text_bold} ${"$message".green}`,
	start: `${" start ".bg_green.text_bold} ${"$message".green}`,
	success: `${" success ".bg_green.text_bold} ${"$message".green}`,
	error: {
		name: " $name ".bg_red.text_bold,
		message: "$message".red,
	},
});
