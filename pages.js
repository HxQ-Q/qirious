// Qirious 页面档案：加新页面时，在 PAGES 里加一条
window.QIRIOUS=(()=>{
const TOPICS={ml:{name:'机器学习',c:'var(--sage)'},stat:{name:'统计',c:'var(--rose)'},data:{name:'数据处理',c:'var(--ochre)'},opt:{name:'优化',c:'var(--teal)'},nlp:{name:'文本与 NLP',c:'var(--plum)'}};
const PAGES=[
 {id:'overfit',en:'Training, testing &amp; overfitting',short:'过拟合',q:'机器怎样从例子里学到规律？又为什么会学“过头”？',concept:'训练、测试、过拟合',topics:['ml','stat'],status:'done',url:'explore/overfitting.html',x:.40,y:.46,next:['cv','reg'],related:['outlier','gd'],blurb:'拖动数据点，调整曲线的复杂程度，看练习题误差和考题误差怎样分道扬镳。'},
 {id:'cv',en:'Validation &amp; cross-validation',short:'交叉验证',q:'看不到考题时，怎么选模型的复杂度？',concept:'验证集、交叉验证',topics:['ml','stat'],status:'plan',x:.70,y:.24,next:[],related:[],blurb:'把练习题再切出一部分当“模拟考”，轮流考几次，用平均成绩来选模型。'},
 {id:'reg',en:'Regularisation',short:'正则化',q:'不降低次数，能不能让曲线老实一点？',concept:'正则化、偏差与方差',topics:['ml'],status:'plan',x:.72,y:.66,next:[],related:['gd'],blurb:'给系数加一点“惩罚”，观察曲线怎样从乱扭变得平滑。'},
 {id:'gd',en:'Gradient descent',short:'梯度下降',q:'机器是怎么一步步找到最好的参数的？',concept:'损失函数、梯度下降',topics:['ml','opt'],status:'plan',x:.16,y:.74,next:[],related:[],blurb:'看一个小球沿着误差的“山坡”往下走，调步长，看它稳稳到达还是来回乱跳。'},
 {id:'outlier',en:'Robustness &amp; outliers',short:'异常点',q:'一个异常点能把结论带偏多远？',concept:'稳健性、异常值',topics:['stat','data'],status:'plan',x:.16,y:.22,next:[],related:[],blurb:'往数据里加一个离群点，比较平均数和中位数、普通回归和稳健回归的反应。'},
 {id:'textsim',en:'Text similarity',short:'文本相似度',q:'电脑怎样判断两句话意思相近？',concept:'文本表示、语义相似度',topics:['nlp'],status:'plan',x:.88,y:.86,next:[],related:[],blurb:'输入几句话，看关键词匹配和语义表示给出的相似度排序有什么不同。'}];
return {TOPICS,PAGES};
})();
