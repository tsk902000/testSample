import { IBundlerConfigType, ICreateCSSRule } from 'umi';
import WebpackChain from 'webpack-chain';

export default function chainWebPackConfig(
  memo: WebpackChain,
  { type: IBundlerConfigType, webpack, env, createCSSRule: ICreateCSSRule },
) {
  // 设置 alias
  //memo.module.rule('md').test(/\.md$/).use('raw').loader('raw-loader');
  //memo.output.path(__dirname + '/dist');
  //memo.module.rule('md').test(/\.md$/).use('null-loader').loader('null-loader');
  /**
  memo.module
    .rule('fontawesome')
    .test(/\.css$/i)
    .use('style-loader')
    .loader('style-loader')
    .end()
    .use('css-loader')
    .loader('css-loader')
    .end()
    .use('postcss-loader')
    .loader('postcss-loader')
    .end();
**/
  /**
  memo.module
    .rule('fontawesome')
    .test(/\.css$/i)
    .use('css-loader')
    .loader('css-loader');**/
  /**  le
    .rule('fontawesome-rl')
    .test(/\.(woff|woff2|eot|ttf|otf)$/i)
    .use('asset/resource');**/
  /**
  memo.module
    .rule('esm')
    .test(/\.m?js$/)
    .exclude.add(/(node_modules)/)
    .end()
    .use('babel-loader')
    .loader('babel-loader')
    .options({ presets: ['@babel/preset-env'] });
   **/
  memo.module.rule('mjs-rule').test(/.m?js/).resolve.set('fullySpecified', false);
}
