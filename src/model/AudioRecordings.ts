export interface AudioRecording {
  name: string;
  url: string;
}

const AudioRecordings: AudioRecording[] = [
  {
    name: "Test Recording 1",
    url: "resources/test-recording-1.ogg"
  },
  {
    name: "Test Recording 2",
    url: "resources/test-recording-2.ogg"
  }
];

export default AudioRecordings;