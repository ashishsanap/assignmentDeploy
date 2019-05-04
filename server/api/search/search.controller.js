'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.nearBy = nearBy;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _googlemap = require('../../config/googlemap');

var _googlemap2 = _interopRequireDefault(_googlemap);

var _user = require('../register/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
function index(req, res) {
  _googlemap2.default.geocode({ address: req.params.placeName }).asPromise().then(response => {
    if (response && response.json && response.json.results) {
      const placeInfo = response.json.results;
      const dataArr = [];
      placeInfo.forEach(item => {
        const data = {
          placeAddress: item.formatted_address,
          placeId: item.place_id,
          location: item.geometry.location
        };
        dataArr.push(data);
      });
      _user2.default.findOneAndUpdate({ _id: _mongoose2.default.Types.ObjectId(req.user._id) }, { $push: { searchPlaces: { placeName: req.params.placeName,
            placeResult: dataArr,
            date: new Date() } } }).exec();
      return res.status(200).json({ success: true, message: 'Place Info', data: dataArr });
    }
    return res.status(404).json({ success: false, message: 'No place Info Found' });
  }).catch(err => {
    console.log(err);
    return res.status(500).json({ success: false, message: 'Something went wrong' });
  });
} /* eslint-disable no-underscore-dangle */
function nearBy(req, res) {
  const searchObj = {};
  searchObj.location = [parseFloat(req.params.lat), parseFloat(req.params.lng)];
  searchObj.radius = parseFloat(req.query.radius) ? parseFloat(req.query.radius) : 5000;
  if (req.query.name) {
    searchObj.name = req.query.name;
  }
  if (req.query.type) {
    searchObj.type = req.query.type;
  }
  _googlemap2.default.placesNearby(searchObj).asPromise().then(response => {
    if (response && response.json && response.json.results) {
      const places = response.json.results;
      const dataArr = [];
      places.forEach(item => {
        const obj = {};
        obj.rating = item.rating;
        obj.placeId = item.place_id;
        obj.name = item.name;
        obj.address = item.vicinity;
        obj.location = item.geometry.location;
        dataArr.push(obj);
      });
      _user2.default.findOneAndUpdate({ _id: _mongoose2.default.Types.ObjectId(req.user._id) }, { $push: { nearPlaces: { name: req.query.name,
            result: dataArr,
            date: new Date() } } }).exec();
      return res.status(200).json({ success: true, message: 'Near Place Info', data: dataArr });
    }
    return res.status(404).json({ success: false, message: 'No place Info Found' });
  }).catch(err => {
    console.log(err);
    return res.status(500).json({ success: false, message: 'Something went wrong' });
  });
}
//# sourceMappingURL=search.controller.js.map
