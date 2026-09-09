/**
 Generated from your schema files
 Manual changes will be lost!
 > harper dev .
 */
import type { Table } from 'harper';
import type { build_the_web_Badge, build_the_web_CodeSubmission, build_the_web_CodingChallenge, build_the_web_Course, build_the_web_Enrollment, build_the_web_Lesson, build_the_web_LessonProgress, build_the_web_Module, build_the_web_QuizQuestion, build_the_web_QuizSubmission, build_the_web_User, build_the_web_UserActivity, build_the_web_UserBadge, Address, Badge, Character, ClientBillingInfo, CodeSubmission, CodingChallenge, Course, DungeonRun, Enrollment, InventoryItem, Invoice, InvoiceItem, Leaderboard, Lesson, LessonProgress, Module, Player, QuizQuestion, QuizSubmission, Todo, User, UserActivity, UserBadge, harperfast_vite_vite_build_info, mission_control_AppSetting, mission_control_CalendarEvent, mission_control_ChatMessage, mission_control_Content, mission_control_CrewAgent, mission_control_DriveFile, mission_control_Heartbeat, mission_control_JobRun, mission_control_MemoryEntry, mission_control_Project, mission_control_ResearchResult, mission_control_ScheduledJob, mission_control_WorkItem, oauth_csrf_token, oauth_harper_oauth_mcp_client, oauth_harper_oauth_mcp_key, oauth_mcp_assertion_jti, oauth_mcp_auth_code, oauth_mcp_refresh_family } from './types.ts';

declare module 'harper' {
	export const tables: {
		Address: { new(...args: any[]): Table<Address> };
		Badge: { new(...args: any[]): Table<Badge> };
		Character: { new(...args: any[]): Table<Character> };
		ClientBillingInfo: { new(...args: any[]): Table<ClientBillingInfo> };
		CodeSubmission: { new(...args: any[]): Table<CodeSubmission> };
		CodingChallenge: { new(...args: any[]): Table<CodingChallenge> };
		Course: { new(...args: any[]): Table<Course> };
		DungeonRun: { new(...args: any[]): Table<DungeonRun> };
		Enrollment: { new(...args: any[]): Table<Enrollment> };
		InventoryItem: { new(...args: any[]): Table<InventoryItem> };
		Invoice: { new(...args: any[]): Table<Invoice> };
		InvoiceItem: { new(...args: any[]): Table<InvoiceItem> };
		Leaderboard: { new(...args: any[]): Table<Leaderboard> };
		Lesson: { new(...args: any[]): Table<Lesson> };
		LessonProgress: { new(...args: any[]): Table<LessonProgress> };
		Module: { new(...args: any[]): Table<Module> };
		Player: { new(...args: any[]): Table<Player> };
		QuizQuestion: { new(...args: any[]): Table<QuizQuestion> };
		QuizSubmission: { new(...args: any[]): Table<QuizSubmission> };
		Todo: { new(...args: any[]): Table<Todo> };
		User: { new(...args: any[]): Table<User> };
		UserActivity: { new(...args: any[]): Table<UserActivity> };
		UserBadge: { new(...args: any[]): Table<UserBadge> };
	};

	export const databases: {
		build_the_web: {
			Badge: { new(...args: any[]): Table<build_the_web_Badge> };
			CodeSubmission: { new(...args: any[]): Table<build_the_web_CodeSubmission> };
			CodingChallenge: { new(...args: any[]): Table<build_the_web_CodingChallenge> };
			Course: { new(...args: any[]): Table<build_the_web_Course> };
			Enrollment: { new(...args: any[]): Table<build_the_web_Enrollment> };
			Lesson: { new(...args: any[]): Table<build_the_web_Lesson> };
			LessonProgress: { new(...args: any[]): Table<build_the_web_LessonProgress> };
			Module: { new(...args: any[]): Table<build_the_web_Module> };
			QuizQuestion: { new(...args: any[]): Table<build_the_web_QuizQuestion> };
			QuizSubmission: { new(...args: any[]): Table<build_the_web_QuizSubmission> };
			User: { new(...args: any[]): Table<build_the_web_User> };
			UserActivity: { new(...args: any[]): Table<build_the_web_UserActivity> };
			UserBadge: { new(...args: any[]): Table<build_the_web_UserBadge> };
		};
		data: {
			Address: { new(...args: any[]): Table<Address> };
			Badge: { new(...args: any[]): Table<Badge> };
			Character: { new(...args: any[]): Table<Character> };
			ClientBillingInfo: { new(...args: any[]): Table<ClientBillingInfo> };
			CodeSubmission: { new(...args: any[]): Table<CodeSubmission> };
			CodingChallenge: { new(...args: any[]): Table<CodingChallenge> };
			Course: { new(...args: any[]): Table<Course> };
			DungeonRun: { new(...args: any[]): Table<DungeonRun> };
			Enrollment: { new(...args: any[]): Table<Enrollment> };
			InventoryItem: { new(...args: any[]): Table<InventoryItem> };
			Invoice: { new(...args: any[]): Table<Invoice> };
			InvoiceItem: { new(...args: any[]): Table<InvoiceItem> };
			Leaderboard: { new(...args: any[]): Table<Leaderboard> };
			Lesson: { new(...args: any[]): Table<Lesson> };
			LessonProgress: { new(...args: any[]): Table<LessonProgress> };
			Module: { new(...args: any[]): Table<Module> };
			Player: { new(...args: any[]): Table<Player> };
			QuizQuestion: { new(...args: any[]): Table<QuizQuestion> };
			QuizSubmission: { new(...args: any[]): Table<QuizSubmission> };
			Todo: { new(...args: any[]): Table<Todo> };
			User: { new(...args: any[]): Table<User> };
			UserActivity: { new(...args: any[]): Table<UserActivity> };
			UserBadge: { new(...args: any[]): Table<UserBadge> };
		};
		harperfast_vite: {
			vite_build_info: { new(...args: any[]): Table<harperfast_vite_vite_build_info> };
		};
		mission_control: {
			AppSetting: { new(...args: any[]): Table<mission_control_AppSetting> };
			CalendarEvent: { new(...args: any[]): Table<mission_control_CalendarEvent> };
			ChatMessage: { new(...args: any[]): Table<mission_control_ChatMessage> };
			Content: { new(...args: any[]): Table<mission_control_Content> };
			CrewAgent: { new(...args: any[]): Table<mission_control_CrewAgent> };
			DriveFile: { new(...args: any[]): Table<mission_control_DriveFile> };
			Heartbeat: { new(...args: any[]): Table<mission_control_Heartbeat> };
			JobRun: { new(...args: any[]): Table<mission_control_JobRun> };
			MemoryEntry: { new(...args: any[]): Table<mission_control_MemoryEntry> };
			Project: { new(...args: any[]): Table<mission_control_Project> };
			ResearchResults: { new(...args: any[]): Table<mission_control_ResearchResult> };
			ScheduledJob: { new(...args: any[]): Table<mission_control_ScheduledJob> };
			WorkItem: { new(...args: any[]): Table<mission_control_WorkItem> };
		};
		oauth: {
			csrf_tokens: { new(...args: any[]): Table<oauth_csrf_token> };
			harper_oauth_mcp_clients: { new(...args: any[]): Table<oauth_harper_oauth_mcp_client> };
			harper_oauth_mcp_keys: { new(...args: any[]): Table<oauth_harper_oauth_mcp_key> };
			mcp_assertion_jtis: { new(...args: any[]): Table<oauth_mcp_assertion_jti> };
			mcp_auth_codes: { new(...args: any[]): Table<oauth_mcp_auth_code> };
			mcp_refresh_families: { new(...args: any[]): Table<oauth_mcp_refresh_family> };
		};
	};
}
