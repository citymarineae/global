const standardMarkup = `<img src="1.jpg" data-cue="fadeIn" alt="" />
<img src="2.jpg" data-cue="fadeIn" alt="" />
<img src="3.jpg" data-cue="fadeIn" alt="" />
`;

const parentWrapMarkup = `<div>
  <img src="1.jpg" alt="" />
  ...
  <img src="3.jpg" alt="" />
</div>
`;

const groupWrapMarkup = `<div>
  <img src="1.jpg" alt="" />
  ...
  <img src="3.jpg" alt="" />
</div>
`;

const dataDurationMarkup = `<div>
  <img src="1.jpg" alt="" />
  <img src="2.jpg" data-duration="500" alt="" />
  <img src="3.jpg" data-duration="500" alt="" />
</div>
`;

const dataIntervalMarkup = `<div data-interval="-200">
  <img src="1.jpg" alt="" />
  <img src="2.jpg" data-interval="1000" alt="" />
  <img src="3.jpg" data-interval="-0.2" alt="" />
</div>
`;

const dataDelayMarkup = `<div data-delay="1000">
  <img src="1.jpg" alt="" />
  <img src="2.jpg" data-delay="2000" alt="" />
  <img src="3.jpg" alt="" />
</div>
`;

export { standardMarkup, parentWrapMarkup, groupWrapMarkup, dataDelayMarkup, dataDurationMarkup, dataIntervalMarkup };
