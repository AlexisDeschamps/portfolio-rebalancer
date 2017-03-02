import mongoose from 'mongoose';

const ModelPortfolio = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  securities: [{
		symbol: String,
		allocation: {type: Number, min: 0, max: 100},
	}]
});

export default mongoose.model('ModelPortfolio', ModelPortfolio);