import { Prompt, Category } from './types';

export const SAMPLE_PROMPTS: Prompt[] = [
  // ============= 写作类 =============
  {
    id: '1',
    title: 'SEO博客写作专家',
    description: '生成符合Google算法的SEO优化文章，含关键词策略和结构化内容',
    content: `你是一位资深的SEO内容营销专家，拥有10年以上的SEO优化经验。请根据我提供的主题，撰写一篇高质量的SEO优化博客文章。

要求：
1. 标题包含主关键词且不超过60字
2. meta描述在150-160字，包含主关键词和相关词
3. 文章结构：
   - 引言段（痛点引入，含主关键词）
   - H2小标题3-5个，每个小标题下2-3个段落
   - 每个小标题包含相关关键词
   - FAQ部分（3-5个常见问题）
   - 结论与行动号召
4. 关键词密度：主关键词1-2%
5. 语言自然，不堆砌关键词
6. 包含内部链接和外部链接建议
7. 字数：1500-2000字

请开始撰写关于【主题】的博客文章。`,
    category: '写作',
    price: 0,
    rating: 4.8,
    reviews: 156,
    sales: 892,
    author_id: 'author_001',
    author_name: '张思远',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    tags: ['SEO', '博客', 'Google', '内容营销'],
    created_at: '2025-12-15T10:30:00Z',
    updated_at: '2026-05-20T10:30:00Z',
  },
  {
    id: '2',
    title: '小红书爆款文案生成器',
    description: '创作出引人入胜的小红书笔记，提升互动和转化率',
    content: `你是一位小红书资深运营官，请帮我创作一篇爆款笔记。

主题：【你的主题/产品/体验】

要求：
1. 标题要求：
   - 5-8字抓人眼球，用emoji增加表现力
   - 使用数字、疑问或对比元素增加真实感
   - 示例："30岁女生的一天｜原来生活可以如此美好✨"

2. 正文结构：
   - 开头10字钩子句引发好奇心
   - 分点1：分享真实体验
   - 痛点+解决方案
   - 段落简短有力

3. 结尾：
   - 引导互动：你的故事分享你的故事
   - 引导关注相关话题
   - 5-8个相关标签

请开始创作！`,
    category: '写作',
    price: 0,
    rating: 4.9,
    reviews: 234,
    sales: 1567,
    author_id: 'author_002',
    author_name: '李思涵',
    image_url: 'https://images.unsplash.com/photo-1527866123505-947508218a94?w=400&h=300&fit=crop',
    tags: ['小红书', '文案', '社交媒体', '营销'],
    created_at: '2025-11-20T14:20:00Z',
    updated_at: '2026-06-01T14:20:00Z',
  },
  {
    id: '3',
    title: '知乎高赞回答模板',
    description: '生成专业且有说服力的知乎回答格式',
    content: `你是一位知乎领域的资深答主，请帮我回答问题：

【问题内容】

要求：
1. 开头先点明核心观点，用权威数据或个人经历增强说服力
2. 结构：
   - 开场：30字内点明立场
   - 分点论述：3-5个要点，每个要点用"1. 2. 3."编号
   - 每个要点包含：论点+论据+案例/数据
   - 结尾：总结+行动建议

3. 语气：专业、真诚、有数据支撑
4. 字数：800-1500字
5. 适当添加金句结尾

请开始回答！`,
    category: '写作',
    price: 0,
    rating: 4.7,
    reviews: 89,
    sales: 678,
    author_id: 'author_003',
    author_name: '王晓峰',
    image_url: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop',
    tags: ['知乎', '问答', '专业', '知识分享'],
    created_at: '2026-01-10T09:15:00Z',
    updated_at: '2026-05-25T09:15:00Z',
  },
  {
    id: '4',
    title: '产品营销文案大师',
    description: '撰写高转化率的产品描述和营销文案',
    content: `你是一位专业的产品营销文案撰写专家。请为以下产品撰写营销文案：

产品名称：【产品名称】
产品特点：【列出3-5个核心卖点】
目标用户：【描述目标用户】

要求：
1. 主标题：20字内，突出核心卖点
2. 副标题：30字内，补充产品价值
3. 正文结构：
   - 痛点问题描述用户痛点
   - 解决方案+产品亮点
   - 产品特点+优势描述好处
   - 社会证明（用户评价/数据）
   - 行动号召（明确行动）

4. 语言风格：【选择适合产品特点+用户定位

请开始撰写！`,
    category: '写作',
    price: 0,
    rating: 4.6,
    reviews: 112,
    sales: 743,
    author_id: 'author_004',
    author_name: '赵雅琳',
    image_url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
    tags: ['电商', '产品', '营销', '文案'],
    created_at: '2026-02-28T16:45:00Z',
    updated_at: '2026-06-05T16:45:00Z',
  },

  // ============= 编程类 =============
  {
    id: '5',
    title: 'React组件代码审查助手',
    description: '专业的React代码审查和最佳实践建议',
    content: `你是一位资深前端架构师，熟悉React生态系统。请帮我审查以下React代码：

【代码内容或需求描述】

请从以下维度进行审查：

1. 代码质量评估
   - 代码规范和可读性
   - 是否符合React最佳实践
   - 组件设计模式是否合理

2. 性能优化建议
   - unnecessary re-renders检查
   - useMemo/useCallback使用建议
   - 代码分割和懒加载建议

3. 潜在bug检查
   - 状态管理是否合理
   - 可能的内存泄漏
   - 边界情况处理

4. TypeScript类型检查
   - 类型定义是否完整
   - any类型使用情况

请给出具体的改进建议和示例代码。`,
    category: '编程',
    price: 0,
    rating: 4.9,
    reviews: 187,
    sales: 1234,
    author_id: 'author_005',
    author_name: '陈俊杰',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ['React', 'TypeScript', '代码审查', '前端'],
    created_at: '2025-10-05T11:20:00Z',
    updated_at: '2026-05-15T11:20:00Z',
  },
  {
    id: '6',
    title: 'Python数据分析专家',
    description: '专业的Python数据分析和可视化代码生成',
    content: `你是一位拥有丰富经验的数据科学家。请帮我进行数据分析：

数据描述：【描述你的数据来源和格式】
分析目标：【明确分析的分析问题】

请提供：
1. 数据加载和初步探索
   - 数据基本信息
   - 缺失值处理
   - 异常值检测

2. 探索性分析
   - 描述性统计
   - 相关性分析
   - 可视化图表

3. 深入分析
   - 根据目标进行深入分析
   - 关键洞察发现

4. 结论和建议
   - 可操作的建议

使用pandas、numpy、matplotlib/seaborn等库

请提供完整的Python代码和分析说明。`,
    category: '编程',
    price: 0,
    rating: 4.8,
    reviews: 145,
    sales: 987,
    author_id: 'author_006',
    author_name: '黄海涛',
    image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    tags: ['Python', '数据分析', '可视化', '数据科学'],
    created_at: '2025-09-15T13:30:00Z',
    updated_at: '2026-06-10T13:30:00Z',
  },
  {
    id: '7',
    title: '算法题解答教练',
    description: 'LeetCode算法题思路分析和解答',
    content: `你是一位算法竞赛教练。请帮我分析这道算法题：

题目：【题目描述】

请按以下步骤解答：

1. 问题分析
   - 理解题目要求
   - 输入输出示例分析

2. 思路分析
   - 暴力解法思路
   - 优化思路
   - 为什么这样想的来源

3. 算法选择
   - 选择什么数据结构
   - 时间复杂度分析
   - 空间复杂度

4. 代码实现
   - 完整的代码实现
   - 详细的注释

5. 测试用例
   - 边界情况测试

请提供Python/JavaScript/Java的实现。`,
    category: '编程',
    price: 0,
    rating: 4.7,
    reviews: 203,
    sales: 1456,
    author_id: 'author_007',
    author_name: '周天宇',
    image_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    tags: ['算法', 'LeetCode', '面试', '数据结构'],
    created_at: '2026-03-20T15:00:00Z',
    updated_at: '2026-06-08T15:00:00Z',
  },
  {
    id: '8',
    title: 'API接口设计顾问',
    description: 'RESTful API设计最佳实践',
    content: `你是一位资深后端架构师。请帮我设计API接口：

功能需求：【描述你的功能模块】

请提供：
1. API设计
   - RESTful风格的URL设计
   - HTTP方法选择
   - 请求参数设计
   - 响应格式设计

2. 接口列表
   - 每个接口的请求参数详细说明

3. 数据模型
   - 请求响应数据结构

4. 安全考虑
   - 认证授权
   - 错误处理
   - 限流策略

5. 文档示例
   - 请求示例
   - 响应示例

请提供完整的API设计文档。`,
    category: '编程',
    price: 0,
    rating: 4.8,
    reviews: 98,
    sales: 654,
    author_id: 'author_008',
    author_name: '吴志强',
    image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    tags: ['API', '后端', 'RESTful', '架构'],
    created_at: '2025-12-01T10:00:00Z',
    updated_at: '2026-05-30T10:00:00Z',
  },

  // ============= 设计类 =============
  {
    id: '9',
    title: 'Midjourney人像摄影大师',
    description: '生成电影级灯光的人像摄影提示词',
    content: `专业人像摄影，电影级灯光，景深效果，85mm镜头，f/1.8光圈，自然光，柔和光线，轮廓光，眼神光，细节丰富，肤色自然，情绪饱满，柯达Portra 400胶片质感，8K分辨率，超真实，超细节，【具体人物描述：如年轻女性/男性】，【具体表情和场景描述】

风格：电影感/时尚/艺术/自然

请根据以上元素生成Midjourney提示词。`,
    category: '设计',
    price: 0,
    rating: 4.9,
    reviews: 312,
    sales: 2145,
    author_id: 'author_009',
    author_name: '林静怡',
    image_url: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=300&fit=crop',
    tags: ['人像', 'Midjourney', '摄影', '艺术'],
    created_at: '2025-08-10T14:30:00Z',
    updated_at: '2026-06-01T14:30:00Z',
  },
  {
    id: '10',
    title: '风景照片生成大师',
    description: '壮丽自然风光摄影作品',
    content: `请生成一张令人惊叹的风景照片，使用以下格式：

【具体场景描述 + 天气/时间 + 风格 + 技术规格】

示例元素：
- 山脉/湖泊/森林/海洋/沙漠 + 日出/日落/夜晚 + 电影感/自然/艺术 + 摄影参数

风格描述拍摄风格：
- 广角镜头
- 黄金时刻
- 大气透视
- 戏剧性天空
- 前景元素
- 动态范围

请根据你的需求生成完整的提示词。`,
    category: '设计',
    price: 0,
    rating: 4.8,
    reviews: 256,
    sales: 1876,
    author_id: 'author_010',
    author_name: '孙艺琳',
    image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    tags: ['风景', '摄影', '自然风光', '艺术创作'],
    created_at: '2025-11-05T16:00:00Z',
    updated_at: '2026-05-28T16:00:00Z',
  },
  {
    id: '11',
    title: 'UI设计概念图生成',
    description: '现代极简风格的UI设计灵感',
    content: `你是一位UI/UX设计师。请帮我生成以下内容的UI设计概念：

【产品/功能描述】

请提供：
1. 设计风格：现代/极简/科技/温暖
2. 色彩方案：主色/配色建议
3. 布局概念：
   - 整体布局结构
   - 卡片设计
   - 图标风格
4. 交互元素设计
5. 可用于Midjourney或DALL-E的图像生成提示词

请提供具体的视觉描述和参考风格描述。`,
    category: '设计',
    price: 0,
    rating: 4.7,
    reviews: 134,
    sales: 892,
    author_id: 'author_011',
    author_name: '郑美琪',
    image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    tags: ['UI设计', 'UX', 'Figma', '设计'],
    created_at: '2026-02-14T12:00:00Z',
    updated_at: '2026-06-06T12:00:00Z',
  },

  // ============= 营销类 =============
  {
    id: '12',
    title: '社交媒体营销策划专家',
    description: '全方位社交媒体营销策略和内容策划',
    content: `你是一位社交媒体营销专家。请帮我制定以下产品：

产品/品牌：【产品/品牌名称】
目标：【营销目标】

请提供：
1. 目标受众画像
2. 内容策略
   - 内容主题
   - 内容类型
   - 发布频率
3. 平台选择策略
4. 互动策略
5. 内容日历示例（2周）
6. 效果评估指标

请提供详细的执行方案。`,
    category: '营销',
    price: 0,
    rating: 4.8,
    reviews: 178,
    sales: 1234,
    author_id: 'author_012',
    author_name: '马建国',
    image_url: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop',
    tags: ['社交媒体', '营销', '品牌', '策略'],
    created_at: '2025-10-20T09:00:00Z',
    updated_at: '2026-05-18T09:00:00Z',
  },
  {
    id: '13',
    title: '品牌故事叙述者',
    description: '创造有温度的品牌故事',
    content: `你是一位品牌故事策划专家。请帮我创建品牌故事：

品牌名称：【品牌名称】
品牌核心价值：【核心价值主张】
产品/服务：【产品描述】

请提供：
1. 品牌故事
   - 品牌起源故事
   - 品牌使命愿景
   - 品牌价值观

2. 品牌声音
   - 品牌调性描述
   - 品牌口号

3. 品牌故事应用场景

4. 故事传播建议

请提供完整的品牌故事框架。`,
    category: '营销',
    price: 0,
    rating: 4.7,
    reviews: 95,
    sales: 678,
    author_id: 'author_013',
    author_name: '杨雨桐',
    image_url: 'https://images.unsplash.com/photo-1553484771-371a605b0f0e?w=400&h=300&fit=crop',
    tags: ['品牌', '故事', '营销', '故事叙述'],
    created_at: '2026-01-25T14:20:00Z',
    updated_at: '2026-06-03T14:20:00Z',
  },
  {
    id: '14',
    title: '视频脚本创作',
    description: '短平快的短视频脚本',
    content: `你是一位短视频内容创作者。请帮我创作短视频脚本：

主题：【视频主题】
平台：【平台名称】

视频结构：
1. 开场钩子（0-3秒：抓人的视觉+文案）
2. 内容主体（3-20秒：核心内容展示）
3. 行动号召（最后5秒：引导互动）

脚本格式：
时间 | 画面 | 文案 | 字幕 | BGM建议

请提供完整的视频脚本（60字左右）。`,
    category: '营销',
    price: 0,
    rating: 4.9,
    reviews: 234,
    sales: 1890,
    author_id: 'author_014',
    author_name: '胡晓东',
    image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
    tags: ['视频', '脚本', '短视频', '内容创作'],
    created_at: '2025-09-28T18:45:00Z',
    updated_at: '2026-06-02T18:45:00Z',
  },

  // ============= 教育类 =============
  {
    id: '15',
    title: '语言学习伙伴',
    description: '个性化语言学习和练习',
    content: `你是一位耐心的语言学习助手。请帮我学习【语言】学习：

学习目标：【具体目标】

请提供：
1. 当前水平评估
2. 学习计划
   - 每日学习内容
   - 重点学习
3. 对话练习
4. 语法和词汇练习
5. 实际对话练习（中英对照）

请开始练习。`,
    category: '教育',
    price: 0,
    rating: 4.8,
    reviews: 245,
    sales: 1678,
    author_id: 'author_015',
    author_name: '高文博',
    image_url: 'https://images.unsplash.com/photo-1503676260728-1dd0dd1?w=400&h=300&fit=crop',
    tags: ['英语', '语言学习', '教育', '练习'],
    created_at: '2025-12-10T08:30:00Z',
    updated_at: '2026-05-22T08:30:00Z',
  },
  {
    id: '16',
    title: '数学题解答教练',
    description: '详细的数学题解答和思路讲解',
    content: `你是一位有耐心的数学老师。请帮我解答以下数学题：

题目：【题目内容】

请按以下步骤解答：
1. 理解题意分析
   - 题目给出的条件
   - 要求的目标

2. 解题思路
   - 解题方法选择
   - 为什么这样思考

3. 详细解答过程
   - 每一步都有详细说明

4. 最终答案

5. 知识点总结
   - 涉及的数学概念
   - 举一反三的练习

请用清晰易懂的方式解答。`,
    category: '教育',
    price: 0,
    rating: 4.9,
    reviews: 312,
    sales: 2345,
    author_id: 'author_016',
    author_name: '罗敏华',
    image_url: 'https://images.unsplash.com/photo-1509062522237-323335323335?w=400&h=300&fit=crop',
    tags: ['数学', '教育', '解题', '学习'],
    created_at: '2025-08-20T10:00:00Z',
    updated_at: '2026-06-04T10:00:00Z',
  },
  {
    id: '17',
    title: '论文写作指导',
    description: '学术论文写作和润色',
    content: `你是一位学术写作导师。请帮我撰写学术论文：

论文主题：【主题】
研究方向：【方向】

请提供：
1. 论文结构建议
2. 论点和论据建议
3. 写作风格：学术/专业
4. 引用格式规范

请开始撰写论文。`,
    category: '教育',
    price: 0,
    rating: 4.7,
    reviews: 167,
    sales: 1123,
    author_id: 'author_017',
    author_name: '谢文静',
    image_url: 'https://images.unsplash.com/photo-14565130800811-53354146?w=400&h=300&fit=crop',
    tags: ['论文', '学术', '写作', '研究'],
    created_at: '2026-02-10T15:00:00Z',
    updated_at: '2026-05-26T15:00:00Z',
  },

  // ============= 生活类 =============
  {
    id: '18',
    title: '健康饮食规划师',
    description: '个性化饮食计划和营养餐建议',
    content: `你是一位注册营养师。请帮我制定饮食计划：

个人情况：
- 年龄：【年龄】
- 性别：【性别】
- 身高体重：【身高体重】
- 活动水平：【活动量】
- 健康目标：【目标】
- 饮食偏好/禁忌：【饮食偏好】

请提供：
1. 每日营养需求分析
2. 一周饮食计划（7天）
3. 食材采购清单
4. 营养小贴士

请提供健康饮食建议。`,
    category: '生活',
    price: 0,
    rating: 4.8,
    reviews: 289,
    sales: 1987,
    author_id: 'author_018',
    author_name: '蔡美琪',
    image_url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop',
    tags: ['健康', '饮食', '营养', '食谱'],
    created_at: '2025-11-15T12:00:00Z',
    updated_at: '2026-05-29T12:00:00Z',
  },
  {
    id: '19',
    title: '旅行规划助手',
    description: '详细的旅行行程规划',
    content: `你是一位资深旅行规划师。请帮我规划旅行：

目的地：【城市/国家】
旅行天数：【天数】
旅行风格：【休闲/探险/文化体验/美食】

请提供：
1. 行程安排（按天）
   - 每天的景点和活动
   - 交通建议
   - 住宿推荐

2. 美食推荐
   - 必吃美食
   - 餐厅建议

3. 实用贴士
   - 最佳旅行时间
   - 文化注意事项

请提供详细的旅行建议。`,
    category: '生活',
    price: 0,
    rating: 4.9,
    reviews: 215,
    sales: 1543,
    author_id: 'author_019',
    author_name: '邓志远',
    image_url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&h=300&fit=crop',
    tags: ['旅行', '规划', '攻略', '生活'],
    created_at: '2025-09-01T14:00:00Z',
    updated_at: '2026-06-07T14:00:00Z',
  },
  {
    id: '20',
    title: '情绪管理顾问',
    description: '压力管理和心理健康建议',
    content: `你是一位心理咨询师。请帮我处理：

当前情况：【描述你当前的情绪或困扰】

请提供：
1. 情绪分析
2. 原因分析
3. 具体建议
4. 行动建议

请以温暖、支持性的建议。`,
    category: '生活',
    price: 0,
    rating: 4.8,
    reviews: 187,
    sales: 1321,
    author_id: 'author_020',
    author_name: '韩雨欣',
    image_url: 'https://images.unsplash.com/photo-1506126613426-1bbf72631958?w=400&h=300&fit=crop',
    tags: ['心理健康', '情绪', '减压', '生活'],
    created_at: '2026-01-05T16:30:00Z',
    updated_at: '2026-05-24T16:30:00Z',
  },
  {
    id: '21',
    title: '时间管理教练',
    description: '高效时间管理和日程规划',
    content: `你是一位时间管理专家。请帮我规划日程：

目标/任务：【你的任务】
可用时间：【时间】

请提供：
1. 优先级排序
2. 时间块安排
3. 番茄钟安排
4. 每日/每周计划
5. 效率提升建议

请开始规划。`,
    category: '生活',
    price: 0,
    rating: 4.9,
    reviews: 234,
    sales: 1765,
    author_id: 'author_021',
    author_name: '毛振华',
    image_url: 'https://images.unsplash.com/photo-1506784987995-b0aa0f55042d?w=400&h=300&fit=crop',
    tags: ['时间管理', '效率', '规划', '生产力'],
    created_at: '2025-08-25T11:30:00Z',
    updated_at: '2026-06-08T11:30:00Z',
  },

  // ============= 商业类 =============
  {
    id: '22',
    title: '商业计划书顾问',
    description: '完整的商业计划和创业方案',
    content: `你是一位创业顾问。请帮我制定商业计划：

项目名称：【项目名称】
项目描述：【项目描述】

请提供：
1. 执行摘要
2. 市场分析
3. 产品服务
4. 营销策略
5. 运营计划
6. 财务预测
7. 风险评估

请提供商业计划。`,
    category: '商业',
    price: 0,
    rating: 4.7,
    reviews: 134,
    sales: 987,
    author_id: 'author_022',
    author_name: '冯伟伦',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ['商业', '创业', '计划', 'BP'],
    created_at: '2025-10-12T09:30:00Z',
    updated_at: '2026-05-19T09:30:00Z',
  },
  {
    id: '23',
    title: '职场沟通专家',
    description: '职场邮件和沟通技巧',
    content: `你是一位职场沟通专家。请帮我撰写：

场景：【描述沟通场景】

请提供：
1. 邮件/消息建议
2. 沟通要点
3. 语言风格：【正式/友好/专业】

请起草沟通内容。`,
    category: '商业',
    price: 0,
    rating: 4.8,
    reviews: 198,
    sales: 1432,
    author_id: 'author_023',
    author_name: '潘家豪',
    image_url: 'https://images.unsplash.com/photo-1454165804693-496?w=400&h=300&fit=crop',
    tags: ['职场', '沟通', '邮件', '商务'],
    created_at: '2026-03-08T11:00:00Z',
    updated_at: '2026-06-06T11:00:00Z',
  },
  {
    id: '24',
    title: '面试准备助手',
    description: '面试准备和模拟面试',
    content: `你是一位资深HR面试官。请帮我准备面试：

应聘职位：【职位名称】

请提供：
1. 职位分析
2. 常见面试问题预测（10-15个）
3. 回答建议
4. 自我介绍建议
5. 模拟面试练习（我回答你的问题）

请开始准备。`,
    category: '商业',
    price: 0,
    rating: 4.9,
    reviews: 267,
    sales: 1876,
    author_id: 'author_024',
    author_name: '邱雅婷',
    image_url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
    tags: ['面试', '求职', '职业', 'HR'],
    created_at: '2025-12-05T13:15:00Z',
    updated_at: '2026-05-27T13:15:00Z',
  },

  // ============= 游戏类 =============
  {
    id: '25',
    title: '游戏剧情设计',
    description: '创意游戏剧情和角色设定',
    content: `你是一位游戏设计师。请帮我设计游戏：

游戏类型：【游戏类型】
主题：【主题】

请提供：
1. 游戏背景设定
2. 角色设定（3-5个）
3. 剧情大纲
4. 玩法建议

请开始设计游戏剧情。`,
    category: '游戏',
    price: 0,
    rating: 4.8,
    reviews: 145,
    sales: 1098,
    author_id: 'author_025',
    author_name: '卢俊铭',
    image_url: 'https://images.unsplash.com/photo-1493711662062-fa541f7f5f3e?w=400&h=300&fit=crop',
    tags: ['游戏', '设计', 'RPG', '剧情'],
    created_at: '2026-02-20T15:45:00Z',
    updated_at: '2026-06-02T15:45:00Z',
  },
  {
    id: '26',
    title: '桌游规则设计',
    description: '创新的桌游和聚会游戏',
    content: `你是一位桌游设计师。请帮我设计桌游：

游戏主题：【主题】
玩家人数：【人数】
游戏时长：【时长】

请提供：
1. 游戏简介
2. 游戏组件
3. 游戏规则
4. 游戏流程
5. 胜利条件

请设计游戏。`,
    category: '游戏',
    price: 0,
    rating: 4.7,
    reviews: 112,
    sales: 876,
    author_id: 'author_026',
    author_name: '阮嘉怡',
    image_url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop',
    tags: ['桌游', '游戏', '设计', '娱乐'],
    created_at: '2025-11-28T17:30:00Z',
    updated_at: '2026-05-31T17:30:00Z',
  },

  // ============= 音乐类 =============
  {
    id: '27',
    title: '歌词创作助手',
    description: '创作有感染力的歌词',
    content: `你是一位歌词创作人。请帮我写歌词：

主题：【主题】
风格：【风格】
情绪：【情绪】

请提供：
1. 主歌（2段）
2. 副歌（高潮部分）
3. 桥段
4. 整体歌词结构

请开始创作歌词。`,
    category: '音乐',
    price: 0,
    rating: 4.8,
    reviews: 187,
    sales: 1345,
    author_id: 'author_027',
    author_name: '田晓蕾',
    image_url: 'https://images.unsplash.com/photo-151167178277-a57b0d38a715?w=400&h=300&fit=crop',
    tags: ['歌词', '音乐', '创作', '歌曲'],
    created_at: '2026-01-18T16:00:00Z',
    updated_at: '2026-06-01T16:00:00Z',
  },
  {
    id: '28',
    title: '音乐推荐系统',
    description: '个性化音乐推荐',
    content: `你是一位音乐评论家。请推荐音乐：

心情：【心情】
场景：【场景】
偏好：【偏好】

请推荐：
1. 10首推荐歌曲
2. 推荐理由
3. 风格描述

请提供推荐。`,
    category: '音乐',
    price: 0,
    rating: 4.9,
    reviews: 223,
    sales: 1654,
    author_id: 'author_028',
    author_name: '韦思涵',
    image_url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop',
    tags: ['音乐', '推荐', '歌单', '心情'],
    created_at: '2025-10-30T14:20:00Z',
    updated_at: '2026-05-25T14:20:00Z',
  },

  // ============= 其他/综合类 =============
  {
    id: '29',
    title: '综合问题解决框架',
    description: '系统思考和问题分析方法',
    content: `你是一位问题解决专家。请帮我分析问题：

问题描述：【问题】

请提供：
1. 问题背景
2. 根本原因分析
3. 可能的解决方案（3-5个）
4. 推荐方案
5. 实施步骤

请开始分析。`,
    category: '其他',
    price: 0,
    rating: 4.8,
    reviews: 156,
    sales: 1187,
    author_id: 'author_029',
    author_name: '龙天佑',
    image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    tags: ['问题解决', '思维', '分析', '决策'],
    created_at: '2025-12-22T10:45:00Z',
    updated_at: '2026-06-03T10:45:00Z',
  },
  {
    id: '30',
    title: '思维导图生成',
    description: '结构化思维和思维导图',
    content: `你是一位思维导图专家。请帮我创建思维导图：

主题：【主题】
目标：【目标】

请提供：
1. 中心主题
2. 主要分支（5-7个）
3. 子分支详细说明
4. Markdown格式的思维导图

请开始生成思维导图。`,
    category: '其他',
    price: 0,
    rating: 4.7,
    reviews: 134,
    sales: 987,
    author_id: 'author_030',
    author_name: '常悦',
    image_url: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80e04?w=400&h=300&fit=crop',
    tags: ['思维导图', '思维', '工具', '学习'],
    created_at: '2026-03-15T13:00:00Z',
    updated_at: '2026-06-05T13:00:00Z',
  },
  {
    id: '31',
    title: '创意灵感激发器',
    description: '头脑风暴和创意激发',
    content: `你是一位创意激发导师。请帮我进行头脑风暴：

主题/问题：【主题】
约束条件：【约束】

请提供：
1. 5个不同角度的创意方向
2. 每个方向3-5个具体创意
3. 最有前景的3个创意的详细说明
4. 下一步行动建议

请开始头脑风暴。`,
    category: '其他',
    price: 0,
    rating: 4.9,
    reviews: 198,
    sales: 1432,
    author_id: 'author_031',
    author_name: '汤嘉慧',
    image_url: 'https://images.unsplash.com/photo-1454922901705-2c2f053835b9?w=400&h=300&fit=crop',
    tags: ['创意', '头脑风暴', '创新', '灵感'],
    created_at: '2025-11-08T15:30:00Z',
    updated_at: '2026-05-28T15:30:00Z',
  },
  {
    id: '32',
    title: '读书笔记整理大师',
    description: '深度阅读和笔记整理',
    content: `你是一位阅读导师。请帮我整理读书笔记：

书名/文章：【内容来源】

请提供：
1. 核心观点摘要
2. 关键概念
3. 精彩摘录
4. 个人感悟
5. 应用建议

请开始整理笔记。`,
    category: '其他',
    price: 0,
    rating: 4.8,
    reviews: 178,
    sales: 1234,
    author_id: 'author_032',
    author_name: '宋晨阳',
    image_url: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=300&fit=crop',
    tags: ['阅读', '笔记', '学习', '整理'],
    created_at: '2026-02-05T09:00:00Z',
    updated_at: '2026-06-04T09:00:00Z',
  },
];

// ============ 分类数据 ============
export const CATEGORIES: Category[] = [
  { id: 'cat_01', name: '写作', emoji: '✍️', prompt_count: 4, description: 'AI辅助各类文案、文章、博客' },
  { id: 'cat_02', name: '编程', emoji: '💻', prompt_count: 4, description: '代码生成、调试、架构设计' },
  { id: 'cat_03', name: '设计', emoji: '🎨', prompt_count: 3, description: 'UI/UX、图像生成、视觉设计' },
  { id: 'cat_04', name: '营销', emoji: '📢', prompt_count: 3, description: '品牌推广、社交媒体、内容营销' },
  { id: 'cat_05', name: '教育', emoji: '📚', prompt_count: 3, description: '语言学习、解题、论文写作' },
  { id: 'cat_06', name: '生活', emoji: '🏃', prompt_count: 4, description: '健康、旅行、情绪管理' },
  { id: 'cat_07', name: '商业', emoji: '💼', prompt_count: 3, description: '创业、职场、商业计划' },
  { id: 'cat_08', name: '游戏', emoji: '🎮', prompt_count: 2, description: '游戏设计、剧情、桌游' },
  { id: 'cat_09', name: '音乐', emoji: '🎵', prompt_count: 2, description: '歌词创作、音乐推荐' },
  { id: 'cat_10', name: '其他', emoji: '✨', prompt_count: 4, description: '综合工具、思维导图、创意激发' },
];

// ============ 工具函数 ============
export async function getPrompts(category?: string, search?: string): Promise<Prompt[]> {
  let filtered = [...SAMPLE_PROMPTS];

  if (category && category.trim() !== '') {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (search && search.trim() !== '') {
    const lowerSearch = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerSearch) ||
        p.description.toLowerCase().includes(lowerSearch) ||
        (p.tags && p.tags.some((tag) => tag.toLowerCase().includes(lowerSearch)))
    );
  }

  // 按销量排序，销量高的排前面
  return filtered.sort((a, b) => b.sales - a.sales);
}

export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

export async function getFeaturedPrompts(): Promise<Prompt[]> {
  // 返回评分最高的前6个提示词
  return [...SAMPLE_PROMPTS]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
}

export async function getTrendingPrompts(limit: number = 5): Promise<Prompt[]> {
  // 返回销量最高的提示词
  return [...SAMPLE_PROMPTS]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, limit);
}

export async function getPromptById(id: string): Promise<Prompt | undefined> {
  return SAMPLE_PROMPTS.find((p) => p.id === id);
}

export async function getPromptsByAuthor(authorId: string): Promise<Prompt[]> {
  return SAMPLE_PROMPTS.filter((p) => p.author_id === authorId);
}

export async function getRelatedPrompts(promptId: string, limit: number = 3): Promise<Prompt[]> {
  const currentPrompt = SAMPLE_PROMPTS.find((p) => p.id === promptId);
  if (!currentPrompt) return [];

  return SAMPLE_PROMPTS.filter(
    (p) => p.id !== promptId && p.category === currentPrompt.category
  )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}
