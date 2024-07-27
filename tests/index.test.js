import Enzyme from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'

Enzyme.configure({ adapter: new Adapter() })

let context = require.context('./', true, /\.spec\.js$/)
context.keys().forEach(context)
