var path = require('path');

module.exports = {
	mode: 'none',
	// 리소스를 변환하기 위해 필요한 최초의 진입점 또는 자바스크립트 파일 경로
	entry: './src/index.js',
	// 결과물의 파일 경로
	output: {
		// 웹팩으로 빌드한 파일의 이름
		filename: 'bundle.js',
		// 위의 파일의 경로를 설정 resolve는 인자로 넘어온 경로를 조합하여 유효한 파일 경로로 만들어준다.
		path: path.resolve(__dirname, 'dist'),
	},
};
