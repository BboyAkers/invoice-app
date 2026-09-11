import { useFlags } from "launchdarkly-react-client-sdk";

export function LaunchDarklyBanner() {
  const flags = useFlags();
  const testBanner = Boolean(flags?.testBanner ?? flags?.["test-banner"]);

  return (
    <div className="mb-6">
      {testBanner ? (
        <div className="p-4 rounded-[8px] bg-[#33D69F]/15 border border-[#33D69F] text-[#33D69F] flex items-center justify-between font-bold text-[14px] transition-all">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#33D69F] animate-pulse" />
            <span>LaunchDarkly test banner (flag is on)</span>
          </div>
          <a
            href="https://app.launchdarkly.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] underline hover:opacity-80"
          >
            View in LaunchDarkly
          </a>
        </div>
      ) : (
        <div className="p-4 rounded-[8px] bg-white dark:bg-[#1E2139] border border-[#DFE3FA] dark:border-[#252945] text-[#888EB0] dark:text-[#DFE3FA] flex items-center justify-between font-medium text-[14px] shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)] transition-all">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#888EB0] dark:bg-[#DFE3FA]" />
            <span>LaunchDarkly test banner (flag is off)</span>
          </div>
          <a
            href="https://app.launchdarkly.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] text-[#7C5DFA] underline hover:opacity-80"
          >
            View in LaunchDarkly
          </a>
        </div>
      )}
    </div>
  );
}
