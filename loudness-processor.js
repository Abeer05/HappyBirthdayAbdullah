class loudnessProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super(options);
    this.port.onmessage = () => this.handleMessage();
    this.previousRMS = 0;
    this.threshold = 0.001;
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    let sum = 0;

    for (let i = 0; i < input[0].length; ++i) {
      sum += input[0][i] * input[0][i];
    }

    const rms = Math.sqrt(sum / input[0].length);

    if (rms > this.threshold && this.previousRMS <= this.threshold) {
      this.port.postMessage('blowing');
    }

    this.previousRMS = rms;

    return true;
  }
}

registerProcessor('loudness-processor', loudnessProcessor);