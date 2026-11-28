// Qirious 页面档案：首页的知识地图和目录、个人主页、内容页底部的“接着看”都从这里生成。
// 加新页面时，在 PAGES 里加一条；格式见 CLAUDE.md 第 5 节。
window.QIRIOUS = (() => {
  const SERIES = [
    { id: 'mvs', name: '多元统计', color: 'var(--plum)', desc: '从“一团点的形状”出发，用几何的眼光理解多元统计：协方差、特征分解、马氏距离，以及它们在检验、降维和分类中的用法。' },
    { id: 'ml',  name: '机器学习基础', color: 'var(--sage)', desc: '机器怎样从数据中学习，以及怎样判断它是真的学会了，还是只记住了练习题。' },
  ];

  const TYPES = { overview: '导览', concept: '概念', compare: '对比' };

  const PAGES = [
    // ── 专题一：多元统计 ──
    {
      id: 'mvs-overview', series: 'mvs', order: 0, type: 'overview', short: '专题导览',
      q: '多元统计在研究什么？为什么说一切从椭圆开始？',
      concept: '专题全貌', en: 'Overview: it all starts with an ellipse',
      status: 'plan', url: '',
      blurb: '用一张图串起这个专题：协方差描述形状，特征分解找出主轴，马氏距离按形状量距离，再分别通向检验、降维和分类。',
      links: [
        { to: 'covariance', kind: 'next', why: '整个专题从“一团点的形状”开始。' },
      ],
    },
    {
      id: 'covariance', series: 'mvs', order: 1, type: 'concept', short: '协方差椭圆',
      q: '一团点的“形状”能用什么来描述？',
      concept: '协方差矩阵、多元正态分布', en: 'Covariance & the multivariate normal',
      status: 'plan', url: '',
      blurb: '拖动相关系数和两个方差，看点云和等高线椭圆怎样拉伸、旋转，协方差矩阵里的数字又怎样跟着变。',
      links: [
        { to: 'eigen', kind: 'next', why: '协方差矩阵的特征向量和特征值，决定了椭圆主轴的方向和长短。' },
      ],
    },
    {
      id: 'eigen', series: 'mvs', order: 2, type: 'concept', short: '特征分解',
      q: '椭圆的长轴和短轴是从哪里来的？',
      concept: '线性变换、特征值与特征向量', en: 'Linear maps & eigen-decomposition',
      status: 'plan', url: '',
      blurb: '调整一个 2×2 矩阵，看单位圆被变成什么样的椭圆；特征向量正好指向椭圆的主轴。',
      links: [
        { to: 'mahalanobis', kind: 'next', why: '马氏距离相当于先沿主轴把椭圆“压”成圆，再量普通距离。' },
        { to: 'pca', kind: 'next', why: '主成分就是协方差矩阵的特征向量，特征值就是每个方向上的方差。' },
        { to: 'reg', kind: 'related', why: '岭回归在数据协方差矩阵特征值小的方向上收缩得最多。' },
      ],
    },
    {
      id: 'mahalanobis', series: 'mvs', order: 3, type: 'concept', short: '马氏距离',
      q: '为什么看起来更近的点，反而可能更“异常”？',
      concept: '马氏距离', en: 'Mahalanobis distance',
      status: 'plan', url: '',
      blurb: '拖动两个点，比较普通距离的“圆”和马氏距离的“椭圆”，看哪个点才是真正的异常值。',
      links: [
        { to: 'hotelling', kind: 'next', why: 'T² 统计量就是样本均值到假设均值的马氏距离的平方，再乘以样本量 n。' },
        { to: 'pca-lda', kind: 'related', why: '在两类协方差相同、先验概率也相同的假设下，LDA 等价于把点分给马氏距离更近的那一类。' },
      ],
    },
    {
      id: 'hotelling', series: 'mvs', order: 4, type: 'compare', short: 'T² 检验',
      q: '同时检验两个均值，为什么不能分别做两次 t 检验？',
      concept: 'Hotelling T²、接受域与拒绝域', en: 'Hotelling\'s T² vs separate t-tests',
      status: 'plan', url: '',
      blurb: '拖动样本均值，对比两次 t 检验的“矩形”接受域和 T² 检验的“椭圆”接受域，找出两者结论不一致的地方。',
      links: [],
    },
    {
      id: 'pca', series: 'mvs', order: 5, type: 'concept', short: '主成分分析',
      q: '把很多维的数据压到一两维，怎样损失最少？',
      concept: '主成分分析、方差解释比例', en: 'Principal component analysis',
      status: 'plan', url: '',
      blurb: '手动旋转一条穿过点云的直线，看投影的分散程度怎样变化，找到让方差最大的方向。',
      links: [
        { to: 'pca-lda', kind: 'next', why: 'PCA 只看数据怎样分散，不看类别；LDA 要找的是最能把类别分开的方向。' },
        { to: 'overfit', kind: 'related', why: '用 PCA 降维可以减少模型需要估计的参数，是应对过拟合的思路之一。' },
      ],
    },
    {
      id: 'pca-lda', series: 'mvs', order: 6, type: 'compare', short: 'PCA vs LDA',
      q: '都是找一个方向投影，为什么 PCA 可能完全分不开两类？',
      concept: '主成分分析、线性判别分析', en: 'PCA vs LDA',
      status: 'plan', url: '',
      blurb: '同一份带类别的数据，分别投影到 PCA 和 LDA 找到的方向上，看哪个方向能把两类分开。',
      links: [],
    },

    // ── 专题二：机器学习基础 ──
    {
      id: 'overfit', series: 'ml', order: 1, type: 'concept', short: '过拟合',
      q: '机器怎样从例子里学到规律？又为什么会学“过头”？',
      concept: '训练、测试、过拟合', en: 'Training, testing &amp; overfitting',
      status: 'done', url: 'explore/overfitting.html',
      blurb: '拖动数据点，调整曲线的复杂程度，看练习题误差和考题误差怎样分道扬镳。',
      links: [
        { to: 'cv', kind: 'next', why: '现实中看不到考题，需要用交叉验证来估计模型在新数据上的表现。' },
        { to: 'reg', kind: 'next', why: '不降低模型复杂度，也可以用正则化来抑制过拟合。' },
      ],
    },
    {
      id: 'cv', series: 'ml', order: 2, type: 'concept', short: '交叉验证',
      q: '看不到考题时，怎么选模型的复杂度？',
      concept: '验证集、交叉验证', en: 'Validation &amp; cross-validation',
      status: 'plan', url: '',
      blurb: '把练习题再切出一部分当“模拟考”，轮流考几次，用平均成绩来选模型。',
      links: [],
    },
    {
      id: 'reg', series: 'ml', order: 3, type: 'concept', short: '正则化',
      q: '不降低次数，能不能让曲线老实一点？',
      concept: '正则化、偏差与方差', en: 'Regularisation',
      status: 'plan', url: '',
      blurb: '给系数加一点“惩罚”，观察曲线怎样从乱扭变得平滑。',
      links: [],
    },
  ];

  // ── 以下是工具函数，加页面时不用改 ──
  const byId = Object.fromEntries(PAGES.map(p => [p.id, p]));
  const seriesOf = p => SERIES.find(s => s.id === p.series);
  // 是否出现在知识地图上：可选字段 map，默认 true；专题导览默认 false
  const onMap = p => p.map ?? (p.type !== 'overview');

  // 所有连线（每条只出现一次），带上两端的页面；cross 表示两端属于不同专题
  const EDGES = PAGES.flatMap(p => p.links.map(l => ({ from: p, to: byId[l.to], kind: l.kind, why: l.why })))
    .filter(e => {
      if (!e.to) { console.warn('[pages.js] 找不到连线目标：', e.from.id); return false; }
      return true;
    })
    .map(e => ({ ...e, cross: e.from.series !== e.to.series }));

  // 知识地图上画的页面和连线（两端都在地图上的连线才画）
  const MAP_PAGES = PAGES.filter(onMap);
  const MAP_EDGES = EDGES.filter(e => onMap(e.from) && onMap(e.to));

  // 专题的导览页（已完成的才返回），地图上的专题名据此决定是否可点
  const overviewOf = sid => PAGES.find(p => p.series === sid && p.type === 'overview' && p.status === 'done' && p.url) || null;

  // 一个页面的四组连线：先看 / 接着看 / 相关 / 对比，每项 {page, why, cross}（内容页底部用，包括导览）
  function linksOf(id) {
    const out = { prev: [], next: [], rel: [], cmp: [] };
    for (const e of EDGES) {
      const fromMe = e.from.id === id, toMe = e.to.id === id;
      if (!fromMe && !toMe) continue;
      const other = fromMe ? e.to : e.from;
      const item = { page: other, why: e.why, cross: e.cross };
      if (e.kind === 'next') (fromMe ? out.next : out.prev).push(item);
      else if (e.kind === 'related') out.rel.push(item);
      else if (e.kind === 'compare') out.cmp.push(item);
    }
    return out;
  }

  return { SERIES, TYPES, PAGES, EDGES, MAP_PAGES, MAP_EDGES, byId, seriesOf, onMap, overviewOf, linksOf };
})();
