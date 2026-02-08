export const AUDIO_PREF_KEY = 'kenny-audio-enabled';
export const AUDIO_PREF_UPDATED_EVENT = 'kenny-audio-preference-updated';

export function readAudioEnabledPreference(defaultValue = false): boolean {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  const stored = window.localStorage.getItem(AUDIO_PREF_KEY);
  if (stored === null) {
    return defaultValue;
  }

  return stored === 'true';
}

export function writeAudioEnabledPreference(enabled: boolean): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(AUDIO_PREF_KEY, String(enabled));
  window.dispatchEvent(new Event(AUDIO_PREF_UPDATED_EVENT));
}
