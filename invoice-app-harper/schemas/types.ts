/**
 Generated from HarperDB schema
 Manual changes will be lost!
 > harper dev .
 */
export interface build_the_web_Badge {
	id: string;
	description: string;
	iconUrl: string;
	name: string;
	triggerTargetId?: string;
	triggerType: string;
}

export type build_the_web_NewBadge = Omit<build_the_web_Badge, 'id'>;
export type { build_the_web_Badge as build_the_web_BadgeRecord };
export type build_the_web_BadgeRecords = build_the_web_Badge[];
export type build_the_web_NewBadgeRecord = Omit<build_the_web_Badge, 'id'>;

export interface build_the_web_CodeSubmission {
	id: string;
	exerciseId?: string;
	lessonId: string;
	passed: boolean;
	studentId: string;
	submittedAt?: number;
	submittedCode: string;
	testResultsJson?: string;
}

export type build_the_web_NewCodeSubmission = Omit<build_the_web_CodeSubmission, 'id'>;
export type { build_the_web_CodeSubmission as build_the_web_CodeSubmissionRecord };
export type build_the_web_CodeSubmissionRecords = build_the_web_CodeSubmission[];
export type build_the_web_NewCodeSubmissionRecord = Omit<build_the_web_CodeSubmission, 'id'>;

export interface build_the_web_CodingChallenge {
	id: string;
	exercisesJson: string;
	instructions?: string;
	language: string;
	lessonId: string;
	projectFilesJson?: string;
}

export type build_the_web_NewCodingChallenge = Omit<build_the_web_CodingChallenge, 'id'>;
export type { build_the_web_CodingChallenge as build_the_web_CodingChallengeRecord };
export type build_the_web_CodingChallengeRecords = build_the_web_CodingChallenge[];
export type build_the_web_NewCodingChallengeRecord = Omit<build_the_web_CodingChallenge, 'id'>;

export interface build_the_web_Course {
	id: string;
	accent?: string;
	coverGlyph?: string;
	coverNumber?: string;
	createdAt?: number;
	description?: string;
	estimatedDuration?: string;
	instructorId: string;
	isPremium?: boolean;
	level: string;
	status: string;
	title: string;
	track: string;
	updatedAt?: number;
}

export type build_the_web_NewCourse = Omit<build_the_web_Course, 'id'>;
export type { build_the_web_Course as build_the_web_CourseRecord };
export type build_the_web_CourseRecords = build_the_web_Course[];
export type build_the_web_NewCourseRecord = Omit<build_the_web_Course, 'id'>;

export interface build_the_web_Enrollment {
	id: string;
	completed?: boolean;
	courseId: string;
	enrolledAt?: number;
	lastAccessedLessonId?: string;
	progressPercent?: number;
	studentId: string;
}

export type build_the_web_NewEnrollment = Omit<build_the_web_Enrollment, 'id'>;
export type { build_the_web_Enrollment as build_the_web_EnrollmentRecord };
export type build_the_web_EnrollmentRecords = build_the_web_Enrollment[];
export type build_the_web_NewEnrollmentRecord = Omit<build_the_web_Enrollment, 'id'>;

export interface build_the_web_Lesson {
	id: string;
	contentBody?: string;
	courseId: string;
	isFreePreview?: boolean;
	keyConceptsJson?: string;
	lead?: string;
	moduleId: string;
	order: number;
	quizPassingScore?: number;
	sandboxFilename?: string;
	sandboxLanguage?: string;
	sandboxStarterCode?: string;
	title: string;
	videoDurationFormatted?: string;
	videoDurationSeconds?: number;
	vimeoId?: string;
}

export type build_the_web_NewLesson = Omit<build_the_web_Lesson, 'id'>;
export type { build_the_web_Lesson as build_the_web_LessonRecord };
export type build_the_web_LessonRecords = build_the_web_Lesson[];
export type build_the_web_NewLessonRecord = Omit<build_the_web_Lesson, 'id'>;

export interface build_the_web_LessonProgress {
	id: string;
	completedExercisesJson?: string;
	courseId: string;
	lastAccessed?: number;
	lessonId: string;
	status: string;
	studentId: string;
	videoSecondsWatched?: number;
}

export type build_the_web_NewLessonProgress = Omit<build_the_web_LessonProgress, 'id'>;
export type { build_the_web_LessonProgress as build_the_web_LessonProgressRecord };
export type build_the_web_LessonProgressRecords = build_the_web_LessonProgress[];
export type build_the_web_NewLessonProgressRecord = Omit<build_the_web_LessonProgress, 'id'>;

export interface build_the_web_Module {
	id: string;
	courseId: string;
	description?: string;
	order: number;
	title: string;
}

export type build_the_web_NewModule = Omit<build_the_web_Module, 'id'>;
export type { build_the_web_Module as build_the_web_ModuleRecord };
export type build_the_web_ModuleRecords = build_the_web_Module[];
export type build_the_web_NewModuleRecord = Omit<build_the_web_Module, 'id'>;

export interface build_the_web_QuizQuestion {
	id: string;
	correctOptionIndex: number;
	explanation?: string;
	lessonId: string;
	optionsJson: string;
	order?: number;
	questionText: string;
}

export type build_the_web_NewQuizQuestion = Omit<build_the_web_QuizQuestion, 'id'>;
export type { build_the_web_QuizQuestion as build_the_web_QuizQuestionRecord };
export type build_the_web_QuizQuestionRecords = build_the_web_QuizQuestion[];
export type build_the_web_NewQuizQuestionRecord = Omit<build_the_web_QuizQuestion, 'id'>;

export interface build_the_web_QuizSubmission {
	id: string;
	answersJson?: string;
	lessonId: string;
	passed: boolean;
	score: number;
	studentId: string;
	submittedAt?: number;
}

export type build_the_web_NewQuizSubmission = Omit<build_the_web_QuizSubmission, 'id'>;
export type { build_the_web_QuizSubmission as build_the_web_QuizSubmissionRecord };
export type build_the_web_QuizSubmissionRecords = build_the_web_QuizSubmission[];
export type build_the_web_NewQuizSubmissionRecord = Omit<build_the_web_QuizSubmission, 'id'>;

export interface build_the_web_User {
	id: string;
	avatarUrl?: string;
	bestStreakDays?: number;
	createdAt?: number;
	email: string;
	fullName: string;
	level?: number;
	points?: number;
	role: string;
	streakDays?: number;
	stripeCustomerId?: string;
	subscriptionRenewsAt?: number;
	subscriptionStatus: string;
	subscriptionTier?: string;
	updatedAt?: number;
}

export type build_the_web_NewUser = Omit<build_the_web_User, 'id'>;
export type { build_the_web_User as build_the_web_UserRecord };
export type build_the_web_UserRecords = build_the_web_User[];
export type build_the_web_NewUserRecord = Omit<build_the_web_User, 'id'>;

export interface build_the_web_UserActivity {
	id: string;
	activityType: string;
	courseTitle?: string;
	date: string;
	minutesSpent: number;
	studentId: string;
	timestamp?: number;
	title: string;
}

export type build_the_web_NewUserActivity = Omit<build_the_web_UserActivity, 'id'>;
export type { build_the_web_UserActivity as build_the_web_UserActivityRecord };
export type build_the_web_UserActivityRecords = build_the_web_UserActivity[];
export type build_the_web_NewUserActivityRecord = Omit<build_the_web_UserActivity, 'id'>;

export interface build_the_web_UserBadge {
	id: string;
	badgeId: string;
	earnedAt?: number;
	studentId: string;
}

export type build_the_web_NewUserBadge = Omit<build_the_web_UserBadge, 'id'>;
export type { build_the_web_UserBadge as build_the_web_UserBadgeRecord };
export type build_the_web_UserBadgeRecords = build_the_web_UserBadge[];
export type build_the_web_NewUserBadgeRecord = Omit<build_the_web_UserBadge, 'id'>;

export interface Address {
	id: string;
	street?: string;
	city?: string;
	postCode?: string;
	country?: string;
}

export type NewAddress = Omit<Address, 'id'>;
export type { Address as AddressRecord };
export type AddressRecords = Address[];
export type NewAddressRecord = Omit<Address, 'id'>;

export interface Badge {
	id: string;
	description: string;
	iconUrl: string;
	name: string;
	triggerTargetId?: string;
	triggerType: string;
}

export type NewBadge = Omit<Badge, 'id'>;
export type { Badge as BadgeRecord };
export type BadgeRecords = Badge[];
export type NewBadgeRecord = Omit<Badge, 'id'>;

export interface Character {
	attack: number;
	currentHp: number;
	currentMp: number;
	defense: number;
	heroClass: string;
	id: string;
	level: number;
	maxHp: number;
	maxMp: number;
	name: string;
	playerId?: string;
	xp: number;
}

export type { Character as CharacterRecord };
export type CharacterRecords = Character[];

export interface ClientBillingInfo {
	id: string;
	clientAddressLine1?: string;
	clientAddressLine2?: string;
	clientCity?: string;
	clientCompanyName?: string;
	clientEmail?: string;
	clientName?: string;
	clientPhoneNumber?: string;
	clientState?: string;
	clientZipCode?: string;
	userEmail?: string;
}

export type NewClientBillingInfo = Omit<ClientBillingInfo, 'id'>;
export type { ClientBillingInfo as ClientBillingInfoRecord };
export type ClientBillingInfoRecords = ClientBillingInfo[];
export type NewClientBillingInfoRecord = Omit<ClientBillingInfo, 'id'>;

export interface CodeSubmission {
	id: string;
	exerciseId?: string;
	lessonId: string;
	passed: boolean;
	studentId: string;
	submittedAt?: number;
	submittedCode: string;
	testResultsJson?: string;
}

export type NewCodeSubmission = Omit<CodeSubmission, 'id'>;
export type { CodeSubmission as CodeSubmissionRecord };
export type CodeSubmissionRecords = CodeSubmission[];
export type NewCodeSubmissionRecord = Omit<CodeSubmission, 'id'>;

export interface CodingChallenge {
	id: string;
	exercisesJson: string;
	instructions?: string;
	language: string;
	lessonId: string;
	projectFilesJson?: string;
}

export type NewCodingChallenge = Omit<CodingChallenge, 'id'>;
export type { CodingChallenge as CodingChallengeRecord };
export type CodingChallengeRecords = CodingChallenge[];
export type NewCodingChallengeRecord = Omit<CodingChallenge, 'id'>;

export interface Course {
	id: string;
	accent?: string;
	coverGlyph?: string;
	coverNumber?: string;
	createdAt?: number;
	description?: string;
	estimatedDuration?: string;
	instructorId: string;
	isPremium?: boolean;
	level: string;
	status: string;
	title: string;
	track: string;
	updatedAt?: number;
}

export type NewCourse = Omit<Course, 'id'>;
export type { Course as CourseRecord };
export type CourseRecords = Course[];
export type NewCourseRecord = Omit<Course, 'id'>;

export interface DungeonRun {
	createdAt?: number;
	floor: number;
	heroClass: string;
	id: string;
	monstersSlain: number;
	playerId?: string;
	score: number;
	seed: number;
	status: string;
}

export type { DungeonRun as DungeonRunRecord };
export type DungeonRunRecords = DungeonRun[];

export interface Enrollment {
	id: string;
	completed?: boolean;
	courseId: string;
	enrolledAt?: number;
	lastAccessedLessonId?: string;
	progressPercent?: number;
	studentId: string;
}

export type NewEnrollment = Omit<Enrollment, 'id'>;
export type { Enrollment as EnrollmentRecord };
export type EnrollmentRecords = Enrollment[];
export type NewEnrollmentRecord = Omit<Enrollment, 'id'>;

export interface InventoryItem {
	characterId?: string;
	id: string;
	isEquipped?: boolean;
	itemType: string;
	name: string;
	rarity: string;
	statBonus?: string;
}

export type { InventoryItem as InventoryItemRecord };
export type InventoryItemRecords = InventoryItem[];

export interface Invoice {
	id: string;
	createdAt?: string;
	paymentDue?: string;
	description?: string;
	paymentTerms?: number;
	clientName?: string;
	clientEmail?: string;
	status?: string;
	senderAddress?: Address;
	clientAddress?: Address;
	items?: InvoiceItem[];
	total?: number;
}

export type NewInvoice = Omit<Invoice, 'id'>;
export type { Invoice as InvoiceRecord };
export type InvoiceRecords = Invoice[];
export type NewInvoiceRecord = Omit<Invoice, 'id'>;

export interface InvoiceItem {
	id: string;
	name?: string;
	quantity?: number;
	price?: number;
	total?: number;
}

export type NewInvoiceItem = Omit<InvoiceItem, 'id'>;
export type { InvoiceItem as InvoiceItemRecord };
export type InvoiceItemRecords = InvoiceItem[];
export type NewInvoiceItemRecord = Omit<InvoiceItem, 'id'>;

export interface Leaderboard {
	createdAt?: number;
	floorReached: number;
	heroClass: string;
	id: string;
	monstersSlain: number;
	playerName: string;
	score: number;
}

export type { Leaderboard as LeaderboardRecord };
export type LeaderboardRecords = Leaderboard[];

export interface Lesson {
	id: string;
	contentBody?: string;
	courseId: string;
	isFreePreview?: boolean;
	keyConceptsJson?: string;
	lead?: string;
	moduleId: string;
	order: number;
	sandboxFilename?: string;
	sandboxLanguage?: string;
	sandboxStarterCode?: string;
	title: string;
	videoDurationFormatted?: string;
	videoDurationSeconds?: number;
	vimeoId?: string;
}

export type NewLesson = Omit<Lesson, 'id'>;
export type { Lesson as LessonRecord };
export type LessonRecords = Lesson[];
export type NewLessonRecord = Omit<Lesson, 'id'>;

export interface LessonProgress {
	id: string;
	completedExercisesJson?: string;
	courseId: string;
	lastAccessed?: number;
	lessonId: string;
	status: string;
	studentId: string;
	videoSecondsWatched?: number;
}

export type NewLessonProgress = Omit<LessonProgress, 'id'>;
export type { LessonProgress as LessonProgressRecord };
export type LessonProgressRecords = LessonProgress[];
export type NewLessonProgressRecord = Omit<LessonProgress, 'id'>;

export interface Module {
	id: string;
	courseId: string;
	description?: string;
	order: number;
	title: string;
}

export type NewModule = Omit<Module, 'id'>;
export type { Module as ModuleRecord };
export type ModuleRecords = Module[];
export type NewModuleRecord = Omit<Module, 'id'>;

export interface Player {
	createdAt?: number;
	highScore?: number;
	id: string;
	totalRuns?: number;
	username: string;
}

export type { Player as PlayerRecord };
export type PlayerRecords = Player[];

export interface QuizQuestion {
	id: string;
	correctOptionIndex: number;
	explanation?: string;
	lessonId: string;
	optionsJson: string;
	order?: number;
	questionText: string;
}

export type NewQuizQuestion = Omit<QuizQuestion, 'id'>;
export type { QuizQuestion as QuizQuestionRecord };
export type QuizQuestionRecords = QuizQuestion[];
export type NewQuizQuestionRecord = Omit<QuizQuestion, 'id'>;

export interface QuizSubmission {
	id: string;
	answersJson?: string;
	lessonId: string;
	passed: boolean;
	score: number;
	studentId: string;
	submittedAt?: number;
}

export type NewQuizSubmission = Omit<QuizSubmission, 'id'>;
export type { QuizSubmission as QuizSubmissionRecord };
export type QuizSubmissionRecords = QuizSubmission[];
export type NewQuizSubmissionRecord = Omit<QuizSubmission, 'id'>;

export interface Todo {
	id: string;
	completed?: boolean;
	createdAt?: string;
	description?: string;
	order?: number;
	title: string;
	updatedAt?: string;
}

export type NewTodo = Omit<Todo, 'id'>;
export type { Todo as TodoRecord };
export type TodoRecords = Todo[];
export type NewTodoRecord = Omit<Todo, 'id'>;

export interface User {
	id: string;
	avatarUrl?: string;
	bestStreakDays?: number;
	createdAt?: number;
	email: string;
	fullName: string;
	level?: number;
	points?: number;
	role: string;
	streakDays?: number;
	stripeCustomerId?: string;
	subscriptionRenewsAt?: number;
	subscriptionStatus: string;
	subscriptionTier?: string;
	updatedAt?: number;
}

export type NewUser = Omit<User, 'id'>;
export type { User as UserRecord };
export type UserRecords = User[];
export type NewUserRecord = Omit<User, 'id'>;

export interface UserActivity {
	id: string;
	activityType: string;
	courseTitle?: string;
	date: string;
	minutesSpent: number;
	studentId: string;
	timestamp?: number;
	title: string;
}

export type NewUserActivity = Omit<UserActivity, 'id'>;
export type { UserActivity as UserActivityRecord };
export type UserActivityRecords = UserActivity[];
export type NewUserActivityRecord = Omit<UserActivity, 'id'>;

export interface UserBadge {
	id: string;
	badgeId: string;
	earnedAt?: number;
	studentId: string;
}

export type NewUserBadge = Omit<UserBadge, 'id'>;
export type { UserBadge as UserBadgeRecord };
export type UserBadgeRecords = UserBadge[];
export type NewUserBadgeRecord = Omit<UserBadge, 'id'>;

export interface harperfast_vite_vite_build_info {
	appName: string;
	status?: string;
}

export type harperfast_vite_Newvite_build_info = Omit<harperfast_vite_vite_build_info, 'appName'>;
export type { harperfast_vite_vite_build_info as harperfast_vite_vite_build_infoRecord };
export type harperfast_vite_vite_build_infoRecords = harperfast_vite_vite_build_info[];
export type harperfast_vite_Newvite_build_infoRecord = Omit<harperfast_vite_vite_build_info, 'appName'>;

export interface mission_control_AppSetting {
	id: string;
	updatedAt?: number;
	value?: string;
}

export type mission_control_NewAppSetting = Omit<mission_control_AppSetting, 'id'>;
export type { mission_control_AppSetting as mission_control_AppSettingRecord };
export type mission_control_AppSettingRecords = mission_control_AppSetting[];
export type mission_control_NewAppSettingRecord = Omit<mission_control_AppSetting, 'id'>;

export interface mission_control_CalendarEvent {
	id: string;
	allDay?: boolean;
	calendarId?: string;
	description?: string;
	endAt?: number;
	htmlLink?: string;
	location?: string;
	organizer?: string;
	startAt?: number;
	status?: string;
	summary?: string;
	updatedAt?: number;
}

export type mission_control_NewCalendarEvent = Omit<mission_control_CalendarEvent, 'id'>;
export type { mission_control_CalendarEvent as mission_control_CalendarEventRecord };
export type mission_control_CalendarEventRecords = mission_control_CalendarEvent[];
export type mission_control_NewCalendarEventRecord = Omit<mission_control_CalendarEvent, 'id'>;

export interface mission_control_ChatMessage {
	id: string;
	agentId?: string;
	at?: number;
	content?: string;
	costUsd?: number;
	error?: string;
	inputTokens?: number;
	model?: string;
	outputTokens?: number;
	role?: string;
}

export type mission_control_NewChatMessage = Omit<mission_control_ChatMessage, 'id'>;
export type { mission_control_ChatMessage as mission_control_ChatMessageRecord };
export type mission_control_ChatMessageRecords = mission_control_ChatMessage[];
export type mission_control_NewChatMessageRecord = Omit<mission_control_ChatMessage, 'id'>;

export interface mission_control_Content {
	id: string;
	aiScore?: number;
	aiScoreDetail?: string;
	aiScoreMethod?: string;
	aiScoredAt?: number;
	authorAgentId?: string;
	body?: string;
	costUsd?: number;
	createdAt?: number;
	path?: string;
	projectId?: string;
	status?: string;
	title?: string;
	type?: string;
	updatedAt?: number;
	url?: string;
	words?: number;
}

export type mission_control_NewContent = Omit<mission_control_Content, 'id'>;
export type { mission_control_Content as mission_control_ContentRecord };
export type mission_control_ContentRecords = mission_control_Content[];
export type mission_control_NewContentRecord = Omit<mission_control_Content, 'id'>;

export interface mission_control_CrewAgent {
	id: string;
	autonomyTier?: string;
	color?: string;
	currentActivity?: string;
	description?: string;
	initials?: string;
	ink?: string;
	isOrchestrator?: boolean;
	lastHeartbeat?: number;
	model?: string;
	name?: string;
	role?: string;
	sortOrder?: number;
	status?: string;
	systemPrompt?: string;
}

export type mission_control_NewCrewAgent = Omit<mission_control_CrewAgent, 'id'>;
export type { mission_control_CrewAgent as mission_control_CrewAgentRecord };
export type mission_control_CrewAgentRecords = mission_control_CrewAgent[];
export type mission_control_NewCrewAgentRecord = Omit<mission_control_CrewAgent, 'id'>;

export interface mission_control_DriveFile {
	id: string;
	folderId?: string;
	iconLink?: string;
	mimeType?: string;
	modifiedAt?: number;
	name?: string;
	owners?: string[];
	size?: number;
	sourceRecordId?: string;
	syncedAt?: number;
	webViewLink?: string;
}

export type mission_control_NewDriveFile = Omit<mission_control_DriveFile, 'id'>;
export type { mission_control_DriveFile as mission_control_DriveFileRecord };
export type mission_control_DriveFileRecords = mission_control_DriveFile[];
export type mission_control_NewDriveFileRecord = Omit<mission_control_DriveFile, 'id'>;

export interface mission_control_Heartbeat {
	id: string;
	agentId?: string;
	at?: number;
	level?: string;
	message?: string;
	workItemId?: string;
}

export type mission_control_NewHeartbeat = Omit<mission_control_Heartbeat, 'id'>;
export type { mission_control_Heartbeat as mission_control_HeartbeatRecord };
export type mission_control_HeartbeatRecords = mission_control_Heartbeat[];
export type mission_control_NewHeartbeatRecord = Omit<mission_control_Heartbeat, 'id'>;

export interface mission_control_JobRun {
	id: string;
	at?: number;
	jobId?: string;
	note?: string;
	ok?: boolean;
}

export type mission_control_NewJobRun = Omit<mission_control_JobRun, 'id'>;
export type { mission_control_JobRun as mission_control_JobRunRecord };
export type mission_control_JobRunRecords = mission_control_JobRun[];
export type mission_control_NewJobRunRecord = Omit<mission_control_JobRun, 'id'>;

export interface mission_control_MemoryEntry {
	id: string;
	agentId?: string;
	at?: number;
	content?: string;
	date?: string;
	embedding?: number[];
	projectId?: string;
	sourceEntryId?: string;
	sourceFile?: string;
	type?: string;
	workItemId?: string;
}

export type mission_control_NewMemoryEntry = Omit<mission_control_MemoryEntry, 'id'>;
export type { mission_control_MemoryEntry as mission_control_MemoryEntryRecord };
export type mission_control_MemoryEntryRecords = mission_control_MemoryEntry[];
export type mission_control_NewMemoryEntryRecord = Omit<mission_control_MemoryEntry, 'id'>;

export interface mission_control_Project {
	id: string;
	agentMap?: string;
	buildCostUsd?: number;
	buildRuns?: number;
	color?: string;
	createdAt?: number;
	description?: string;
	githubIssuesClosed?: number;
	githubIssuesTotal?: number;
	githubOpenPrs?: number;
	githubOwner?: string;
	githubProjectNumber?: number;
	githubRepo?: string;
	lastSyncedAt?: number;
	name?: string;
	progress?: number;
	status?: string;
	template?: string;
	todayFocus?: string;
}

export type mission_control_NewProject = Omit<mission_control_Project, 'id'>;
export type { mission_control_Project as mission_control_ProjectRecord };
export type mission_control_ProjectRecords = mission_control_Project[];
export type mission_control_NewProjectRecord = Omit<mission_control_Project, 'id'>;

export interface mission_control_ResearchResult {
	id: string;
	authorAgentId?: string;
	body?: string;
	costUsd?: number;
	createdAt?: number;
	path?: string;
	projectId?: string;
	status?: string;
	title?: string;
	type?: string;
	updatedAt?: number;
	url?: string;
	words?: number;
}

export type mission_control_NewResearchResult = Omit<mission_control_ResearchResult, 'id'>;
export type mission_control_ResearchResults = mission_control_ResearchResult[];
export type { mission_control_ResearchResult as mission_control_ResearchResultRecord };
export type mission_control_ResearchResultRecords = mission_control_ResearchResult[];
export type mission_control_NewResearchResultRecord = Omit<mission_control_ResearchResult, 'id'>;

export interface mission_control_ScheduledJob {
	id: string;
	cronExpr?: string;
	declaredAt?: number;
	description?: string;
	enabled?: boolean;
	lastRunAt?: number;
	name?: string;
	ownerId?: string;
}

export type mission_control_NewScheduledJob = Omit<mission_control_ScheduledJob, 'id'>;
export type { mission_control_ScheduledJob as mission_control_ScheduledJobRecord };
export type mission_control_ScheduledJobRecords = mission_control_ScheduledJob[];
export type mission_control_NewScheduledJobRecord = Omit<mission_control_ScheduledJob, 'id'>;

export interface mission_control_WorkItem {
	id: string;
	completedAt?: number;
	context?: string;
	createdAt?: number;
	githubAssignees?: string[];
	githubContentType?: string;
	githubItemId?: string;
	githubLabels?: string[];
	githubNumber?: number;
	githubRepository?: string;
	githubState?: string;
	githubStatus?: string;
	githubUpdatedAt?: number;
	hidden?: boolean;
	links?: string[];
	meta?: string;
	ownerId?: string;
	priority?: number;
	projectId?: string;
	sourceAgentId?: string;
	status?: string;
	syncNote?: string;
	title?: string;
	type?: string;
	updatedAt?: number;
}

export type mission_control_NewWorkItem = Omit<mission_control_WorkItem, 'id'>;
export type { mission_control_WorkItem as mission_control_WorkItemRecord };
export type mission_control_WorkItemRecords = mission_control_WorkItem[];
export type mission_control_NewWorkItemRecord = Omit<mission_control_WorkItem, 'id'>;

export interface oauth_csrf_token {
	token_id: string;
	created_at?: number;
	data?: string;
}

export type oauth_Newcsrf_token = Omit<oauth_csrf_token, 'token_id'>;
export type oauth_csrf_tokens = oauth_csrf_token[];
export type { oauth_csrf_token as oauth_csrf_tokenRecord };
export type oauth_csrf_tokenRecords = oauth_csrf_token[];
export type oauth_Newcsrf_tokenRecord = Omit<oauth_csrf_token, 'token_id'>;

export interface oauth_harper_oauth_mcp_client {
	client_id: string;
	application_type?: string;
	client_id_issued_at?: number;
	client_name?: string;
	client_secret?: string;
	client_secret_expires_at?: number;
	client_uri?: string;
	contacts?: string;
	grant_types?: string;
	logo_uri?: string;
	redirect_uris?: string;
	response_types?: string;
	scope?: string;
	software_id?: string;
	software_version?: string;
	token_endpoint_auth_method?: string;
}

export type oauth_Newharper_oauth_mcp_client = Omit<oauth_harper_oauth_mcp_client, 'client_id'>;
export type oauth_harper_oauth_mcp_clients = oauth_harper_oauth_mcp_client[];
export type { oauth_harper_oauth_mcp_client as oauth_harper_oauth_mcp_clientRecord };
export type oauth_harper_oauth_mcp_clientRecords = oauth_harper_oauth_mcp_client[];
export type oauth_Newharper_oauth_mcp_clientRecord = Omit<oauth_harper_oauth_mcp_client, 'client_id'>;

export interface oauth_harper_oauth_mcp_key {
	kid: string;
	alg?: string;
	created_at?: number;
	private_key_pem?: string;
	public_key_pem?: string;
}

export type oauth_Newharper_oauth_mcp_key = Omit<oauth_harper_oauth_mcp_key, 'kid'>;
export type oauth_harper_oauth_mcp_keys = oauth_harper_oauth_mcp_key[];
export type { oauth_harper_oauth_mcp_key as oauth_harper_oauth_mcp_keyRecord };
export type oauth_harper_oauth_mcp_keyRecords = oauth_harper_oauth_mcp_key[];
export type oauth_Newharper_oauth_mcp_keyRecord = Omit<oauth_harper_oauth_mcp_key, 'kid'>;

export interface oauth_mcp_assertion_jti {
	id: string;
	client_id?: string;
	created_at?: number;
}

export type oauth_Newmcp_assertion_jti = Omit<oauth_mcp_assertion_jti, 'id'>;
export type oauth_mcp_assertion_jtis = oauth_mcp_assertion_jti[];
export type { oauth_mcp_assertion_jti as oauth_mcp_assertion_jtiRecord };
export type oauth_mcp_assertion_jtiRecords = oauth_mcp_assertion_jti[];
export type oauth_Newmcp_assertion_jtiRecord = Omit<oauth_mcp_assertion_jti, 'id'>;

export interface oauth_mcp_auth_code {
	code: string;
	client_id?: string;
	code_challenge?: string;
	code_challenge_method?: string;
	created_at?: number;
	redirect_uri?: string;
	resource?: string;
	scope?: string;
	user?: string;
}

export type oauth_Newmcp_auth_code = Omit<oauth_mcp_auth_code, 'code'>;
export type oauth_mcp_auth_codes = oauth_mcp_auth_code[];
export type { oauth_mcp_auth_code as oauth_mcp_auth_codeRecord };
export type oauth_mcp_auth_codeRecords = oauth_mcp_auth_code[];
export type oauth_Newmcp_auth_codeRecord = Omit<oauth_mcp_auth_code, 'code'>;

export interface oauth_mcp_refresh_family {
	family_id: string;
	client_id?: string;
	created_at?: number;
	current_token_hash?: string;
	expires_at?: number;
	resource?: string;
	revoked?: boolean;
	scope?: string;
	user?: string;
}

export type oauth_Newmcp_refresh_family = Omit<oauth_mcp_refresh_family, 'family_id'>;
export type oauth_mcp_refresh_families = oauth_mcp_refresh_family[];
export type { oauth_mcp_refresh_family as oauth_mcp_refresh_familyRecord };
export type oauth_mcp_refresh_familyRecords = oauth_mcp_refresh_family[];
export type oauth_Newmcp_refresh_familyRecord = Omit<oauth_mcp_refresh_family, 'family_id'>;
