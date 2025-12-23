# 单位代码表

| 代码 | 代码翻译 | 描述 | 例子 | 值类型 | 原本的值类型 |
| --- | --- | --- | --- | --- | --- |
| 核心 | [core] |  |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
|  |  | 必要的代码，如果缺少这些，可能导致错误 |  |  |  |
| name | 名字 | 定义单位原始名称，可以是中文。游戏使用它区分其它单位。如果没有在displayText或者语言文件设置显示名称，那么它也将作为单位的显示名称。<br>具体描述文件位置:assets/translationsStrings_zh.properties格式:units.单位名称.name=写单位显示的名称<br>units.单位名称.description= [[填单位显示的描述]] | name:customTank1<br>name:自定义坦克<br>name:shibainu | string |  |
| altNames | 别名 | 以逗号分隔的名称列表。像名称一样，但优先级较低，对于启用多个自定义mod有用。 | altNames:custTank1,customTank1,cTank1 | string(s) |  |
| class | 类 | 无实际用处，可以删除。Luke说：保留供将来使用，默认情况下最好为CustomUnitMetadata。 | class: CustomUnitMetadata | string |  |
| strictLevel | 严格级别 | 默认值为0，忽略代码重复。设为1时如果当前单位内有重复代码，则报错。建议添加到"all-units.template"以应用于所有单位,进行统一查错。 | strictLevel:1 | float |  |
| price | 价格 | 设定单位造价，可以是负数，负数时提直接供资金。 | price: 500 | integer(price) |  |
| mass | 质量 | 单位的“重量”定义了它与其他单位的碰撞方式，值越大，推动就越困难。 | mass: 3000 | integer |  |
| techLevel | 科技等级 | 设置单位的科技等级，共有3个级别，1级GUI显示为绿色，2、3级显示为黄色。 | techLevel: 1 | integer |  |
| buildSpeed | 建造速度 | 建造此单位需要的时间，填秒。以前的计算方式为：此处所填时间=1÷(60x您需要的秒)如果定义了工厂速率则需要乘以建造乘数。 | buildSpeed: 3s | time |  |
| radius | 半径 | 单位的实际碰擦体积，也是实际的可选择范围。其光圈在displayRadius覆盖时真实体积不变。 | radius: 20 | integer |  |
| isBio | 是生物 | 此单位是否为生物，为生物则影响死亡声音和血迹（图像在drawable/blood_mark.png，hideScorchMark：true时可以隐藏）非生物则为黑色爆炸效果。 | isBio: true | bool |  |
| isBug | 是虫子 | 是否为虫子，用于沙盒中的单独分类。 | isBug: false | bool |  |
| isBuilder | 是建造者 | 若需要此单位建造建筑物，则通常需要此代码。并且默认设为[ai] useAsBuilder。 | isBuilder: true | bool |  |
| streamingCost | 流式造价 | 就像价格，但在建造时逐渐消耗资金，如果在构建过程中资源耗尽，建造或生产队列将暂停。就像是红警中那样。铁锈默认是预先扣除资金。 | streamingCos:100 | integer(price) |  |
| switchPriceWithStreamingCost | 切换价格为流式造价 | 快捷设置为默认资金消耗方式或为流式建造方式。建议使用模板快速将一个模组为所有单位切换流资源。 | switchPriceWithStreamingCost:true | bool |  |
|  |  | 单位统计代码 |  |  |  |
| maxHp | 生命值 | 单位最大生命值，默认生成时即为此值。 | maxHp: 200 | integer |  |
| selfRegenRate | 生命恢复速度 | 此数值决定每帧增加血量。游戏内默认速度下，一秒为60逻辑帧，而您看到的FPS帧数为渲染帧，所以电脑上几百帧和手机上60帧和省电模式下30帧并不影响计算。所以不要写太大。可以写负值用于自毁。 | selfRegenRate: 0.01 | float |  |
| maxShield | 护盾值 | 单位最大护盾值，默认生成时即为此值。如果设置了startShieldAtZero:true，则初始为0. | maxShield: 500 | integer |  |
| startShieldAtZero | 护盾初始为0 | 如果为true，则单位护盾值从0开始增加。 | startShieldAtZero: true | bool |  |
| shieldRegen | 护盾恢复速度 | 此数值决定每帧增加护盾值，游戏内一秒为60帧，所以不要写太大。可以写负值。（默认值为0.25） | shieldRegen: 0.15 | float |  |
| energyMax | 能量值 | 默认值为0。可以用作炮塔，激光防御和行动的弹药的能量。 | energyMax: 1 | float |  |
| startEnergyAtZero | 能量初始为0 | 如果为true，则单位能量值从0开始增加。 | startEnergyAtZero: true | bool |  |
| energyRegen | 能量恢复速度 | 能量每帧恢复速度，游戏内一秒为60帧，所以不要写太大。可以写负值。 | energyRegen: 0.01 | float |  |
| energyRegenWhenRecharging | 充能时能量恢复速度 | 能量恢复是持续的，如果您设置了energyNeedsToRechargeToFull，那么攻击时按energyRegen恢复，耗尽时的灰条按此处设定值恢复。 | energyRegenWhenRecharging:0.1 | float |  |
| energyStartingPercentage | 能量初始百分比 | 单位生成时所携带的能量百分比。 | energyStartingPercentage: 0.5 | float |  |
| energyNeedsToRechargeToFull | 能量需要充满 | 若果能量耗尽，则需要完全充能才能进行攻击。 | energyNeedsToRechargeToFull: true | bool |  |
| energyDisplayName | 能量显示名称 | 能量显示名称,目前似乎无效.1.15 | energyDisplayName:chemms | string |  |
| armour | 装甲 | 抵消敌方攻击所造成的伤害。 | armour: 6 | integer |  |
| armourMinDamageToKeep | 装甲最低伤害 | 至少造成多少点伤害，默认为1.防止护甲太高完全打不动。 | armourMinDamageToKeep: 2 | integer |  |
| borrowResourcesWhileAlive | 资源活着时借用 | 创建时获取这些资源，删除或销毁时将其返回。例如用于电力逻辑，负数供电和正数耗电。 | borrowResourcesWhileAlive: gold=10 | price |  |
| borrowResourcesWhileBuilt | 资源在单位建成后借用 | 类似于[core]borrowResourcesWhileAlive但在单位建成后才会生效。主要对房屋之类的建筑有用，这些建筑有负的资源，可以加到单位上限等 | borrowResourcesWhileBuilt:gold=100 | price |  |
| generation_resources | 资源获取 | 单位定时获得的资源，可自定义资源。 | generation_resources: credits=5, gold=20 | price |  |
| generation_active | 资源取得条件 | 获取资源条件。可用于受损时无法产出。 | generation_active: if not self.hp(lessThan=100) | logicBoolean |  |
| generation_credits | 资金获取 | 生成资源，仅用于默认的资金，也就是铁锈默认的金钱。 | generation_credits: 2 | integer |  |
| generation_delay | 资金获取时间 | 多久帧添加添加一次资源(generation_creditsvi指定数值)。默认值为40，一秒为60帧。Luke不建议使用。 | generation_delay: 40 | integer |  |
|  |  | UI和图形代码 |  |  |  |
| showInEditor | 显示在沙盒中 | 设置为false可在沙箱编辑器中隐藏此单位。 （默认为true） | showInEditor: false | bool |  |
| displayText | 界面显示名称 | 默认单位显示给玩家的单位名称。不填则显示core下的单位name。此条目依据语言设定不同会被下一条覆盖。 | displayText: Custom Tank | LocaleString |  |
| displayText_[Language] | 界面显示文本多语言 | 为单位名称添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催luke改。zh(中文通用) zh-cn(简体) zh-tw(台湾) zh-hk中文(香港) en(英语通用) ru(俄语) 其它自查(此列表并不全)，不过您应该不会闲着支持这么多语言。西班牙语（西班牙）es-ES、葡萄牙语（葡萄牙）pt-PT、日语ja、阿姆哈拉语am、爱沙尼亚语et、保加利亚语bg、冰岛语is、波兰语pl、丹麦语da、德语de、法语（法国）fr-FR、法语（加拿大）fr-CA、菲律宾语fil、芬兰语fi、韩语ko、荷兰语nl、加泰罗尼亚语ca、捷克语cs、克罗地亚语hr、拉脱维亚语lv、立陶宛语lt、罗马尼亚语ro、马来语ms、南非荷兰语af、挪威语no、葡萄牙语（巴西）pt-BR、瑞典语sv、塞尔维亚语sr、斯洛伐克语sk、斯洛文尼亚语sl、斯瓦希里语sw、泰语th、土耳其语tr、乌克兰语uk、西班牙语（拉丁美洲）es-419、希伯来语he、希腊语el、匈牙利语hu、意大利语it、印地语hi、印度尼西亚语id in、英语（美国）en-US、英语（英国）en-GB、越南语vi、祖鲁语zu | displayText_es: Tanque Personalizado<br>displayText_zh:中文名 | string |  |
| displayDescription | 界面显示描述 | 单位显示给玩家的单位描述。 | displayDescription:-Fast movement\n炮灰 | LocaleString |  |
| displayDescription_[Language] | 界面显示描述_其它语言 | 为单位描述添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催luke改。地区码见上。 | displayDescription_es: -Movimiento rápido\n-Daño ligero | string |  |
| displayLocaleKey | 界面显示内部调用 | 调用内部语言文件的单位名称和说明的翻译文件。 | displayLocaleKey: units.mechArtillery | string |  |
| displayRadius | 单位选择时显示圆圈 | 修改选择单位时显示的绿色圆圈，不更改实际碰撞(radius)和可选择范围。 | displayRadius: 20 | integer |  |
| uiTargetRadius | 为目标时半径 | 默认值为displayRadius。当攻击/回收/等等这个单位使用半径 | uiTargetRadius:20 | integer |  |
| shieldRenderRadius | 单位护盾显示半径 | 护盾绘制半径，默认值比半径大一点。可以设置在单位上显示更大或更小的护盾圈。 | shieldRenderRadius: 12 | integer |  |
| shieldDisplayOnlyDeflection | 护盾只在受攻击时显示 | 隐藏护盾，只在受到攻击时显示。 | shieldDisplayOnlyDeflection: true | bool |  |
| shieldDeflectionDisplayRate | 护盾消失速度 | 默认值为4。数值越大消失越快。 | shieldDeflectionDisplayRate: 3 | float |  |
| showOnMinimap | 显示在小地图上 | 默认为true。如果为false，则在小地图上不显示此单位。 | showOnMinimap: false | bool |  |
| showOnMinimapToEnemies | 显示于敌人小地图 | 是否在敌人小地图上显示。目前不支持逻辑。 | showOnMinimapToEnemies:false | bool |  |
| showActionsWithMixedSelectionIfOtherUnitsHaveTag | 混合所选单位所显示的行为(标签) | 如果选择的单位都包含此处使用的标签，则合并“行为(action)”。比如您的步单位通过部署转化成另一个单位，在混合时可以当作同一个单位处理，不再是默认的谁都无法执行操作。例子如红警的盟军大单位在混合选中后依旧可执行部署或解除。 | showActionsWithMixedSelectionIfOtherUnitsHaveTag:tag_联系 | tags |  |
|  |  | 仅构建代码 |  |  |  |
| isBuilding | 是建筑 | 定义单位是否为建筑物。 | isBuilding: true | bool |  |
| footprint | 建筑碰撞范围 | 填四个数值(左，上，右，下)，单位是格子，建筑默认占一格，向左和向上需要填负数，填整数在选择时有偏移。<br>四个数值可以完全颠倒，这样不会阻碍单位移动。<br>决定建筑单位碰撞体积，此区域内单位不能通过，如果在单位运动途中单位则会绕过。单位实际可选择面积使用的是radius。 | （1x1）footprint: 0,0,0,0<br>（2X2）footprint: 0,0,1,1<br>（3X3）footprint: -1,-1,1,1 | integers |  |
| constructionFootprint | 建筑覆盖范围 | 基础规则同上，这个区域内不能建造建筑，但是单位可以通过。一般需要设定比上一个面积大。好处是即使建造的密密麻麻，单位也有路可走 | constructionFootprint: -1,-1,1,3 | integers |  |
| displayFootprint | 建筑选择UI | 基础规则同上，用于选择单位时UI显示。不设定则默认为建筑覆盖区域。 | displayFootprint: 0,0,1,1 | integers |  |
| buildingSelectionOffset | 建筑UI调整 | 默认值为0。以像素为单位对选框额外设定。 | buildingSelectionOffset: 4 | integer |  |
| buildingToFootprintOffsetX | 建筑X轴偏移 | 设置X轴位置偏移，默认10.若设置非对称的建筑，单位会根据覆盖范围会挤在角上，这时如果要准确显示就需要额外偏移。与直接使用图像偏移的区别:<br>由于铁锈判断选中单位是根据单位体积(radius),因此图像偏移实际上单位的位置不变，会容易造成点击时的误差。而当前代码实际上是移动单位，则不会造成这个问题。 | buildingToFootprintOffsetX: 4 | float |  |
| buildingToFootprintOffsetY | 建筑Y轴偏移 | 设置Y轴位置偏移，默认10.其它参上条 | buildingToFootprintOffsetY: 6 | float |  |
| placeOnlyOnResPool | 建筑只能建造在资源池上 | 通常用于提取器，会强制在资源池中进行建筑物构造。可以用于在自定义战役中限制某单位只能在某地建造。 | placeOnlyOnResPool: true | bool |  |
| selfBuildRate | 自动建造速度 | 此单位自动构造所需要的时间，目前用于虫族。计算方式为：此处所填时间=1÷(60x您需要的秒)。 | selfBuildRate: 0.0008 | float |  |
| ignoreInUnitCapCalculation | 不计入单位数量统计 | 铁锈中有单位数量上限设定，填true时不计入统计，多用于辅助单位，建筑物的默认值为true。 | ignoreInUnitCapCalculation:true | bool |  |
|  |  | 杂项代码 |  |  |  |
| copyFrom | 复制数据自 | 加载其它文件的单位数据作为该单位的默认值，支持多个文件。无后缀名限制，可不写dont_load，用于模块化。 | copyFrom: ROOT:defaultTanks.template, tankT1.ini | file(s) (ini) |  |
| dont_load | 禁止加载 | 不加载此单位，缺失数据时不会出错。与copyFrom一起使用时很有用。 | dont_load: true | bool |  |
| overrideAndReplace | 覆盖单位 | 用此单位覆盖另一个单位，地图上所有单位也将被替换，可以用来替换dex内无法修改的单位。 | overrideAndReplace: builder, combatEngineer | string(s) |  |
| overrideResourceLoadPath | 覆盖资源加载路径 | 覆盖掉该单位的资源加载路径 | overrideResourceLoadPath:false | bool |  |
| logIfCreditResourceUsed | 记录是否使用资源 | 记录该单位是否使用了资源 | logIfCreditResourceUsed:false | bool |  |
| onNewMapSpawn | 地图位置产生指定单位 | 在地图上添加此单位。可以用于覆盖铁锈默认的资源逻辑。参数：<br>emptyResourcePools_asNeutral  产生位置于空资源池，并且为中立所属<br>emptyOrOccupiedResourcePools_asNeutral 空的或者已经占用的资源池，并且为中立所属<br>mapCenter_asNeutral 地图中心，且为中立所属<br>mapCenter_eachActiveTeam 地图中心，且给与每个玩家<br>spawnPoint_eachActiveTeam 玩家初始位置，给与每个玩家 | [core]<br>name:钻矿机<br>onNewMapSpawn:emptyResourcePools_asNeutral | string |  |
| globalScale | 全局缩放 | 废弃代码，不要用。将一个单位按比例放大，但不放大攻击力。默认值为1。不建议更改。 | globalScale: 2 | float |  |
| isLocked | 锁定 | 禁止建造该单位。可以与overrideAndReplace一起使用，以限制玩家可以建造的单位。 | isLocked: true | bool |  |
| isLockedIfGameModeNoNuke | 禁核模式锁定 | 如果在游戏开始前选择了禁用核武器，禁止建造此单位。 | isLockedIfGameModeNoNuke: true | bool |  |
| experimental | 实验单位标志 | 标记单位为实验单位。影响缩小图标和游戏结束统计。 | experimental: true | bool |  |
| stayNeutral | 保持中立 | 设置为true时，单位处于中立队伍情况下，禁止靠近时更改为玩家所属。仍然有其它方式获得。 | stayNeutral: false | bool |  |
| createNeutral | 创建时中立 | 设置为true时，产生该单位总是自动转变为中立队伍。创建时中立，但不妨碍玩家捕获。 | createNeutral: true | bool |  |
| createOnAggressiveTeam | 创建为敌对中立 | 设置为true时，此中立单位对所有玩家有敌意。 | createOnAggressiveTeam: true | bool |  |
| tags | 标签 | 标签，用于对单位进行分类，用于实现各种各样的特殊作。比如单位数量限制，伤害修正，增益损益，触发条件等等 | tags: tank, smallTank, piercingDamage | string(s) |  |
| defineUnitMemory | 定义单位内存 | 为每个单元创建唯一的自定义存储变量。允许的类型:boolean/bool, float/number, unit, string/text<br>格式:defineUnitMemory:类型 变量名称<br>defineUnitMemory: boolean nukeActive,boolean laserReady, float experience, unit nextTarget, unit homeBase, string customText | defineUnitMemory:unit attackunit | memories |  |
| @memory | @定义内存 | 定义单个内存，但可以打多行此代码，与上方代码相反 |  |  |  |
| updateUnitMemory | 更新单位内存 | (类似[action]setUnitMemory但是性能更好)works like [action]setUnitMemory but with better performance and easier timing than triggering an action | updateUnitMemory:hp=self.hp/5 | memories |  |
| updateUnitMemoryRate | 更新单位内存频率 | (默认1s,填写0则为每帧)How often to call updateUnitMemory, defaults to 1s. At zero would trigger every frame. |  | memories |  |
| fogOfWarSightRange | 视野 | 设置单位视野，在战争迷雾中可以看到的瓷砖数量。默认为15。 | fogOfWarSightRange: 18 | integer |  |
| fogOfWarSightRangeWhileNotBuilt | 未完成时视野 | 填数值，当建筑或单位没有建造完成时，它的视野范围 | fogOfWarSightRangeWhileNotBuilt:3 | integer |  |
| softCollisionOnAll | 碰撞体积软化 | 与其他单位碰撞时产生柔和的碰撞效果，填负数会导致单位相互吸引。 | softCollisionOnAll: 3 | integer |  |
| disableAllUnitCollisions | 禁用碰撞 | 如果为true，则该单位无视与其它单位碰撞。无碰撞体积单位可以用于固定位置制造效果，或是用于一些不影响单位通行的场景。 | disableAllUnitCollisions: true | bool |  |
| availableInDemo | 在演示版中可用 | 是否能在演示中使用 | availableInDemo:true | bool |  |
| isUnrepairableUnit | 禁止被修复 | 如果为true，则任何单位都无法修复此单位。但负伤害仍然可以维修。 | isUnrepairableUnit: true | bool |  |
| isUnselectable | 禁止选择 | 如果为true，则无法选择单位。 （包括AI）可用于效果单位，禁止被玩家选择。 | isUnselectable: true | bool |  |
| isUnselectableAsTarget | 禁止选择和作为目标 | 默认效果为isUnselectable。可以用来创造不能被选择但是可以被攻击，回收的单位 | isUnselectableAsTarget:true | bool |  |
| isPickableStartingUnit | 为可选初始单位 | 如果为true，则将单位添加到游戏高级设置菜单中，用于可选初始单位菜单。 | isPickableStartingUnit:true | bool |  |
| startFallingWhenStartingUnit | 为可选单位开局后从天而降 | 如果为true，则游戏开始时，此单位会从从天而降。 | startFallingWhenStartingUnit: true | bool |  |
| soundOnAttackOrder | 攻击指令音效 | 填音效名称列表。用,隔开。每次下达攻击指令时只播放其中一个。仅支持.ogg和.wav格式，注意如果您mod用于pc端，则不要直接修改后缀名，要转换格式。 | soundOnAttackOrder: tankAttackOrder1.ogg:0.6, tankAttackOrder2.ogg | audios |  |
| soundOnMoveOrder | 移动指令音效 | 填声音名称列表。用,隔开。每次下达移动指令时只播放其中一个。仅支持.ogg和.wav格式，注意不要直接修改后缀名，要转换格式。 | soundOnMoveOrder: tankMoveOrder1.ogg, tankMoveOrder2.ogg | audios |  |
| soundOnNewSelection | 选择指令音效 | 填声音名称列表。用,隔开。每次下达选择指令时只播放其中一个。仅支持.ogg和.wav格式，注意不要直接修改后缀名，要转换格式。 | soundOnNewSelection: tankSelection1.ogg, tankSelection2.ogg | audios |  |
| canNotBeDirectlyAttacked | 禁止直接攻击 | 无敌，如果为true，任何单位都不能直接瞄准此单位，也不会受到范围武器伤害。则还将在胜利/失败检查中跳过检查。<br>注：如果初始单位有这个属性且可能会导致游戏开局就秒输时，Mod作者会看到警告消息 | canNotBeDirectlyAttacked: true | bool |  |
| canNotBeDamaged | 禁止受到伤害 | 无敌，可被敌方攻击，但不造成实质伤害。如果canNotBeDirectlyAttacked为true,此语句为false,则不可被直接攻击但受到范围伤害。 | canNotBeDamaged:true | bool |  |
| canNotBeGivenOrdersByPlayer | 禁止接受指令 | 如果为true，则单位不会接受玩家或AI的命令。可以选中查看信息。 | canNotBeGivenOrdersByPlayer: true | bool |  |
| canOnlyBeAttackedByUnitsWithTags | 仅许带此标签单位攻击 | 填标签，只有带有这些标签的单位才能直接定位到该单位。 | canOnlyBeAttackedByUnitsWithTags: piercingTank, powerfulTank | strings(s) |  |
| allowCaptureWhenNeutralByAI | 允许中立时被AI俘虏 | (推测,以前人机不能捕获中立单位) | allowCaptureWhenNeutralByAI:true | bool |  |
|  |  | 运输代码 |  |  |  |
| transportSlotsNeeded | 运输占用位置 | 默认值为1。此单位在运输载具中占据的格子数。 | transportSlotsNeeded: 2 | integer |  |
| maxTransportingUnits | 运输槽位数量 | 该单位载员格子数量。 | maxTransportingUnits: 5 | integer |  |
| transportUnitsRequireTag | 被运输单位需要标签 | 仅允许运输具有这些标签之一的单位。可以用于运输类型分类，如人运物资，步单位车运人，气垫船运车辆。或是子机限制，如航母飞机只能降落到航母。 | transportUnitsRequireTag: smallTank, soldier | string(s) |  |
| transportUnitsRequireMovementType | 被运输单位类型限制 | 仅允许运输具有这些移动类型之一的单位。默认陆地。比如可以设定某单位可以运输空军以实现停机坪，只运输海军等。 | transportUnitsRequireMovementType: AIR, WATER | movementTypes |  |
| transportUnitsBlockAirAndWaterUnits | 禁止运输空军和海军 | 禁止运输空军和海军，默认为true。如果为true，则此单位只能运输LAND单位。 | transportUnitsBlockAirAndWaterUnits: false | bool |  |
| transportUnitsKeepBuiltUnits | 单位建造完成时保留在载具内 | 使建造的单位留在运输者中，而不是造完直接从载具中出来。 | transportUnitsKeepBuiltUnits: true | LogicBoolean |  |
| transportUnitsCanUnloadUnits | 载具可以卸载单位 | 载具卸载单位需要满足条件，默认为“ if not self.isOverLiquid() and not self.isMoving()”(不在液体上且没有移动) | transportUnitsCanUnloadUnits: false | LogicBoolean |  |
| transportUnitsAddUnloadOption | 载具显示卸载按钮 | 是否显示卸载按钮 | transportUnitsAddUnloadOption: false | LogicBoolean |  |
| transportUnitsUnloadDelayBetweenEachUnit | 载具卸载时间间隔 | 卸载单位之间的延迟时间。 | transportUnitsUnloadDelayBetweenEachUnit: 12 | time |  |
| transportUnitsKillOnDeath | 载具内单位和载具一同死亡 | 默认为true。如果载具死亡，则其中单位也死亡。 | transportUnitsKillOnDeath: if self.isOverLiquid() | LogicBoolean |  |
| transportUnitsHealBy | 载具治疗内部单位速度 | 填数值，以帧为单位。自动治疗载具内部单位。 | transportUnitsHealBy: 0.1 | float |  |
| transportUnitsBlockOtherTransports | 载具禁止装载其它载具 | 默认值为true，如果为false，则此载具可以装载其它载具。比如步单位装物资，载具装步单位，运输船装载具。 | transportUnitsBlockOtherTransports: false | bool |  |
| whileNeutralTransportAnyTeam | 中立时可装载任意所属单位 | 如果是中立的，则这个部队可以装载任何队伍的部队。可用于占领中立单位，比如坦克需要驾驶员，步单位建筑平民建筑。 | whileNeutralTransportAnyTeam: true | bool |  |
| whileNeutralConvertToTransportedTeam | 中立时转换为载员队伍 | 中立时将其转换为载员队伍。与whileNeutralTransportAnyTeam一起使用，用于占领中立单位。 | whileNeutralConvertToTransportedTeam: true | bool |  |
| convertToNeutralIfNotTransporting | 卸载所有单位时恢复为中立 | 卸载单位时将其恢复为中立队伍。与whileNeutralTransportAnyTeam一起使用。 | convertToNeutralIfNotTransporting: true | bool |  |
| transportUnitsOnTeamChangeKeepCurrentTeam | 转换所属时保留内部单位所属 | 如果为true，则单位转换阵营时仍然将运输的单位保留在其原始队伍中。 | transportUnitsOnTeamChangeKeepCurrentTeam: true | bool |  |
| transportUnitsEachUnitAlwaysUsesSingleSlot | 载员只占用一个槽位 | 所有载员无论体积只占用一个运输槽。但体积大于载员数时仍然不能进入。 | transportUnitsEachUnitAlwaysUsesSingleSlot:true | bool |  |
| transportUnitsKeepWaypoints | 载员保持路径点 | 目前无效 | transportUnitsKeepWaypoints:true | bool |  |
|  |  | 资源节点代码 |  |  |  |
| resourceRate | 回收速率 | 回收速度。每帧回收血量。与canReclaimResources一起使用。允许其他队伍回收该单位。通常与中立队伍配合使用。使用价格来设置获取哪些资源。 | resourceRate:1 | float |  |
| similarResourcesHaveTag | 像用于此标签的单位 | 有这些标签时，资源采集单位将视为同一种资源 | similarResourcesHaveTag: goldResource | string(s) |  |
| resourceMaxConcurrentReclaimingThis | 可同时被此数目单位回收 | 默认为无限制。限制有多少单位可以同时回收此资源。 | resourceMaxConcurrentReclaimingThis: 3 | integer |  |
| reclaimPrice | 回收价格 | 自定义资源，类似价格。对于自定义资源很有用。 | reclaimPrice: gold=1000 | integer |  |
|  |  | 资源收集器代码 |  |  |  |
| canReclaimResources | 可以回收资源 | 如果为true，则此单位可以收集资源，这对于resourceRate很有用。 | canReclaimResources: true | bool |  |
| canReclaimResourcesNextSearchRange | 搜寻资源范围 | 当一处资源采集完后，搜寻更多资源的范围。 | canReclaimResourcesNextSearchRange: 100 | integer |  |
| canReclaimResourcesOnlyWithTags | 仅允许回收特定标签资源 | 仅允许回收有此标签的单位。 | canReclaimResourcesOnlyWithTags: foodResource, goldResource | string(s) |  |
| resourceReclaimMultiplier | 建造单位回收资源的乘数 | 默认为1 | resourceReclaimMultiplier:1 | float |  |
| nanoUnbuildSpeed | 建造单位回收未完成单位速度 | (俗称"蓝影"，默认为1) | nanoUnbuildSpeed:1 | float |  |
|  |  | 建筑和工厂代码 |  |  |  |
| canRepairBuildings | 可以修建筑 | 如果为true，该单位可以修复建筑。 （isBuilder：true是必需的） | canRepairBuildings: true | bool |  |
| canRepairUnits | 可以修单位 | 如果为true，此单位可以修复单位。 （isBuilder：true是必需的） | canRepairUnits: true | bool |  |
| autoRepair | 可以自动修 | 自动维修附近单位，范围为nanoRange。 （isBuilder：true是必需的） | autoRepair: true | bool |  |
| canReclaimUnitsOnlyWithTags | 仅允许回收特定标签单位 | 仅允许此单位回收具有特定标签单位。 | canReclaimUnitsOnlyWithTags:shibaInu | tags |  |
| canRepairUnitsOnlyWithTags | 仅允许维修特定标签单位 | 仅允许此单位维修具有特定标签单位。 | canRepairUnitsOnlyWithTags:cat | tags |  |
| nanoRange | 维修或建造范围 | 默认值为85。定义单位的构建/修复/回收范围。 | nanoRange: 110 | integer |  |
| nanoRepairSpeed | 维修速度 | 默认值为0.2。定义单位修复速度。 | nanoRepairSpeed: 0.01 | float |  |
| nanoBuildSpeed | 建造速度 | 默认值为1。定义单位建造速度。 （可能与目标的buildSpeed相乘） | nanoBuildSpeed: 0.9 | float |  |
| nanoReclaimSpeed | 回收速度 | 默认为nanoRepairSpeed*5.1)以符合旧版本的行为 | nanoReclaimSpeed:5.1 | float |  |
| nanoRangeForRepairIsMelee | 维修范围按近战逻辑 | 定义此单位维修时是否为近战算法，默认计算是从自身中心到目标中心，如果单位过大运动又受到阻碍，则虽然看起来很近，然而实际太远无法建造。<br>近战类算法则是算上其半径，由中心计算改为从边缘计算。 | nanoRangeForRepairIsMelee: true | bool |  |
| nanoRangeForReclaimIsMelee | 回收范围按近战逻辑 | 与上条类似，本条定义其回收范围是否为近战算法。 | nanoRangeForReclaimIsMelee: true | bool |  |
| nanoRangeForRepair | 维修距离 | 此单位维修距离。 | nanoRangeForRepair: 60 | integer |  |
| nanoRangeForReclaim | 回收距离 | 此单位回收距离。 | nanoRangeForReclaim: 60 | integer |  |
| nanoFactorySpeed | 工厂速度乘数 | 默认值为1。如果此单位是工厂，则乘以创建单位的buildSpeed值。用于加速或者减速建造。 | nanoFactorySpeed: 1.2 | float |  |
| extraBuildRangeWhenBuildingThis | 额外建造距离 | 此单位额外的建造距离，可以使建造者在更远的地方建造它，多用于水上建筑。 | extraBuildRangeWhenBuildingThis: 90 | integer |  |
| builtFrom_#_name | 从此单位建造 | 除非您向原版工厂添加单位，否则不建议使用。将该单位添加到目标建筑物中。 | builtFrom_1_name: landFactory, airFactory | string(s) |  |
| builtFrom_#_pos | 从此单位建造排序 | 在列表中的排序，越小越靠前。 | builtFrom_1_pos: 0.1 | float |  |
| builtFrom_#_forceNano | 从此单位像建筑一样建造 | 如果为true，则像构建建筑一样造此单位。 （即使是一个单位） | builtFrom_1_forceNano: true | bool |  |
| builtFrom_#_isLocked | 从此单位建造条件 | 如果为true，则无法在目标中构建此单位。 （逻辑布尔值，设置建造条件） | builtFrom_1_isLocked: if self.hp(lessThan=100) | LogicBoolean |  |
| builtFrom_#_isLockedMessage | 从此单位建造锁定信息 | 无法建造时显示的信息。 | builtFrom_1_isLockedMessage: -Needs more population | LocaleString |  |
| exit_x | 离开x轴 | 从载具卸载或者工厂生产完成时，单位出现的位置，默认为0 | exit_x: 0 | float |  |
| exit_y | 离开y轴 | 从载具卸载或者工厂生产完成时，单位出现的位置，默认为5，正数向下。 | exit_x: 5 | float |  |
| exit_dirOffset | 离开旋转角度 | 单位默认为180(朝下)，建筑物默认为0(朝右)。定义已创建或卸载单位的退出方向。 | exit_dirOffset: 140 | float |  |
| exit_heightOffset | 离开高度 | 默认值为0。定义创建或卸载的单位出现的高度。 | exit_heightOffset: 16 | float |  |
| exit_moveAwayAmount | 离开距离 | 默认值为70。定义创建或卸载的单位与该单位的距离。 | exit_moveAwayAmount: 10 | float |  |
| exitHeightIgnoreParent | 离开高度忽略父单位 | 离开时的高度不考虑父高度;用于与父单位一起建造时分离附件 | exitHeightIgnoreParent:true | bool |  |
|  |  | 死亡代码 |  |  |  |
| dieOnConstruct | 构建时死亡 | 如果为true，则创建建筑时删除自身。（目标建筑物/单位需要selfBuildRate以自动建造完成） | dieOnConstruct: true | bool |  |
| dieOnZeroEnergy | 无能量时死亡 | 如果能量值为零，该单位死亡。 | dieOnZeroEnergy: true | bool |  |
| numBitsOnDeath | 死亡产生碎片 | 定义该单位死亡时散落的碎片的数量。 | numBitsOnDeath: 20 | integer |  |
| fireOnDeath | 死亡发射武器 | 填整数，应该是炮塔的ID | fireOnDeath:1 | integer |  |
| nukeOnDeath | 死亡核爆 | 不推荐使用。建议使用死亡武器代替，其拥有更丰富的设定选项。如果为true，单位死亡时会生成一个内置的核抛射体爆炸效果。 | nukeOnDeath: true | bool |  |
| nukeOnDeathRange | 死亡核爆范围 | 不推荐使用。定义使用nukeOnDeath时的核抛射体效果范围。 | nukeOnDeathRange: 140 | float |  |
| nukeOnDeathDamage | 死亡核爆伤害 | 不推荐使用。定义使用nukeOnDeath时的核武器效果区域伤害。 | nukeOnDeathDamage: 2000 | float |  |
| nukeOnDeathDisableWhenNoNuke | 死亡核爆条件 | 不推荐使用。默认为false。如果为true，则禁用核武器时，该单位死亡时不会产生核爆炸。 | nukeOnDeathDisableWhenNoNuke: true | bool |  |
| fireTurretXAtSelfOnDeath | 死亡武器 | 死亡武器。单位死后，使用指定炮塔攻击自身所在位置。 | fireTurretXAtSelfOnDeath: turret_1 | turret ref |  |
| explodeOnDeath | 死亡爆炸 | 默认为true。如果为false，则禁用单位死亡时的内置爆炸效果。 | explodeOnDeath: false | bool |  |
| explodeOnDeathGroundCollision | 死亡撞击地面爆炸 | 默认为true。如果为false，则禁用接触地面时内置爆炸效果。 | explodeOnDeathGroundCollision: false | bool |  |
| effectOnDeath | 死亡效果 | 单位死亡时产生内置或自定义效果。 | effectOnDeath: shockwave, CUSTOM:pieces*3, CUSTOM:deathSound | effect(s) ref |  |
| effectOnDeathGroundCollision | 死亡撞击地面效果 | 类似于effectOnDeath，但当单位接触地面时。对飞行单位有用。 | effectOnDeathGroundCollision: CUSTOM:bigExplosion | effect(s) ref |  |
| explodeOnDeathGroundCollosion | 死亡撞击未地面爆炸 | 默认为true。如果为false，则使用接触地面时内置爆炸效果。 | explodeOnDeathGroundCollosion: true | bool |  |
| effectOnDeathGroundCollosion | 死亡未撞击地面效果 | 类似于effectOnDeath，但当未单位接触地面时。对飞行单位有用。 | effectOnDeathGroundCollision: CUSTOM:bigExplosion | effect(s) ref |  |
| unitsSpawnedOnDeath | 死亡产生单位 | 死亡时产生这些单位。逗号分隔的单位标识符。 | unitsSpawnedOnDeath: tank*5, hoverTank | string(s) |  |
| unitsSpawnedOnDeath_setToTeamOfLastAttacker | 死亡产生单位所属 | 如果为true，死亡时产生的单位将更改归属为最后一个攻击者的队伍。 | unitsSpawnedOnDeath_setToTeamOfLastAttacker: true | bool |  |
| hideScorchMark | 死亡痕迹 | 如果为true，则禁止单位死亡时留下焦痕。 | hideScorchMark: true | bool |  |
| soundOnDeath | 死亡音效 | 为该单位设置自定义死亡声音。 | soundOnDeath: tankExplosion1.ogg, tankExplosion2.ogg | audios |  |
| explodeTypeOnDeath | 死亡时爆炸类型 | options: verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding<br>添加内置死亡效果关键字，选项：非常小，很小，正常，大，大单位，建筑物，没有冲击波和烟雾的建筑物，非常大建筑 | explodeTypeOnDeath:small | preset effects |  |
| effectOnDeathIfUnbuilt | 没建造完成时死亡效果 | 如果这个单位没建造完成就被毁了，则播放此效果 | effectOnDeathIfUnbuilt: CUSTOM:implode | effect(s) ref |  |
| disableDeathOnZeroHp | 禁用零血死亡 | 如果为true，允许单位在0血量的情况下仍然存活，单位不会自然死亡。对自定义“死亡”动作很有用 | disableDeathOnZeroHp:true | bool |  |
|  |  | 动作代码 |  |  |  |
| autoTriggerCooldownTime | 自动触发间隔 | 设置自动触发动作间隔。默认为1s。警告：对于许多设备，将此值设置得太低可能会影响性能，具体取决于操作效果。 | autoTriggerCooldownTime:0.1s | time |  |
| autoTriggerCooldownTime_allowDangerousHighCPU | 允许超高频触发 | 自动触发冷却时间，允许高CPU占用，也就是可以使用非常高频的触发，但不建议这么做。 | autoTriggerCooldownTime_allowDangerousHighCPU:true | bool |  |
| autoTriggerCheckWhileNotBuilt | 在未建造完成时依然自动触发 | - 默认为 false - 当 true 时，即使单位未完成建造，所有自动触发器仍在运行 | autoTriggerCheckWhileNotBuilt:true | bool |  |
| autoTriggerCheckRate | 自动触发检查率 | 选项:everyFrame(默认)，every4Frames, every8Frames。<br>注意:所有触发器无论检查率都是在第一次创建和自动触发冷却之后检查的。<br>注:使用模板添加[core]autoTriggerCheckRate:every8Frames到所有单位。可以使使用了复杂autoTriggers的mod有巨大的性能提升。 | autoTriggerCheckRate:everyFrame | enum |  |
|  |  | 《《《不建议使用的代码》》》 |  |  |  |
| action_#_[actionKey] | 行动_#_[行动节代码] | 不建议使用，请改用[action_x]节 | action_1_setUnitMemory:xxx="xxx" | special value |  |
| canBuild_#_[canBuildKey] | 可建造_#_[可建造节代码] | 请改用canBuild部分。 | canBuild_1_name: tank | special value |  |
|  |  |  |  |  |  |
| 可建造 | [canBuild_NAME] | [canBuild_ID] |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| name | 名字 | 该单位可以创建的单位名列表。可以是建筑物或单位。 | name: tank, hoverTank, heavyTank | string(s) |  |
| pos | 排序 | 此单位在用户界面中排序，越小越靠上。 | pos: 0.1 | float |  |
| tech | 科技 | 没啥用。科技等级。通常只会影响此单位界面中的颜色。默认为1，只能填1、2、3。 | tech: 2 | integer |  |
| forceNano | 建造方式 | 如果为true，则将目标当作是建筑物建造。 （即使是一个单位） | forceNano: true | bool |  |
| isVisible | 可见条件 | 如果满足条件，则从界面中显示此单位。比如用于科技树。 | isVisible: if not self.energy(greaterThan=100) | LogicBoolean |  |
| isLocked | 锁定 | 如果满足条件，则从界面中锁定此单位。比如用于科技树，或是限造单位。 | isLocked: if self.hp(lessThan=100) | LogicBoolean |  |
| isLockedMessage | 锁定原因描述 | 告知玩家单位为何被锁定。 | isLockedMessage: -Needs 2 Barracks | string |  |
| isLockedMessage_[Language] | 锁定文本多语言 | 设置锁定文本在不同语言下显示的内容。语言代码点击此处。 | isLockedMessage_es: -Necesita 2 Cuarteles | string |  |
| isLockedAlt | 更多锁定原因 | 另一个被锁定原因。只是允许显示不同的消息。 | isLockedAlt: if self.energy(greaterThan=90) | LogicBoolean |  |
| isLockedAltMessage | 锁定原因描述 | 另一个被锁定原因描述。 | isLockedAltMessage: -Needs less energy | string |  |
| isLockedAlt2 | 更多锁定原因2 | 更多的锁定原因… | isLockedAlt2: if self.isMoving() | LogicBoolean |  |
| isLockedAlt2Message | 锁定文本2描述 | 更多的锁定描述… | isLockedAlt2Message: -Needs to be quiet | string |  |
| addResources | 增加资源 | 在放置建筑物或生产单位时，将这些资源添加到自身中。 | addResources: ammo=5, setFlag=1 | price(s) |  |
| price | 价格 | 覆盖单位/建筑物的价格。 默认为单位内置的价格。<br>用处如建造一个建筑时候附送一个单位。此代码可用设定为两者价钱之和,矿场600,送矿车1400,而建造时花2000,送1400,卖600,可避免玩家生成钱。 | price: credits=1000, ammo=5 | price(s) |  |
| isGuiBlinking | 界面闪烁 | 如果为true，则在UI中生成闪烁效果。 | isGuiBlinking: true | LogicBoolean |  |
| extraLagHidingInUI | 消除ui额外延迟 | 用于联机，在UI中立即更新而不需要从服务器确认的等待时间。 | extraLagHidingInUI:true | bool |  |
| type | 显示类型 | 与行动节的displayType用法相同 | type:action | string |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
| 图像 | [graphics] |  |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| image | 主体图像 | 填图片名称，格式为png。 | image:base.png | image |  |
| image_back | 背景图像 | 可选的在单位后面绘制图像，不随单位转动。可用于工厂底图，单位角标等。 | image_back:back.png | image |  |
| image_back_always_use_full_image | 图像背景总是使用完整的图像 | 默认会裁剪或拉伸或平铺到和主体图像一致. | image_back_always_use_full_image:true | bool |  |
| image_wreak | 死亡图像 | 可选的单位死亡时使用的图像。 | image_wreak:wreak.png | image |  |
| image_shield | 护盾图像 | 自定义护盾所使用的图像。 | image_shield:shibe.png | image |  |
| image_offsetX | 图像X轴偏移 | 图像在X轴偏移，用于不对称图像，比如您的单位有个吊臂，这样中心不在正中间。 | image_offsetX:10 | integer |  |
| image_offsetY | 图像Y轴偏移 | 图像在Y轴偏移,用于比较高的单位。 | image_offsetY:-20 | integer |  |
| image_offsetH | 图像高度偏移 | 图像在高度上的偏移 | image_offsetH:1.2 | float |  |
| isVisible | 可见 | 默认为true,如果为false将隐藏单位。 | isVisible: if self.hasFlag(id=1) | logicBoolean |  |
| isVisibleToEnemies | 对敌人可见 | 与showOnMinimapToEnemies,canOnlyBeAttackedByUnitsWithTags一起使用时，可以创建隐形系统。 | isVisibleToEnemies:false | bool |  |
| teamColorsUseHue | 阵营色色相 | luke不建议使用。单位上的绿色像素转换为团队颜色。 若为true整个单位都带有团队色彩。 默认为false，挺难看的。 | teamColorsUseHue:true | bool |  |
| teamColoringMode | 阵营色模式 | 设置单位着色逻辑，默认是纯绿。有四个值disabled,hueShift,hueAdd,pureGreen。(禁用，色相偏移，色相添加，纯绿) | teamColoringMode:hueAdd | string |  |
| scaleImagesTo | 缩放图像到 | 单位像素。调整图像大小以使其适合像素值。同时影响腿部和阴影图像。 | scaleImagesTo:15 | float |  |
| imageScale | 图像缩放比例 | 调整图像大小。默认值为1。也可以影响腿部和阴影图像。 | imageScale:0.9 | float |  |
| drawLayer | 绘制图层 | 陆上单位通常默认为ground或ground2。运输船为ground2。wreaks, underwater, bottom, ground, ground2, experimentals, air, top | drawLayer:ground | string |  |
| whenBeingBuiltMakeTransparentTill | 建造时透明度 | 设为0则一开始便完全不透明，设为1则直到建造完成时才不透明。 | whenBeingBuiltMakeTransparentTill:0.5 | float |  |
| icon_zoomed_out | 缩放图标 | 缩放时显示的图标 | icon_zoomed_out:tank_zoomed.png | image |  |
| icon_zoomed_out_neverShow | 缩放图标永不显示 | 缩放图标永不显示。 | icon_zoomed_out_neverShow:false | bool |  |
| icon_build | 建造图标 | 填文件名,指定图像作为单位在列表中显示的图像. | icon_build:icon_shiba.pmg | image |  |
| image_floatingPointSize | 对奇数大小的图像进行一个像素的调整 | (填写0/1,无直观区别,有说法是把x-1来改变单位坐标系使其更方便使用)--Fixes off by 1 pixel sizing for odd sized images - | image_floatingPointSize:true | bool |  |
| showSelectionIndicator | 显示选择指示 | (单位的选择框) | showSelectionIndicator:false | bool |  |
|  |  | 炮塔（也可以在每个炮塔上设置图像） |  |  |  |
| image_turret | 炮塔图像 | 所有炮塔的默认图像，也可以为每个炮塔设置专用图像。 | image_turret:tank_turret.png | image |  |
| turretImageScale | 炮塔图像缩放 | 按比例缩放炮塔图像 | turretImageScale:2 | float |  |
| teamColorsOnTurret | 炮塔使用队伍色 | 默认为false。在转塔上也应用团队颜色。 | teamColorsOnTurret:true | bool |  |
| scaleTurretImagesTo | 炮塔图像缩放 | 单位像素。缩放炮塔图像至指定像素，只用填宽度 | scaleTurretImagesTo:112.6 | float |  |
| lock_body_rotation_with_main_turret | 锁定主体旋转随主炮塔 | 锁定主体图像旋转追随主炮塔 | lock_body_rotation_with_main_turret:true | bool |  |
| lock_leg_rotation_with_main_turret | 锁定腿脚旋转随主炮塔 | 锁定腿脚图像旋转追随主炮塔 | lock_leg_rotation_with_main_turret:true | bool |  |
|  |  | 阴影 |  |  |  |
| image_shadow | 阴影图像 | 填NONE或AUTO又或者是AUTO_ANIMATED，图像文件。 | image_shadow:AUTO | image |  |
| shadowOffsetX | 阴影图像偏移X轴 | 阴影x轴偏移值，正数往右 | shadowOffsetX:1 | float |  |
| shadowOffsetY | 阴影图像偏移Y轴 | 阴影y轴偏移值，正数往下 | shadowOffsetY:2 | float |  |
| image_shadow_frames | 阴影图像指定 | true时阴影不随单位移动而改变方向。 | image_shadow_frames:true | bool |  |
| lock_shadow_rotation_with_main_turret | 阴影锁定为主炮塔方向 | 将身体图像阴影锁定到主炮塔的方向 | lock_shadow_rotation_with_main_turret:true | bool |  |
|  |  | 效果和动画 |  |  |  |
| total_frames | 图像帧数 | 默认值为1。将图像分割为指定分数，用于动画。第一帧编号为0 | total_frames:15 | integer |  |
| default_frame | 默认帧 | 指定默认显示为第几帧,默认为0即第一帧 | default_frame:1 | integer |  |
| frame_width | 图像宽度 | 设置单帧宽度，自动计算并覆盖总帧数。 | frame_width:35 | integer |  |
| frame_height | 图像高度 | 默认为图像高度 | frame_height:35 | integer |  |
| splastEffect | 水波效果 | 在水上时创建水波效果。默认为false | splastEffect:true | bool |  |
| dustEffect | 灰尘效果 | 在地面上产生灰尘效果。默认为false | dustEffect:true | bool |  |
| splastEffectReverse | 逆向水波效果 | 填true时，在倒车时也能产生效果 | splastEffectReverse:true | bool |  |
| dustEffectReverse | 逆向灰尘效果 | 填true时，在倒车时也能产生效果 | dustEffectReverse:true | bool |  |
| movementEffect | 运动效果 | 自定义运动效果，可以是内置的或者自定义的。 | movementEffect:smoke, CUSTOM:fastDust*2, CUSTOM:pop*5 | effect |  |
| movementEffectReverse | 逆向运动效果 | 自定义倒车效果。 | movementEffectReverse:smoke | effect |  |
| movementEffectRate | 运动效果频率 | 自定义效果产生频率，每隔多少帧一次。 | movementEffectRate:8 | float |  |
| movementEffectReverseFlipEffects | 逆向时反转运动效果 | 倒车时反转效果 | movementEffectReverseFlipEffects:true | bool |  |
| repairEffect | 维修效果 | 自定义维修效果，可以是任何东西。替换构建时的默认效果 | repairEffect:smoke | effect |  |
| repairEffectAtTarget | 维修目标效果 | 维修目标上产生的效果。 | repairEffectAtTarget:smoke | effect |  |
| repairEffectRate | 维修效果频率 | 维修效果每隔多少帧产生一次。 | repairEffectRate:8 | float |  |
| reclaimEffect | 回收效果 | 自定义回收效果，可以是任何东西。替换回收时的默认效果 | reclaimEffect:smoke | effect |  |
| reclaimEffectAtTarget | 回收目标效果 | 回收目标上产生的效果。 | reclaimEffectAtTarget:smoke | effect |  |
| reclaimEffectRate | 回收效果频率 | 回收效果每隔多少帧产生一次。 | reclaimEffectRate:8 | float |  |
| rotate_with_direction | 随角度旋转 | 默认为true。设置为false时将单位图像锁定为0度。通常与animation_direction_ *一起用作多向视图。 | rotate_with_direction:false | bool |  |
| animation_direction_useMainTurret | 多向动画使用主炮塔 | 多向动画的执行将以单位主炮塔的角度为基准 | animation_direction_useMainTurret:true | bool |  |
| animation_direction_units | 多向动画度数 | 每隔多少度切换一次素材,比如填45代表8个方向，90个代表4个方向的动画。与rotate_with_direction一起使用。 | animation_direction_units:45 | float |  |
| animation_direction_strideX | 多向动画x向 | 动画帧取值在X方向改变时偏移。一般填0 | animation_direction_strideX:0 | integer |  |
| animation_direction_strideY | 多向动画y向 | 动画帧在方向改变Y轴偏移偏移。与frame_height一起使用。一般填1 | animation_direction_strideY:1 | integer |  |
| animation_direction_starting | 多向动画朝向 | 第一帧的方向，取决于您的素材。您要考虑转向后避免正负数交替现象，否则会导致素材朝向异常。 | animation_direction_starting:90 | float |  |
| disableLowHpFire | 禁用低生命冒火 | 禁用低生命值时冒火的视觉效果 | disableLowHpFire:true | bool |  |
| disableLowHpSmoke | 禁用低生命冒烟 | 禁用低生命值时冒烟的视觉效果 | disableLowHpSmoke:true | bool |  |
| showTransportBar | 显示运输条 | 填true时显示运输条,false禁用。默认为true. | showTransportBar:false | bool |  |
| showHealthBar | 显示生命条 | 填true时显示生命条,false禁用。默认为true. | showHealthBar:false | bool |  |
| showHealthBarChanges | 显示生命条变动 | 填true时显示生命条的生命变动条（黄条） | showHealthBarChanges:false | bool |  |
| showEnergyBar | 显示能量条 | 填true时显示能量条,false禁用。默认为true. | showEnergyBar:false | bool |  |
| showShieldBar | 显示护盾条 | 填true时显示护盾条,false禁用。默认为true. | showShieldBar:false | bool |  |
| showQueueBar | 显示队列条 | 填true时显示操作、生成的队列条,false禁用。默认为true. | showQueueBar:false | bool |  |
| showShotDelayBar | 显示开火后的冷却条 | (默认为true) - 用于显示开火速度慢的炮塔的冷却指示条(译者注:原文calldown似乎有误，应为cooldown) | showShotDelayBar:false | bool |  |
|  |  | 《《《不建议使用的代码》》》 |  |  |  |
| animation_TYPE_[animationKey] | 动画_类型_[动画节代码] | 大部分建议改用[animation]部分 | animation_moving_body_4s:{frame:1,scale:0.5} | special value |  |
|  |  | TYPE的值目前可以是：空闲时（idle），移动中（moving），攻击时（attack） |  |  |  |
| 攻击 | [attack] |  |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| maxAttackRange | 攻击距离 | 最大攻击距离。（会乘以globalScale，但不建议使用globalScale） | maxAttackRange:999 | float |  |
| canAttack | 可以攻击 | 如果设置为false，则不能攻击任何单位。其他canAttack选项将无效。 | canAttack:true | bool |  |
| canAttackFlyingUnits | 可攻击空中单位 | 可以攻击空中单位，下面的攻击条件代码可于任意炮塔单独设置。 | canAttackFlyingUnits:true | LogicBoolean |  |
| canAttackLandUnits | 可攻击表面单位 | 可以攻击表面单位（包括陆地和水面） | canAttackLandUnits:true | LogicBoolean |  |
| canAttackUnderwaterUnits | 可攻击水下单位 | 可以攻击水下单位 | canAttackUnderwaterUnits:true | LogicBoolean |  |
| canAttackNotTouchingWaterUnits | 可以攻击非接触水单位 | 可以攻击非接触水单位，默认为true。如果是false，则只能攻击与水接触的单位，不能攻击岸上。用于鱼雷逻辑。也可以根据炮塔需要设置。 | canAttackNotTouchingWaterUnits:true | LogicBoolean |  |
| canOnlyAttackUnitsWithTags | 只攻击带特定标签单位 | 只能攻击带特定标签的单位 | canOnlyAttackUnitsWithTags:sp_spy | tags |  |
| canOnlyAttackUnitsWithoutTags | 不攻击带特定标签单位 | 不能攻击带特定标签的单位 | canOnlyAttackUnitsWithoutTags:sp_tm | tags |  |
| setMainTurretAs | 设置主炮塔 | 设置主炮塔，有些代码要锁定主炮塔，对其有用。 | setMainTurretAs:1 | turret ref |  |
| turretMultiTargeting | 每个炮塔向不同目标射击 | 允许每个炮塔同时向不同的目标射击。如果使用[turretlimitingAngle(限制角度)非常有用 | turretMultiTargeting:true | bool |  |
| isMelee | 近战 | 近战单位。与低攻击范围配合使用（例如maxAttackRange：9）可使自身和目标半径添加到范围内，并影响AI。 | isMelee:true | bool |  |
| meleeEngangementDistance | 近战索敌距离 | （必须要有isMelee:true否则使用该key会报错）使部队游猎，自动移动以攻击附近的敌方部队。近战默认为250，非近战默认为0（即使非近战也可以使用） | meleeEngangementDistance:255 | integer |  |
| turretRotateWithBody | 炮塔随主体旋转 | 炮塔随主体旋转。默认true | turretRotateWithBody:true | bool |  |
| attackMovement | 攻击移动类型 | 移动攻击类型。实际上，这条代码内可以任意填写值，但enum值例如normal/bomber。能量耗尽时，轰炸机攻击运动将后退。可填moveaway，strafing但无效。 | attackMovement:&#%<>?!<br>attackMovement:bomber | string |  |
| dieOnAttack | 自杀攻击 | 攻击时自毁。 | dieOnAttack:true | bool |  |
| removeOnAttack | 移除攻击 | 攻击时移除自身. | removeOnAttack:true | bool |  |
| isFixedFiring | 固定射击 | 必须将身体对准目标射击。通常会使得部队需要停下来才能瞄准和射击。比如火炮。 | isFixedFiring:true | bool |  |
| aimOffsetSpread | 瞄准偏移 | 将每次攻击时的偏移量乘以目标半径。默认为0.6。设为0则不偏移，对范围武器影响较大。 | aimOffsetSpread:0 | float |  |
| stopTargetingAfterFiring | 自动停火 | 单位射击后停止瞄准。很少使用或需要。如用于您不希望胡乱攻击浪费弹药的单位。 | stopTargetingAfterFiring:true | bool |  |
| disablePassiveTargeting | 不能主动攻击 | 单位只攻击手动选择的目标。很少使用或需要。如用于自爆卡车守家，如果自动攻击敌人就太蠢了。 | disablePassiveTargetingg:true | bool |  |
| showRangeUIGuide | 显示范围UI | showRangeUIGuide只在选中单位时有效，在放置单位时无效。显示攻击范围的白圈，默认true。 | showRangeUIGuide:false | bool |  |
| shootDelayMultiplier | 开火间隔乘数 | 默认为1。可以在setUnitStats动态改变 | shootDelayMultiplier:1 | float |  |
| shootDamageMultiplier | 开火伤害乘数 | 默认为1。可以在setUnitStats动态改变 | shootDamageMultiplier:1 | float |  |
|  |  | luke不推荐使用的键-可以使用，但最好在每个炮塔上进行单独设置 |  |  |  |
| turretSize | 炮塔大小 | 设置所有炮塔大小。填数值，按像素计算，不决定素材大小，而是以此为半径的开火位置。 | turretSize:10 | float |  |
| turretTurnSpeed | 炮塔转速 | 炮塔转速，单位是每帧旋转角度。 | turretTurnSpeed:1 | float |  |
| shootDelay | 攻击间隔 | 开火间隔，也可以在每个转塔上使用延迟 | shootDelay:233 | float |  |
|  |  |  |  |  |  |
| 炮塔 | [turret_NAME（非必要请填1-31的数字）] | [turret_2] |  |  |  |
| 代码 | 代码翻译 | 描述 炮塔上限31个 | 例子 | 值类型 |  |
| x | X坐标 | 坐标X | x:10 | float |  |
| y | Y坐标 | 坐标Y | y:10 | float |  |
| height | 炮塔高度 | (用于3d单位,实测链接的炮塔也会跟着改变高度)to help placement on 3d style units | height:1 | float |  |
| copyFrom | 复制数据自 | 复制指定炮塔的所有值，作为该炮塔的默认值。新写代码重复时则覆盖掉它。 | copyFrom: 1 | turret ref |  |
| projectile | 抛射体 | 使用此抛射体。默认为第一个抛射体。 | projectile:torpedo | projectile ref |  |
| altProjectile | 关联抛射体 | 当altProjectileCondition为true时，从此炮塔发射的抛射体。 | altProjectile:lowEnergy | projectile ref |  |
| altProjectileCondition | 关联抛射体条件 | 用于altProjectile | altProjectileCondition:if not self.energy(full=true) | LogicBoolean |  |
| barrelX | 抛射体x | 默认值为0。控制抛射体生成的X轴位置。 | barrelX:0 | float |  |
| barrelY | 抛射体y | 默认为大0。注意：size和barrelY含义相同 | barrelY:10 | float |  |
| barrelHeight | 抛射体高度 | 高度（用于3d）。影响抛射体产生的高度。 | barrelHeight:10 | float |  |
| size | 炮塔大小 | 控制炮塔中心与抛射体丸产生点之间的距离。 | size: 5 | float |  |
| turnSpeed | 炮塔转速 | 炮塔最大转动速度。单位度每帧。 | turnSpeed:5 | float |  |
| turnSpeedAcceleration | 炮塔旋转加速度 | 炮塔加速度，默认设置为禁用，并使用全转速度。 | turnSpeedAcceleration:1 | float |  |
| turnSpeedDeceleration | 炮塔旋转减速度 | 默认为turnSpeedAcceleration。将此值设置为高于转弯加速度可能会允许更快地命中目标 | turnSpeedDeceleration:1 | float |  |
| idleDir | 闲时角度 | 闲置时角度。 | idleDir:90 | float |  |
| idleDirReversing | 闲时角度反转 | 允许闲置时角度反转。除非连接到另一个炮塔（否则连接的炮塔在反转时通常会旋转），否则默认为idleDir + 180。如重坦逆行时炮塔转向。 | idleDirReversing:1 | float |  |
| shouldResetTurret | 空闲自动归位 | 默认为true。 填false时禁止炮塔自动归位。 | shouldResetTurret:false | bool |  |
| idleSweepAngle | 空闲扫描角度 | 炮塔闲时扫描角度。这一系列用于设置炮塔闲置时候转圈警戒动作。 | idleSweepAngle:45 | integer |  |
| idleSweepDelay | 空闲扫描间隔 | 炮塔闲时扫描间隔，多久动一次。 | idleSweepDelay:120 | float |  |
| idleSweepSpeed | 空闲扫描速度 | 炮塔闲时扫描转向的速度。 | idleSweepSpeed:0.2 | float |  |
| idleSweepCondition | 空闲扫描条件 | 炮塔闲时扫描的条件，比如单位移动但没攻击时炮塔确实是闲置的，但这时可能不该旋转。 | idleSweepCondition:if not self.isMoving() | LogicBoolean |  |
| idleSweepAddRandomDelay | 空闲扫描随机延迟 | 炮塔闲时扫描的随机延迟 | idleSweepAddRandomDelay:40 | float |  |
| idleSweepAddRandomAngle | 空闲扫描随机角度 | 炮塔闲时扫描的随机角度 | idleSweepAddRandomAngle:10 | integer |  |
| attachedTo | 链接到 | 要连接的另一个炮塔的ID，将相对于它定位，并随其旋转。 | attachedTo:1 | turret ref |  |
| slave | 隶属 | 锁定此转塔的方向，并为附加的转塔发射冷却时间。常用于多炮管单位。 | slave:true | bool |  |
| isMainNanoTurret | 是主构建炮塔 | 默认为false。用于创建建筑物的炮塔。只能在一个炮塔上为true，并且canShoot设置为false。 | isMainNanoTurret:true | bool |  |
| energyUsage | 能量需求 | 发射武器所需的能量。与resourceUsage相同：energy = X | energyUsage:1 | float |  |
| resourceUsage | 资源需求 | 可以使用资金/能源/生命/护盾/弹药等。如果不符合条件则停止攻击。credits/energy/hp/shield/ammo | resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1 | price |  |
|  |  | 计时 |  |  |  |
| delay | 开火间隔 | 设置攻击间隔，覆盖全局炮塔间隔数据。 | delay:60 | float |  |
| linkDelayWithTurret | 链接间隔 | 当另一炮塔开火时，该炮塔上的冷却延迟将被重置/删除 | linkDelayWithTurret:1 | turret ref |  |
| warmup | 预热 | 射击前延迟。需要准备多长时间才能攻击，可以制作出蓄力效果。 | warmup:10 | time |  |
| warmupCallDownRate | 预热下降速度 | 停止攻击后预热条下降速度，只支持浮点 | warmupCallDownRate:0.6 | float |  |
| warmupNoReset | 预热不重置 | 默认为false。射击后未重设真正的预热时。与warmupCallDownRate一起使用 | warmupNoReset:true | bool |  |
| warmupShootDelayTransfer | 开火间隔过渡 | 默认值为0，这是一个乘数，用于通过预热值减少下一次开火延迟。与warmupNoReset一起使用时，可以使攻击速度越来越快。 | warmupShootDelayTransfer:17 | float |  |
|  |  | 射击时 |  |  |  |
| onShoot_freezeBodyMovementFor | 射击时冻结主体 | 射击时禁止运动。 | onShoot_freezeBodyMovementFor:1.2s | time |  |
| barrelOffsetX_onOddShots | 奇数射击时抛射体偏移 | 默认0。在奇数射击时横向偏移，用于简化双管单位制作。 | barrelOffsetX_onOddShots:100 | float |  |
| yAxisScaling | Y轴比例 | 炮塔的x和y坐标会乘以这个代码所填的值 | yAxisScaling:2 | float |  |
|  |  | 定位控制 |  |  |  |
| canShoot | 可以开火 | 可以开火，默认为true | canShoot:true | bool |  |
| canAttack | 可以攻击 | 可以攻击，默认为true，不能和canShoot连用 | canAttack:true | bool |  |
| canAttackFlyingUnits | 可攻击空中单位 | 可以攻击空中单位，覆盖[attack]的设定。 | canAttackFlyingUnits:true | LogicBoolean |  |
| canAttackLandUnits | 可攻击表面单位 | 可以攻击表面单位（包括陆地和水面） | canAttackLandUnits:true | LogicBoolean |  |
| canAttackUnderwaterUnits | 可攻击水下单位 | 可以攻击水下单位 | canAttackUnderwaterUnits:true | LogicBoolean |  |
| canAttackNotTouchingWaterUnits | 可以攻击非接触水单位 | 可以攻击非接触水单位，默认为true。如果是false，则只能攻击与水接触的单位，不能攻击岸上。用于鱼雷逻辑。也可以根据炮塔需要设置。 | canAttackNotTouchingWaterUnits:true | LogicBoolean |  |
| canOnlyAttackUnitsWithTags | 只攻击带特定标签单位 | 只能攻击带特定标签的单位 | canOnlyAttackUnitsWithTags:sp_spy | tags |  |
| canOnlyAttackUnitsWithoutTags | 不攻击带特定标签单位 | 不能攻击带特定标签的单位 | canOnlyAttackUnitsWithoutTags:sp_tm | tags |  |
| canAttackCondition | 攻击条件 | 攻击需要满足条件。 | canAttackCondition: if not self.flying | LogicBoolean |  |
| clearTurretTargetAfterFiring | 射击后重置炮塔目标 | 射击后重置炮塔目标。 | clearTurretTargetAfterFiring:true | bool |  |
| limitingRange | 限制范围 | 限制此炮塔的最远攻击范围。不要将此代码应用到所有炮塔，如果需要则设置maxAttackRange。 | limitingRange:150 | float |  |
| limitingAngle | 限制角度 | 与idleDir配合。炮塔只能以+/-此角度进行攻击。 | limitingAngle:60 | float |  |
| limitingMinRange | 最小距离 | 设置炮塔的最小攻击范围，不能攻击此范围内单位，也就是死角。 | limitingMinRange: 60 | float |  |
| canAttackMaxAngle | 可攻击最大角度 | 设置炮塔的最大射击角度。如果单位在可攻击角度外则不会开火。默认值为5，不要设置得更低。可以设置为181，即不需要转向就可发射抛射体。 | canAttackMaxAngle:90 | float |  |
| interceptProjectiles_withTags | 拦截抛射体需有标签 | 拦截具有此标签的抛射体，目前铁锈用于反核武器。 | interceptProjectiles_withTags: nuke | string |  |
| interceptProjectiles_andTargetingGroundUnderDistance | 拦截抛射体检索范围 | 守护的范围，只有当敌方攻击目标地点落在此圈子内时才考虑拦截。 | interceptProjectiles_andTargetingGroundUnderDistance: 500 | integer |  |
| interceptProjectiles_andUnderDistance | 拦截抛射体攻击范围 | 默认值为2000，当抛射体到达这个距离时才开始发射拦截。 | interceptProjectiles_andUnderDistance: 1600 | integer |  |
| interceptProjectiles_andOverHeight | 拦截抛射体高度 | 需要超过此高度才会拦截。默认值为0. | interceptProjectiles_andOverHeight:50 | integer |  |
| laserDefenceEnergyUse | 激光防御能量需求 | 炮塔启用激光防御拦截敌方抛射体。还应在core中设置energyMax。 | laserDefenceEnergyUse:1 | float |  |
| aimOffsetSpread | 瞄准偏移 | 将每次攻击时的偏移量乘以目标半径。默认为0.6。设为0则不偏移，对范围武器影响较大。 | aimOffsetSpread:0 | float |  |
|  |  | 图形和效果 |  |  |  |
| invisible | 隐藏炮塔图像 | 即不显示炮塔本身图像，但是攻击什么的还是可以。 | invisible:true | LogicBoolean |  |
| image | 图像 | 使用自定义图片。覆盖单位的主炮塔图像 | image:shibaingtooth.png | image |  |
| image_drawOffsetX | 图像绘制偏移x | 炮塔图像在X轴偏移。 | image_drawOffsetX | float |  |
| image_drawOffsetY | 图像绘制偏移y | 炮塔图像在Y轴偏移。 | image_drawOffsetY | float |  |
| chargeEffectImage | 充能效果图像 | 预热时的充能效果。默认是由小变大。 | chargeEffectImage:a.png | image |  |
| warmupStartEffect | 预热效果 | 开火延迟时产生效果。 | warmupStartEffect | effects |  |
| shoot_sound | 开火音效 | 开火音效，填声音文件。有以下内置条目。attack、move、click、missile_fire、missile_hit、unit_explode、buiding_explode、<br>tank_firing、cannon_firing、gun_fire、lighting_burst、plasma_fire、plasma_fire2、firing3、firing4、large_gun_fire1、<br>large_gun_fire2、bug_die、bug_attack、interface_error、nuke_explode、nuke_launch、laser_deflect、laser_deflect2 | shoot_sound:move:0.5 | string |  |
| shoot_sound_vol | 开火音效大小 | 播放声音大小。 | shoot_sound_vol: | float |  |
| shoot_flame | 开火动画 | 开火动画，内置参考表末尾。Luke推荐为：small, large, smoke, shockwave（小，大，烟，冲击波）。可以自定义。<br>其余有：medium，largeExplosion，smallExplosion，resourcePoolSmoke，noneExplosion（中等，大爆炸，小爆炸，资源池的绿色烟，没有爆炸） | shoot_flame: smoke<br>shoot_flame: CUSTOM:lightFade | effects |  |
| shoot_light | 开火闪光 | 开火时闪光，16进制argb格式。#AARRGGBB,透明度，红，绿，蓝 | shoot_light:#afafaf | color |  |
| idleSpin | 闲时转速 | 炮塔闲置时的旋转速度,单位度每帧。 | idleSpin:2 | float |  |
| onShoot_playAnimation | 开火播放动画 | 开火后播放[Animation]中的自定义动画 | onShoot_playAnimation:animation_1 | animation ref |  |
| onShoot_triggerActions | 开火触发行为 | 每次这个炮塔开火时触发这些动作 | onShoot_triggerActions:foxsay | action ref |  |
| unloadUpToXUnitsAndGiveAttackOrder | 卸载单位并赋予攻击目标 | 在炮塔炮筒位置卸下X个单位，并让它们攻击炮塔指定的目标。 | unloadUpToXUnitsAndGiveAttackOrder:5 | integer |  |
| recoilOffset | 后坐力大小 | 开火后向前或向后推动炮塔，以产生后坐力。填像素。 | recoilOffset:-10 | float |  |
| recoilOutTime | 后坐力速度 | 开火后到达偏移位置的时间 | recoilOutTime:2 | float |  |
| recoilReturnTime | 后坐力恢复 | 开火后回到默认位置所需时间。 | recoilReturnTime:15 | float |  |
| showRangeUIGuide | 显示范围UI | 显示攻击范围的白圈。默认true. | showRangeUIGuide:false | bool |  |
|  |  |  |  |  |  |
| 抛射体 | [projectile_NAME] | [projectile_1] |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| life | 存在时间 | 开火后抛射体在没命中时的存活时间，单位为帧。60为1s。多少合适取决于速度与射程。 | life:120 | integer |  |
| delayedStartTimer | 延迟时间 | 抛射体发射延迟时间。 | delayedStartTimer:15 | time |  |
| interceptProjectile_removeTargetLifeOnly | 拦截抛射体移除目标存活时间 | 默认值为false，当为false时射抛射体移除。true时使被击中的抛射体爆炸或分裂。用于设定命中抛射体时是否执行分裂逻辑。 | interceptProjectile_removeTargetLifeOnly:false | bool |  |
| deflectionPower | 激光拦截耗能 | 默认值为1。此抛射体被激光防御摧毁所需的能量。 -1为禁止拦截。（对特殊武器如火焰） | deflectionPower:-1 | float |  |
| explodeOnEndOfLife | 寿终爆炸 | 默认为false。True则会在寿命终结时爆炸，并产生其命中时该有的效果。而不是直接消失。 | explodeOnEndOfLife:true | bool |  |
| autoTargetingOnDeadTarget | 自动切换目标 | 如果目标死亡则自动切换单位。填true时如果有代码"targetGround:true"抛射体将会追踪距离它最近的单位。如果没有"targetGround"时将会在单位死亡后再改变目标。 | autoTargetingOnDeadTarget:true | bool |  |
| autoTargetingOnDeadTargetRange | 自动切换目标检索范围 | 当旧目标死亡时选择新目标的范围 | autoTargetingOnDeadTargetRange:45 | float |  |
| autoTargetingOnDeadTargetLead | 自动切换目标预判 | 尝试新的目标时的预判 | autoTargetingOnDeadTargetLead:1 | float |  |
| unloadUpToXUnitsFromSource | 卸载单位至命中地 | 将指定个数单位卸载到抛射体爆炸位置。 | unloadUpToXUnitsFromSource:1 | integer |  |
| teleportSource | 传送 | 将单位移动到抛射体爆炸的位置，用于传送自身。 | teleportSource:true | bool |  |
| spawnUnit | 产生单位 | 在抛射体丸爆炸位置产生这种单位 | spawnUnit:heavyTank,tank*5,hoverTank(offsetX=10) | units |  |
| convertHitToSourceTeam | 命中时更改所属 | 将更改被命中的单位转换队伍为自身所属。 | convertHitToSourceTeam:true | bool |  |
| tags | 标签 | 用于抛射体拦截功能。 | tags:nuke | tags |  |
| flameWeapon | 火焰武器 | 命中时产生小火焰（仅用于装饰） | flameWeapon:true | bool |  |
| spawnProjectilesOnEndOfLife | 在寿命结束时生成抛射体 | 填抛射体名。在寿命(life)结束时生成抛射体。生成抛射体逻辑具体参数参考后面生成抛射体大项。这简化了过去许多需要多炮塔(如贯穿攻击)或是生成辅助单位才能实现的操作。 | spawnProjectilesOnEndOfLife:torpedo_split(offsetDir=90),torpedo_split(offsetDir=-90) | projectile ref |  |
| spawnProjectilesOnExplode | 在爆炸时生成抛射体 | 填抛射体名。只在爆炸时生成抛射体，如果耗光life则不会生成。 | spawnProjectilesOnExplode:shiba(offsetDir=60,recursionLimit=6) | projectile ref |  |
| spawnProjectilesOnCreate | 在创建时生成抛射体 | 填抛射体名。抛射体创建时生成抛射体。 | spawnProjectilesOnCreate:1.5,2,3,4,5 | projectile ref |  |
|  |  | 伤害 |  |  |  |
| directDamage | 直接伤害 | 击中对目标单位造成伤害。不适用于targetGround:true。 | directDamage:999 | integer |  |
| areaDamage | 范围伤害 | 范围伤害值，此区域内敌方单位都将受到损伤，默认向边缘递减。 | areaDamage:99 | integer |  |
| areaRadius | 范围半径 | 范围伤害区域大小，此区域内敌方单位都将受到损伤，默认向边缘递减。数值类型为像素，大小算法为半径，铁锈内地块一格长为20像素。 | areaRadius:99 | float |  |
| areaDamageNoFalloff | 范围伤害不衰减 | 默认false.为true时范围伤害不再向边缘递减。 | areaDamageNoFalloff:true | bool |  |
| areaRadiusFromEdge | 范围伤害从边缘计算 | 范围伤害将从单位的边缘计算，而不是默认的中心计算。主要用于攻击大型单位。 | areaRadiusFromEdge:true | bool |  |
| areaExpandTime | 范围扩展时间 | 将区域伤害变为爆炸波向边缘扩散。效果如核抛射体。 | areaExpandTime:15 | float |  |
| areaHitAirAndLandAtSameTime | 范围武器同时攻击空中和地面 | 范围武器将同时打击空中和地面。 | areaHitAirAndLandAtSameTime:true | bool |  |
| areaHitUnderwaterAlways | 范围武器可攻击深海 | 范围武器将可以打击深海单位如潜艇。 | areaHitUnderwaterAlways:true | bool |  |
| areaIgnoreUnitsCloserThan | 范围伤害忽略区域 | 小于此范围的单位不会受到攻击影响。需要比areaRadius小，否则造不成伤害。 | areaIgnoreUnitsCloserThan:20 | integer |  |
| buildingDamageMultiplier | 建筑伤害乘数 | 默认为1。对建筑物伤害乘上此数值，用于伤害修正。比如闪电对建筑物伤害低，火焰对建筑物伤害高。 | buildingDamageMultiplier:0.5 | float |  |
| shieldDamageMultiplier | 护盾伤害乘数 | 默认为1。对护盾伤害乘数。如0对护盾不造成伤害，2对护盾造成双倍伤害 | shieldDamageMultiplier:2 | float |  |
| shieldDefectionMultiplier | 护盾阻挡乘数 | 护盾阻挡乘数，填0则可无视护盾，同时对单位和盾造成伤害。<br>在此代码所填的值为负数时，公式如下：默认伤害+对盾造成的伤害*护盾阻挡乘数的相反数=实际伤害 | shieldDefectionMultiplier:0 | float |  |
| hullDamageMultiplier | 护盾损伤乘数 | 可以用来制造只影响护盾的电磁脉冲武器。0忽略单位，只伤害护盾 | hullDamageMultiplier:0 | float |  |
| ignoreParentShootDamageMultiplier | 忽略父单位射击伤害乘数 | 忽略父单位射击伤害乘数 | ignoreParentShootDamageMultiplier:true | bool |  |
| armourIgnoreAmount | 无视装甲数量 | 无视目标装甲数量并造成伤害。 | armourIgnoreAmount:10 | integer |  |
| friendlyFire | 友伤 | 范围武器有友伤，可以伤害自己单位。铁锈限制不能对盟友有伤害。负数友伤可以用于范围维修，如果修盟友则需要用中立单位实现。参数（false，true，only-ignoreEnemy）（假，真，忽略敌人的友伤） | friendlyFire: false/true/only-ignoreEnemy | bool/string |  |
| mutatorX_ifUnitWithTags | 修正需要标签 | 伤害修正所需标签，仅对携带标签单位有效。否则为原始伤害。 | mutator???？？？_ifUnitWithTags: AAA | float |  |
| mutatorX_ifUnitWithoutTags | 修正除此标签 | 伤害修正除此标签外有效。 | mutator114514_ifUnitWithoutTags: strongArmour | float |  |
| mutatorX_directDamageMultiplier | 修正直接伤害 | 伤害修正,直接伤害(directDamage)乘数。比如直接伤害100，这里填2，对目标就造成200伤害。 | mutatorABC_directDamageMultiplier:2 | float |  |
| mutatorX_areaDamageMultiplier | 修正范围伤害 | 伤害修正,范围伤害(areaDamage)乘数。比如直接伤害100，这里填2，对目标就造成200伤害。 | mutator解_areaDamageMultiplier:0.5 | float |  |
| mutatorX_changedExplodeEffect | 修正命中效果 | 如果此修正处于有效状态，则更改爆炸效果。 | mutator疑_changedExplodeEffect:custom:small | effect |  |
| mutatorX_addResourcesDirectHit | 修正直接添加资源 | 伤害修正,用于直接伤害(directDamage)，给目标添加指定资源。用途如给目标资源后，目标检测自身资源然后禁止移动。 | mutator一个_addResourcesDirectHit:shibaMove=1 | resource |  |
| mutatorX_addResourcesAreaHit | 修正区域添加资源 | 伤害修正,用于范围伤害(areaDamage)，给目标添加指定资源。 | mutator时_addResourcesAreaHit:shibaMove=1 | resource |  |
|  |  | 运动 |  |  |  |
| targetGround | 目标为地面 | 抛射体瞄准并攻击目标所在的地面，而不是追踪目标。直接伤害(directDamage)将会失效，需要使用areaDamage和areaRadius。 | targetGround:true | bool |  |
| targetGroundSpread | 目标为地面散布 | 填数值，用于目标为地面时随机造成偏差效果 | targetGroundSpread:15 | float |  |
| targetGround_includeTargetHeight | 目标为地面包括空中目标 | targetGround_includeTargetHeight:true的时候可以让targetGround:true的抛射体在瞄准空中单位后在空中爆炸 | targetGround_includeTargetHeight:true | bool |  |
| targetGroundHeightOffset | 目标为地面高度偏移 | 在目标上方或下方射击。可能对分裂和落下的抛射体有用。 | targetGroundHeightOffset:10 | float |  |
| speed | 速度 | 抛射体飞行速度，单位是每帧飞行像素。铁锈地块1格20像素，填1则每秒飞行3格。 | speed:2 | float |  |
| targetSpeed | 到达速度 | 加速到这个速度 | targetSpeed:8 | float |  |
| targetSpeedAcceleration | 加速度 | 加速度，控制targetSpeed的速度提升 | targetSpeedAcceleration:1 | float |  |
| ballistic | 弹道 | 弹道导抛射体效果，使抛射体先飞向空中并向下飞，而不是走直线。 | ballistic:true | bool |  |
| ballistic_delaymove_height | 弹道垂直飞行高度 | 弹道导抛射体发射初期效果，决定弹道一开始先升高多少，再斜向爬升到最高过度。 | ballistic_delaymove_height:1 | float |  |
| ballistic_height | 弹道高度 | 弹道最终高度。 | ballistic_height:15 | float |  |
| speedSpread | 速度散布 | 随机改变抛射体初始速度 | speedSpread:1 | float |  |
| instant | 瞬间命中 | 开火时立即击中目标,用于激光、闪电、波束。 | instant:true | bool |  |
| instantReuseLast | 瞬间命中回收最后抛射体 | 用于激光和闪电。激光或闪电命中后还会存在一段时间，当此抛射体命中后，清除上一个抛射体效果。使得只有一个抛射体存在。如使用高频射速变成光束武器，而不是瞎眼叠加。 | instantReuseLast:true | bool |  |
| instantReuseLast_alsoChangeTurretAim | 命中回收抛射体且改变瞄准 | 使炮塔瞄准受到命中目标扫描效果的影响，对光束武器有用 | instantReuseLast_alsoChangeTurretAim:true | bool |  |
| instantReuseLast_keepAreaDamageList | 命中回收抛射体区域伤害列表 | 瞬间命中并回收最后的抛射体并且保持区域伤害列表，默认false,保持列表是1.13的正常行为，造成区域伤害不会第二次生效，但不是很有用。只有当您想要旧的行为时才使用这个。 | instantReuseLast_keepAreaDamageList:false | bool |  |
| disableLeadTargeting | 禁用预判 | 瞄准移动目标时，禁用预判计算。默认为false。 | disableLeadTargeting:true | bool |  |
| leadTargetingSpeedCalculation | 预判计算 | 用于使用targetGround时预判计算。目标计算的预期速度。默认为“targetSpeed”。如果设置则基于speed. | leadTargetingSpeedCalculation:0.5 | float |  |
| initialUnguidedSpeedHeight | 初始非制导垂直速度 | 设置抛射体和地面间的垂直速度，利用gravity制造出平滑的抛物线。比较迷，填1左右，重力可以不填。 | initialUnguidedSpeedHeight:1 | float |  |
| initialUnguidedSpeedX | 初始非相对制导速度X | 让抛射体以弧线形式移动,负数向左，正数向右。 | initialUnguidedSpeedX:3 | float |  |
| initialUnguidedSpeedY | 初始非相对制导速度Y | 修改抛射体的高度，正数向下，负数向上。 | initialUnguidedSpeedY:3 | float |  |
| gravity | 重力 | 控制地面的抛射体丸的拉力。与initialUnguidedSpeedHeight一起使用。 | gravity:0.5 | float |  |
| trueGravity | 绝对向重力 | 抛射体在靠近单位时因为有该key会低空飞行一段距离，但注意不要填的太大，否则会直接往屏幕下方飞走。 | trueGravity:0.5 | float |  |
| turnSpeed | 转弯速度 | 限制抛射体的转弯速度，更好的做出弹道效果。 | turnSpeed:2 | float |  |
| turnSpeedWhenNear | 靠近时转弯速度 | 用于当射抛射体非常接近目标时，默认禁用转弯速度以使其能够命中。 | turnSpeedWhenNear:1.25 | float |  |
| wobbleAmplitude | 摆动幅度 | 抛射体飞行中摆动的剧烈程度。 | wobbleAmplitude:0.2 | float |  |
| wobbleFrequency | 摆动频率 | 抛射体飞行中摆动的频率。 | wobbleFrequency:0.8 | float |  |
| pushForce | 推动力量 | 抛射体丸所携带的“重量”,质量越大，推力越大。推动（或以负值拉动）被击中的单位。除以目标质量 | pushForce:2 | float |  |
| pushVelocity | 推进速度 | 抛射体爆炸后可用推动单位,推力相对于方向的速度，推动（或以负值拉动）被击中的单位。忽略目标质量 | pushVelocity:2 | float |  |
| moveWithParent | 随父物体移动 | 当父单位移动时也移动抛射体。对光束效果武器很有用。 | moveWithParent:true | bool |  |
| sweepOffset | 扫描偏移 | 扫描偏移，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。 | sweepOffset:10 | float |  |
| sweepSpeed | 扫描速度 | 扫描速度，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。 | sweepSpeed:10 | float |  |
| sweepOffsetFromTargetRadius | 扫描偏移目标半径 | 以目标半径作为扫描偏移量乘数，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。 | sweepOffsetFromTargetRadius:0.4 | float |  |
| retargetingInFlight | 重新瞄准在飞行时 | 在飞行过程中重新瞄准一个新的目标，非常适合投掷式武器和相互碰撞的抛射体 | retargetingInFlight:true | bool |  |
| retargetingInFlightSearchDelay | 重新瞄准在飞行时搜索延迟 | 寻找新目标之间的时间。默认5 | retargetingInFlightSearchDelay:10 | float |  |
| retargetingInFlightSearchRange | 重新瞄准在飞行时搜索范围 | 重新选择目标的范围。默认值120 | retargetingInFlightSearchRange:45 | float |  |
| retargetingInFlightSearchLead | 重新瞄准在飞行时预判 | 引导射抛射体试图击中目标。默认15 | retargetingInFlightSearchLead:1 | float |  |
| retargetingInFlightSearchOnlyTags | 重新瞄准在飞行时针对标签 | 只针对具有这些标签的单位进行重定向。 | retargetingInFlightSearchOnlyTags:tg_project | tag ref |  |
|  |  | 图形和效果 |  |  |  |
| color | 颜色 | 使用十六进制值对该抛射体重新着色，它也决定了激光颜色，颜色格式为#AARRGGBB。 | color: #bebe50 | color |  |
| teamColorRatio | 阵营色色相 | 将团队颜色混合到抛射体颜色中，填0-1。 | teamColorRatio:0.5 | float |  |
| teamColorRatio_sourceRatio | 阵营色色相比例 | 将团队颜色混合到抛射体颜色中与原色比例，默认为(1-teamColorRatio) | teamColorRatio_sourceRatio:0.5 | float |  |
| invisible | 隐藏 | 隐藏抛射体图像。 | invisible:true | bool |  |
| image | 图像 | 使用自定义图片。覆盖drawType和frame | image:233.png | image |  |
| shadowFrame | 阴影帧 | 定义哪一帧是单位的阴影 | shadowFrame:1 | integer |  |
| shadowImage | 阴影图像 | 使用自定义图片给抛射体加阴影。 | shadowImage:SHADOW:PRO_fd.png | image |  |
| drawType | 绘制类型 | 使用内置抛射体图像。 0:projectiles.png 1:projectiles_large.png 2:projectiles2.png | drawType:1 | integer |  |
| drawSize | 绘制大小 | 缩放抛射体大小。默认为1 | drawSize:0.5 | float |  |
| frame | 帧 | 使用的内置图像帧，编号从零开始。和drawType结合使用。 | frame:1 | integer |  |
| hitSound | 打击音效 | 启用命中音效，默认true | hitSound:true | bool |  |
| explodeEffect | 爆炸效果 | 抛射体爆炸效果 | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect | effect ref list |  |
| explodeEffectOnShield | 护盾上爆炸效果 | 如果目标上有护盾，则使用此效果 | explodeEffectOnShield:small | effect ref list |  |
| drawUnderUnits | 绘制与单位下 | 绘制于单位下方。 | drawUnderUnits:true | bool |  |
| effectOnCreate | 创建时效果 | 创建时效果，会追随抛射体。 | effectOnCreate:large | effect ref list |  |
| shouldRevealFog | 揭开迷雾 | 抛射体在爆炸时向玩家揭开迷雾。 | shouldRevealFog:true | bool |  |
| alwaysVisibleInFog | 迷雾中显示 | 抛射体总是在迷雾中显示。 | alwaysVisibleInFog:true | bool |  |
| nukeWeapon | 核武器 | 发射时在迷您地图上显示。还有其他一些效果。 | nukeWeapon:true | bool |  |
| trailEffect | 尾焰 | 设置为true时为默认的尾焰。但也可以指向任何自定义效果，或使用内置效果。 | trailEffect:true | bool/effect |  |
| trailEffectRate | 尾焰频率 | 尾焰产生频率，默认为3 | trailEffectRate:8 | float |  |
| lightSize | 闪光大小 | 抛射体光照大小,单位半径是地块格子 | lightSize:2 | float |  |
| lightColor | 闪光颜色 | 抛射体光照颜色,不决定激光颜色，激光由color决定。 | lightColor: #ffe92b | color |  |
| lightCastOnGround | 闪光映射到地面 | 将闪光效果映射到地面，如火炮的光和抛射体是分离的。 | lightCastOnGround:true | bool |  |
| largeHitEffect | 大的打击效果 | 为true时会产生大的爆炸效果和声音（仅用于装饰），设为false时会禁用范围武器的冲击波效果。 | largeHitEffect:true | bool |  |
| lightingEffect | 闪电效果 | 将抛射体图像修改为闪电，一般需要instant(瞬间命中)搭配. | lightingEffect:true | bool |  |
| laserEffect | 激光效果 | 将抛射体图像修改为激光。 | laserEffect:true | bool |  |
| beamImage | 波束图像 | 用于激光效果的主体图像，图像会被复制为多份显示。例如可用于做红警中的正弦波状辐射武器。因为本质是图像拼接,所以长度限制不能小于20 | beamImage:shibaray.png | image |  |
| beamImageOffsetRate | 波束偏移频率 | 波束图像的移动频率。 | beamImageOffsetRate:0 | float |  |
| beamImageStart | 波束开始图像 | 光束动画开火端效果图像 | beamImageStart:beam1_start.png | image |  |
| beamImageEnd | 波束命中图像 | 光束动画命中端效果图像 | beamImageEnd:beam1_end.png | image |  |
| beamImageStartRotated | 波束始端旋转 | 光束动画开火端效果图像是否以炮塔角度旋转旋转,默认false,不旋转. | beamImageStartRotated:true | bool |  |
| beamImageEndRotated | 波束末端旋转 | 光束动画命中端效果图像是否旋转,默认false. | beamImageEndRotated:true | bool |  |
|  |  |  |  |  |  |
| 运动 | [movement] |  |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| movementType | 运动类型 | 定义单位将能够通过的地形以及与单位类型相关的其他属性。类型：无、陆地、建筑、空中、水面、两栖、跨悬崖、跨水和悬崖<br>NONE、LAND、BUILDING、AIR、WATER、HOVER、OVER_CLIFF、OVER_CLIFF_WATER | movementType: LAND | string |  |
| moveSpeed | 移动速度 | 单位的最大移动速度。 | moveSpeed: 1.2 | float |  |
| moveAccelerationSpeed | 加速度 | 定义单位加速到最大速度的加速度。 | moveAccelerationSpeed: 0.07 | float |  |
| moveDecelerationSpeed | 减速度 | 与加速度相对应得减速度。不要设的太小。 | moveDecelerationSpeed: 0.17 | float |  |
| reverseSpeedPercentage | 倒车速度比率 | 0.6默认值。超过0.4会在短距离（以40％的速度）时反转。 如果设置为1前进后退则不转弯。 填0时禁止倒退，必须旋转。 | reverseSpeedPercentage: 0 | float |  |
| landOnGround | 降落到地面 | 闲置时使飞行器降落。可以填true/flase/onlyIdle | landOnGround: false | bool/onlyIdle |  |
| targetHeight | 到达高度 | 默认为0，但如果运动类型为空军则默认为35。 | targetHeight: 25 | float |  |
| targetHeightDrift | 高度浮动 | 默认0，空军1.5.单位高度上下浮动高度。 | targetHeightDrift: 1 | float |  |
| startingHeightOffset | 创建时高度偏移 | 单位在创建时高度。负数上升比较慢。 | startingHeightOffset:100 | float |  |
| maxTurnSpeed | 转弯速度 | 最大转弯速度。 | maxTurnSpeed:3 | float |  |
| turnAcceleration | 转弯加速度 | 转弯加速度。 | turnAcceleration:1 | float |  |
| moveSlidingMode | 移动后滑动 | 移动后滑动，相当于惯性。和单位的速度，加速度，转弯速度有关。True时受推力影响 | moveSlidingMode:true | bool |  |
| moveIgnoringBody | 移动忽略转向 | true效果即不必转弯便能运动，false效果即原地转弯完成才能运动 | moveIgnoringBody:true | bool |  |
| moveSlidingDir | 移动滑动角度 | 移动滑动角度。无明显效果。 | moveSlidingDir:100 | integer |  |
| joinsGroupFormations | 加入队形 | 将单位组成小队。铁锈调集大量部队时将其组成方阵以降低运算压力，但队形可能影响速度或浪费时间。禁用后则不参与组队。 | joinsGroupFormations:false | bool |  |
| ignoreMoveOrders | 忽略移动指令 | 忽略移动指令,此代码强制要求移动速度为0，适用例子：红警中单位部署忽略移动指令。 | ignoreMoveOrders:true | bool |  |
| moveYAxisScaling | Y轴速度比例 | 垂直方向单位移动速度乘数，适用于2.5D，也就是用铁锈模拟3D。典型如红警。 | moveYAxisScaling:15.1 | float |  |
| slowDeathFall | 死亡缓慢降落 | 为"true"时，被击毁时降落速度减慢，并且向前滑行一段距离。注意，必须设置死亡图像，不然坠落后会显示生前图像，而不是直接炸掉。 | slowDeathFall: true | bool |  |
| slowDeathFallSmoke | 死亡降落烟 | 在死亡坠落的时候添加烟作为尾迹 | slowDeathFallSmoke: true | bool |  |
| heightChangeRate | 高度改变速率 | 单位改变高度的频率，无论是转换还是浮动 | heightChangeRate: 3 | float |  |
| fallingAcceleration | 降落加速度 | 单位降落时的加速度 | fallingAcceleration:1 | float |  |
| fallingAccelerationDead | 坠毁加速度 | 单位被摧毁时降落的加速度 | fallingAccelerationDead:1 | float |  |
|  |  |  |  |  |  |
| AI | [ai] |  |  |  |  |
| 代码 | 代码翻译 | 描述  这些代码不一定都有效 | 例子 | 值类型 |  |
| useAsBuilder | 用作建造者 | 作为建造者。如果单位可以建造或维修建筑物，则设置为true。 默认为[core] isBuilder。 | useAsBuilder:true | bool |  |
| useAsTransport | 用作运输 | 作为载具。如果单位可以运输单位，则默认为true.如果您的单位可以运输又能攻击，则AI可能囤积起来而不攻击，则需要设置false. | useAsTransport:true | bool |  |
| useAsAttacker | 用作攻击者 | 是否作为攻击者。 | useAsAttacker:true | bool |  |
| useAsHarvester | 用作采集 | 作为采集者。如果单位可以回收资源，则默认为true | useAsHarvester:true | bool |  |
| disableUse | 禁用 | 禁止AI建立这个单位或建筑物 | disableUse:true | bool |  |
| ai_upgradePriority | AI升级优先级 | 升级优先级。默认值为0.06。 设置在0-1之间，越高，表示AI更有可能先于其他升级该单位。 | ai_upgradePriority:0.1 | float |  |
|  |  |  |  |  |  |
| buildPriority | 建造优先级 | 建造优先级，填0-1。 越大越AI越可能造。Luke的的第一座土地工厂使用0.8，空中工厂使用0.48，第一炮塔使用0.47。 | buildPriority:0.6 | float |  |
| noneInBaseExtraPriority | 基地内没有时优先级 | 如果AI基地中不存在此单位，则增加其优先级。 | noneInBaseExtraPriority:0.2 | float |  |
| noneGlobalExtraPriority | 全图没有时优先级 | 如果此单位在地图上的任何位置都不存在，则增加其优先级。 | noneGlobalExtraPriority:0.4 | float |  |
| nonInBaseExtraPriority | 基地内没有时的优先级 | 基地内没有时的优先级 | noneInBaseExtraPriority:0.2 | float |  |
| nonGlobalExtraPriority | 全图没有时的优先级 | 如果此单位在地图上的任何位置都不存在，则增加其优先级。 | noneGlobalExtraPriority:0.4 | float |  |
| recommendedInEachBaseNum | 推荐在每个基地的数量 | 推荐在每个基地中的数量。 | recommendedInEachBaseNum:5 | integer |  |
| recommendedInEachBasePriorityIfUnmet | 推荐条件不满足时优先级 | 如果未满足，推荐在基地中的优先级。 | recommendedInEachBasePriorityIfUnmet:0.2 | float |  |
| upgradedFrom | 升级自 | 创建到另一个单位的链接，用于保留同一单位已升级和未升级的计数。 | upgradedFrom:炮塔 | string |  |
| maxGlobal | 全图最大数量 | 全图最多拥有的数量。 | maxGlobal:10 | integer |  |
| maxEachBase | 每个基地最大数量 | 每个基地最多拥有的数量。 | maxEachBase:1 | integer |  |
| notPassivelyTargetedByOtherUnits | 不被动地被其他单位瞄准 | 允许更好的墙壁建筑物，默认情况下，这些建筑物不会瞄准目标。用于围墙（当canAttack=true时使用这条代码会报错） | notPassivelyTargetedByOtherUnits:true | bool |  |
| lowPriorityTargetForOtherUnits | 低优先级目标 | 其它单位不优先考虑此单位。用于围墙 | lowPriorityTargetForOtherUnits:true | bool |  |
| aiTags | ai标签 | 采集 |  |  |  |
| whenUsingAsHarvester_recommendedInEachBase | 每个基地此采集者数量 | 当此单位用作采集者时，每个基地推荐的采集者数量。 | whenUsingAsHarvester_recommendedInEachBase:10 | integer |  |
| whenUsingAsHarvester_recommendedGlobal | 全地图推荐采集者数量 | 当此单位用作采集者时，全图推荐的采集者数量。 | whenUsingAsHarvester_recommendedGlobal:20 | integer |  |
| whenUsingAsHarvester_includeOtherHarvesterCounts | 是否算在采集者计数中 | 当此单位用作采集者时，是否算在其它采集者统计中。 | whenUsingAsHarvester_includeOtherHarvesterCounts:false | bool |  |
| onlyUseAsHarvester_ifBaseHasUnitTagged | 有此标签才作为采集者 | 只有当基地有单位标记时才可以作为采集者使用. | onlyUseAsHarvester_ifBaseHasUnitTagged:maplace | string |  |
|  |  |  |  |  |  |
| 腿脚/胳膊 | 上限各20个 | [leg_#] / [arm_#] | [leg_1] |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
|  |  | 腿和胳膊有一个区别，腿可以自由活动，但是胳膊是天生就开了锁定运动的 |  |  |  |
| x | X坐标 | 设置脚在X轴上的位置。 | x:15 | float |  |
| y | Y坐标 | 设置脚在Y轴上的位置。 | y:15 | float |  |
| alpha | 不透明度 | 设置腿脚的透明度(建议0-1) | alpha:0.2 | float |  |
| copyFrom | 复制与 | 从另一条腿复制。仅需设置一次腿部值时有用 | copyFrom:1 | integer |  |
| attach_x | x轴链接位置 | 在X轴上设置腿部的附着点。 | attach_x: -15 | float |  |
| attach_y | Y轴链接位置 | 在Y轴上设置腿部的附着点。 | attach_y: 0 | float |  |
| rotateSpeed | 旋转速度 | 设置脚旋转速度，非对称情况下很明显。 | rotateSpeed:30 | float |  |
| endDirOffset | 末端角度偏移值 | 目标脚/末端相对于身体的旋转角度。 | endDirOffset:45 | integer |  |
| lockMovement | 锁定运动 | 禁止使用腿脚，将其锁定到主体。用于将行走单位转换为飞行单。 | lockMovement:true | bool |  |
| heightSpeed | 高度速度 | 移动时脚抬高速度和高度。 | heightSpeed:2 | float |  |
| moveSpeed | 移动速度 | 腿脚移动速度。 | moveSpeed:3 | float |  |
| moveWarmUp | 移动延迟 | 腿脚移动延迟 | moveWarmUp:15 | float |  |
| holdDisMin | 最小移动距离 | 默认值为7。如果相邻的腿还没有重新移动，则至少移动此距离。 | holdDisMin:10 | float |  |
| holdDisMax | 最大移动距离 | 默认值为16。如果已经移动超过此距离则强制重新放置腿。 | holdDisMax:40 | float |  |
| holdDisMin_maxMovingLegs | 最大移动腿数目 | 最多移动腿数目 | holdDisMin_maxMovingLegs:4 | integer |  |
| hold_moveOnlyIfFurthest | 只在最远时保持移动 | 保持移动仅在最远时候。 | hold_moveOnlyIfFurthest:true | bool |  |
| holdDisMin_checkNeighbours | 最小移动距离检查相邻 | 移动最小距离时检查相邻的腿脚。 | holdDisMin_checkNeighbours:true | bool |  |
| hardLimit | 硬性限制 | 默认值为50。强制腿部不要走的超过此数值。最好不要用到。 | hardLimit:99 | float |  |
| estimatingPositionMultiplier | 预测位置乘数 | 默认值为1。根据单位速度预测单位可用的腿脚放置位置。 | estimatingPositionMultiplier:1 | float |  |
|  |  | 图形和效果 |  |  |  |
| hidden | 隐藏 | 隐藏 | hidden:if self.isInWater() | LogicBoolean |  |
| image_end | 末端图像 | 末端图像，相当于脚。 | image_end:爪子.png | image |  |
| image_end_shadow | 末端图像阴影 | 末端图像阴影。 | image_end_shadow:SHADOW:爪子.png | image |  |
| image_end_teamColors | 末端图像队伍色 | 末端图像使用阵营色。 | image_end_teamColors:true | bool |  |
| image_foot | 脚图像 | 脚图像，与image_end相同 | image_foot:爪子.png | image |  |
| image_foot_shadow | 脚图像阴影 | 脚图像阴影。 | image_foot_shadow:SHADOW:爪子.png | image |  |
| image_middle | 中部图像 | 中部图像，相当于腿。 | image_middle:腿.png | image |  |
| image_leg | 腿图像 | 腿图像，与image_middle相同 | image_leg:腿.png | image |  |
| liftingHeightOffset | 离开高度偏移 | 离开时的脚的高度 | liftingHeightOffset:1.2 | float |  |
| targetHeight | 目标高度 | 最终高度 | targetHeight:1.5 | float |  |
| targetHeightRelative | 相对目标高度 | 相对自身的最终高度 | targetHeightRelative:1.2 | float |  |
| image_middle_teamColors | 腿图像阵营色 | 给腿也用上队伍色 | image_middle_teamColors:false | bool |  |
| draw_foot_on_top | 绘制脚在顶层 | 绘制脚在顶层。 | draw_foot_on_top:true | bool |  |
| drawOverBody | 绘制主体之上 | 绘制在主体之上。 | drawOverBody:true | bool |  |
| drawUnderAllUnits | 绘制所有单位之下 | 绘制所有单位之下。 | drawUnderAllUnits:true | bool |  |
| drawDirOffset | 绘制角度偏移 | 绘制角度偏移。 | drawDirOffset:45 | float |  |
| dust_effect | 灰尘效果 | 脚落地时产生灰尘。 | dust_effect:true | bool |  |
| spinRate | 自身自动旋转速度 | 使手臂/腿脚一直旋转，像转塔的idleSpin。用处如直升机的螺旋桨。 | spinRate:3 | float |  |
| favourOppositeSideNeighbours | 偏向于临近一侧 | 填true时，使得左右的腿脚拉开时间差，这样更好看。否则看起来顺拐。计算相邻的X比接近的Y查10倍时间。 | favourOppositeSideNeighbours:true | bool |  |
| drawLegWhenZoomedOut | 缩小时绘制腿 | 在缩小显示倍数(看到东西更多)后绘制腿。False时不绘制。为了提高绘制腿性能，默认值根据单位大小而变化。 | drawLegWhenZoomedOut:true | bool |  |
| drawFootWhenZoomedOut | 缩小时绘制脚 | 在缩小显示倍数(看到东西更多)后绘制脚。False时不绘制。为了提高绘制腿性能，默认值根据单位大小而变化。如果单独设置阴影则可能比较怪异。 | drawFootWhenZoomedOut:false | bool |  |
| explodeOnDeath | 死亡时爆炸 | 单位死亡爆炸时腿脚跟着一起爆炸 | explodeOnDeath:false | bool |  |
| resetAngle | 复位角度 | 复位角度。 | resetAngle:45 | float |  |
|  |  |  |  |  |  |
| 附属 | [attachment_NAME] | [attachment_wolf] |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| x | X坐标 | 子单位x轴位置 | x:10 | float |  |
| y | Y坐标 | 子单位Y轴位置 | y:15 | float |  |
| height | 高度 | 子单位高度。 | height:3 | float |  |
| lockDir | 锁定角度 | 是否锁定角度 | lockDir:true | bool |  |
| idleDir | 闲置方向 | 闲置时角度。 | idleDir:45 | integer |  |
| idleDirReversing | 闲置方向反转 | 允许朝向反转，比如重坦倒退移动时炮塔反转，而不需要整个单位转向。 | idleDirReversing:1 | float |  |
| isVisible | 是可见 | 是可见的。 | isVisible:true | bool |  |
| onCreateSpawnUnitOf | 创建时生成单位 | 此创造时也产生此子单位。 | onCreateSpawnUnitOf:flydog | units |  |
| canBeAttackedAndDamaged | 可被攻击或损坏 | 可以被攻击或受到伤害。 | canBeAttackedAndDamaged:true | bool |  |
| isUnselectable | 不可选择 | 是不可选择的。 | isUnselectable:true | bool |  |
| isUnselectableAsTarget | 禁止选择和作为目标 | 默认效果为isUnselectable。可以用来创造不能被选择但是可以被攻击，回收的单位 | isUnselectableAsTarget:true | bool |  |
| lockLegMovement | 锁定腿脚运动 | 锁定腿脚防止乱动。 | lockLegMovement:true | bool |  |
| freezeLegMovement | 冻结腿脚运动 | 冻结腿脚防止乱动。 | freezeLegMovement:true | bool |  |
| showMiniHp | 显示迷你血条 | 指附属单位下面那个又小又细的血条栏 | showMiniHp:false | bool |  |
| hideHp | 隐藏血量 | 隐藏单位的血量并不显示 | hideHp:true | bool |  |
| hidden | 隐藏 | 隐藏整个单位 | hidden:true | bool |  |
| keepAliveWhenParentDies | 保持子存活 | 当此单位死亡时，子单位保持存活。 | keepAliveWhenParentDies:true | bool |  |
| setDrawLayerOnTop | 绘制于顶层 | 此子单位绘制于顶层。 | setDrawLayerOnTop:true | bool |  |
| setDrawLayerOnBottom | 绘制于底层 | 此子单位绘制于底层。 | setDrawLayerOnBottom:true | bool |  |
| addTransportedUnits | 增加被运输单位 | 添加到运输单位槽中。 | addTransportedUnits:true | bool |  |
| lockRotation | 锁定旋转 | 锁定方向，禁止旋转。 | lockRotation:true | bool |  |
| rotateWithParent | 子单位一同旋转 | 旋转时子单位是否一同旋转。 | rotateWithParent:true | bool |  |
| resetRotationWhenNotAttacking | 不攻击时重置角度 | 不攻击时恢复到自身默认角度 | resetRotationWhenNotAttacking:true | bool |  |
| deattachIfWantingToMove | 移动时脱离 | 若收到移动命令，子单位将自动分离。这包括来自action的路径点。可以用来制作机场。 | deattachIfWantingToMove:true | bool |  |
| unloadInCurrentPosition | 卸载于此位置 | 卸载单位时在这个位置进行卸载 | unloadInCurrentPosition:true | bool |  |
| prioritizeParentsMainTarget | 优先考虑父单位的主要目标 | 子单位优先考虑父单位当前的目标。 | prioritizeParentsMainTarget:true | bool |  |
| alwaysAllowedToAttackParentsMainTarget | 总是攻击父单位的主要目标 | 子单位总是跟随攻击父单位的主要目标。 | alwaysAllowedToAttackParentsMainTarget:true | bool |  |
| onlyAttackParentsMainTarget | 只攻击父单位的主要目标 | 子单位只会攻击父单位的攻击目标。 | onlyAttackParentsMainTarget:true | bool |  |
| canAttack | 可攻击 | 默认值为true。设置为false以阻止子单位自动攻击。 | canAttack:true | bool |  |
| onParentTeamChangeKeepCurrentTeam | 改变队伍时子单位保持原队伍 | 默认值为false。如果为true则父单位改变队伍时子单位不改变队伍。 | onParentTeamChangeKeepCurrentTeam:true | bool |  |
| smoothlyBlendPositionWhenExistingUnitAdded | 补充时平滑移动 | 补充所装载单位至槽位时平滑移动。 | smoothlyBlendPositionWhenExistingUnitAdded:true | bool |  |
| keepWaypointsNeedingMovement | 保持需要移动路径点 | 默认值为false。当为false时，队列中任何需要移动才能完成的队列路径点都会被移除。 | keepWaypointsNeedingMovement:false | bool |  |
| showAllActionsFrom | 显示所有操作来源 | 当被选中时，在父单元列表中显示所有附加单位的动作 | showAllActionsFrom:if self.hasFlag(id=1) | LogicBoolean |  |
| createIncompleteIfParentIs | 创建随父单位 | 如果父节单位不完整，则创建子单位不完整 | createIncompleteIfParentIs:false | bool |  |
| onConvertKeepExistingUnitInSameSlot | 转换时附属仍然在同一槽位中 | 转换单位时如果有相同ID的附属槽位则子单位就会在那个槽位中 | onConvertKeepExistingUnitInSameSlot:true | bool |  |
| redirectDamageToParent | 重定向伤害到父单位 | 将对附属造成的伤害重定向到父单位，而不是伤害子单位自身。 | redirectDamageToParent:true | bool |  |
| redirectDamageToParent_shieldOnly | 重定向伤害到父单位护盾 | 只将对附属造成的伤害重定向到父单位的护盾，而不是伤害子单位自身。如果盾没了那就伤害自身，如模块蜘蛛。 | redirectDamageToParent_shieldOnly:true | bool |  |
|  |  |  |  |  |  |
| 效果 | [effect_NAME] | [effect_XXX] |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| life | 效果存在时间 | 默认值为200。到时间效果消失。 设置得尽可能低以减少效果开销。 | effect:custom:doge | float |  |
| lifeRandom | 效果存在时间随机值 | 效果存在时间的随机范围。 | lifeRandom: 12 | float |  |
| alsoEmitEffectsOnDeath | 死亡时创建效果 | 在生命耗尽的时候创造这些效果。 | alsoEmitEffectsOnDeath:shibadie | effect ref |  |
| alsoEmitEffects | 也创造效果 | 创建时创建更多效果，对于多效果很有用。 注意：创建的效果上的其他“ alsoEmitEffects”将被忽略，禁止套娃。 | alsoEmitEffects:custom:doge2 | effect ref |  |
| ifSpawnFailsEmitEffects | 如果失败则创建效果 | 如果此效果的“spawnChance”失败，则产生这些效果。 | ifSpawnFailsEmitEffects:custom:doge3 | effect ref |  |
| alsoPlaySound | 也播放音效 | 播放音效，填文件名或内置。 | alsoPlaySound:ao.ogg | file(s) (ogg/wav) |  |
| createWhenOffscreen | 可创建于画面之外 | 允许在画面之外产生此效果，默认为false。 | createWhenOffscreen:true | bool |  |
| createWhenZoomedOut | 缩小时可产生效果 | 允许缩小时产生此效果，默认值为true | createWhenZoomedOut:true | bool |  |
| createWhenOverLiquid | 创建于液体上 | 允许在液体上方产生此效果，默认值为true | createWhenOverLiquid:true | bool |  |
| createWhenOverLand | 创建于陆地上 | 允许在陆地上方产生此效果，默认值为true | createWhenOverLand:true | bool |  |
| spawnChance | 产生几率 | 默认值1.如果小于1，则效果随机被创建 | spawnChance:0.9 | float |  |
| showInFog | 在雾中显示 | 默认为false | showInFog:true | bool |  |
| delayedStartTimer | 延迟创建 | 等待这么久再播放此动画，单位为帧。 | delayedStartTimer:10 | float |  |
| delayedStartTimerRandom | 延迟创建随机时间 | 等待时间随机变化 | delayedStartTimerRandom:10 | float |  |
| liveAfterAttachedDies | 目标死后存活 | 目标死后动画继续存活,使用AttachedToUnit时默认为false. | liveAfterAttachedDies:true | bool |  |
| priority | 优先级 | 默认为high，填不同的值对应不同的效果数量上限，并且通用。verylow/low/high/veryhigh/critical(很低，低，高，很高，至关重要)（上限分别是311，321，331，341，350） | priority:low | string |  |
|  |  | 移动 |  |  |  |
| attachedToUnit | 附着在单位上 | 此效果产生时吸附到目标单位或抛射体。将与之一起移动。 | attachedToUnit:true | bool |  |
| alwayStartDirAtZero | 初始角度总是为零 | 忽略附属单位或者产者的角度。 | alwayStartDirAtZero:true | bool |  |
| atmospheric | 空气效果 | 添加阻力使此效果减慢速度，并添加随机移动。用于模拟尾焰。 | atmospheric:true | bool |  |
| physics | 物理效果 | 撞击地面时反抛射体。需要高度才能生效。 | physics:true | bool |  |
| physicsGravity | 物理重力 | 默认为1。physics:true时的垂直方向加速度。 | physicsGravity:1 | float |  |
| xOffsetRelative | X相对偏移量 | 效果起始时相对于炮塔，抛射体，单位的偏移的方向位置。正数向右，负数向左。 | xOffsetRelative:0 | float |  |
| yOffsetRelative | Y相对偏移量 | 效果起始时相对于炮塔，抛射体，单位的偏移的方向位置。正数向前，负数向后。 | yOffsetRelative:-25 | float |  |
| xOffsetRelativeRandom | X相对随机偏移量 | X相对目标随机偏移量。随机增加或减少此值，用于偏移像素。 | xOffsetRelativeRandom:1 | float |  |
| yOffsetRelativeRandom | Y相对随机偏移量 | Y相对目标随机偏移量。随机增加或减少此值，用于偏移像素。 | yOffsetRelativeRandom:10 | float |  |
| xOffsetAbsolute | X绝对偏移量 | Absolute类为绝对偏移，它不像Relative那样考虑单位的方向。比如设置x向速度为1，绝对偏移则始终向右移动，相对偏移可以向任意方向移动。 | xOffsetAbsolute:0 | float |  |
| yOffsetAbsolute | Y绝对偏移量 | 按位置偏移起动效果，忽略附加炮塔单位等的方向。 | yOffsetAbsolute:10 | float |  |
| xOffsetAbsoluteRandom | X绝对随机偏移量 | 随机增加或减少此值，用于偏移像素。 | xOffsetAbsoluteRandom:2 | float |  |
| yOffsetAbsoluteRandom | Y绝对随机偏移量 | 随机增加或减少此值，用于偏移像素。 | yOffsetAbsoluteRandom:2 | float |  |
| xSpeedRelative | X相对速度 | X轴相对于目标的移动速度。，正数向右，负数向左。 | xSpeedRelative:1 | float |  |
| ySpeedRelative | Y相对速度 | Y轴相对于目标的移动速度。正数向前，负数向后。 | ySpeedRelative:1 | float |  |
| xSpeedRelativeRandom | X随机相对速度 | 随机增加或减少此值，用于偏移像素。 | xSpeedRelativeRandom:0.1 | float |  |
| ySpeedRelativeRandom | Y随机相对速度 | 随机增加或减少此值，用于偏移像素。 | ySpeedRelativeRandom:0.1 | float |  |
| xSpeedAbsolute | X绝对速度 | X轴相对于起点的绝对移动速度。 | xSpeedAbsolute:0.1 | float |  |
| ySpeedAbsolute | Y绝对速度 | Y轴相对于起点的绝对移动速度。 | ySpeedAbsolute:0.6 | float |  |
| xSpeedAbsoluteRandom | X随机绝对速度 | 按此值随机更改初始值。 | xSpeedAbsoluteRandom:0.1 | float |  |
| ySpeedAbsoluteRandom | Y随机绝对速度 | 按此值随机更改初始值。 | ySpeedAbsoluteRandom:0.4 | float |  |
| hOffset | 高度偏移 | 距目标的高度偏移。正数向上，负数向下。 | hOffset:5 | float |  |
| hOffsetRandom | 随机高度偏移 | 按此值随机更改初始值。 | hOffsetRandom:3 | float |  |
| hSpeed | 高度速度 | 高度移动速度。正数向上，负数向下。 | hSpeed:1 | float |  |
| hSpeedRandom | 随机高度速度偏移 | 按此值随机更改初始值。 | hSpeedRandom:0.1 | float |  |
| dirOffset | 角度偏移 | 角度偏移，修改初始朝向。注意,0度可能存在朝向问题。 | dirOffset:180 | float |  |
| dirOffsetRandom | 随机角度偏移量 | 按此值随机更改偏移角度。 | dirOffsetRandom:180 | float |  |
| dirSpeed | 转速 | 修改效果的旋转速度。 | dirSpeed:5 | float |  |
| dirSpeedRandom | 随机转速 | 按此值随机更改旋转速度。 | dirSpeedRandom:2 | float |  |
| pivotOffset | 枢轴偏移 | 整个效果的朝向偏移 | pivotOffset:1.2 | float |  |
| pivotOffsetRandom | 枢轴偏移随机 | 按此值随机更改朝向。 | pivotOffsetRandom:1.2 | float |  |
|  |  | 图形 |  |  |  |
| frameIndex | 帧索引 | 使用内置效果时所取用的帧编号，0取第一帧。 | frameIndex:1 | integer |  |
| frameIndexRandom | 帧随机 | 随机增减索引值，用于随机使用同组内不同的图像。 | frameIndexRandom:1 | integer |  |
| stripIndex | 图像集 | 要使用的内置图像集。不能与自定义图像一起使用。如effects 效果1对应res内文件effects.png，以此类推。<br>explode_big爆炸效果图、light_50闪光贴花、flame开火图火焰、dust灰尘贴花、smoke_black黑烟、smoke_white白烟、shockwave冲击波、fire火焰图、lava_bubble岩浆泡、effects2效果2、plasma_shot等离子、shockwave2冲击波2、shockwave_large大冲击波、explode_bits碎片、explode_big2大爆炸、explode_bits_bug虫碎片、projectiles抛射体、projectiles2抛射体2、effects3效果3 | stripIndex:shockwave | integer/string |  |
| image | 图像 | 要使用的自定义图像文件。不能与stripIndex一起使用。 | Image:shibaing.png | image |  |
| imageShadow | 阴影图像 | 用于自定义阴影的图像 | imageShadow:SHADOW:shibaing.png | image |  |
| scaleTo | 结束缩放倍数 | 效果结束时缩放倍数。 | scaleTo:2 | float |  |
| scaleFrom | 初始缩放倍数 | 效果初始时缩放倍数，用于效果从小到大缩放，或者反向缩放。 | scaleFrom:0.5 | float |  |
| color | 颜色 | 填16进制颜色值，给图像上叠加颜色。一般建议图像使用灰度图，然后叠加颜色。注意彩色图是无法叠加白色变白的。 | color:#FFFF0000 | color |  |
| teamColorRatio | 队伍色相 | 填0-1在图像上叠加阵营色，1为完全为阵营色。 | teamColorRatio:0.5 | float |  |
| drawType | 绘制类型 | 效果的绘制类型 | drawType:displacement/normal | draw type |  |
| drawUnderUnits | 绘制在单位下方 | 将此效果绘制在单位下方。 | drawUnderUnits:true | bool |  |
| fadeInTime | 淡入时间 | 设置淡入效果时间，从透明到不透明。透明度值从0%到100%。 | fadeInTime:15 | float |  |
| fadeOut | 淡出 | 设置淡入效果时间，透明度从100%淡出到%0。把alpha设置为高于1可以延长淡出。 | fadeOut:true | bool |  |
| alpha | 不透明度 | 介于0-1之间。可以设置为大于1以延迟淡出效果 | alpha:1 | float |  |
| trailEffect | 尾焰效果 | 类似于抛射体的尾焰 | trailEffect:custom:trails | effect ref |  |
| trailEffectRate | 尾焰效果频率 | 产生频率 | trailEffectRate:0 | float |  |
| shadow | 阴影 | true时绘制阴影。如果使用imageShadow则强制为true | shadow:true | bool |  |
|  |  | 动画 |  |  |  |
| frame_width | 单帧宽度 | 规定单帧的宽度像素，如果值小于图像本体宽度则选取帧时采用换列方式进行处理。 | frame_width:1000 | integer |  |
| frame_height | 单帧高度 | 规定单帧的高度像素，如果值小于图像本体高度则选取帧时采用换行方式进行处理。 | frame_height:1000 | integer |  |
| total_frames | 动画总帧数 | 动画的总帧数，与图像(image)或frameIndex一起使用。 | total_frames:15 | integer |  |
| animateFrameStart | 动画开始帧 | 动画从哪一帧开始,第一帧编号为0 | animateFrameStart:0 | integer |  |
| animateFrameEnd | 动画结束帧 | 动画在哪一帧结束。 | animateFrameEnd:14 | integer |  |
| animateFramePingPong | 动画帧重放 | 动画正序播放完毕后再倒序播放一次。 | animateFramePingPong:true | bool |  |
| animateFrameSpeed | 动画帧速度 | 动画播放速度，单位位游戏帧，一般动画帧数也不高，所以设置一般为0.x | animateFrameSpeed:0.2 | time |  |
| animateFrameSpeedRandom | 动画帧随机速度 | 按此值随机更改动画速度。 | animateFrameSpeedRandom0.1 | time |  |
| animateFrameLooping | 动画帧循环 | 默认false。当为false时,效果被移除时，动画结束 | animateFrameLooping:false | bool |  |
| animateFrameStartRandomAdd | 动画开始帧随机偏移 | 以动画起始帧为基准，按照+/-所填数字内随机选取数字进行帧随机偏移（似乎无用） | animateFrameStartRandomAdd:10（似乎无用） | integer |  |
|  |  |  |  |  |  |
| 动画 | [animation_NAME] | [animation_ID] |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| onActions | 动画条件 | 动画触发条件：移动、攻击、闲置、在建造中、建造中并将动画拉伸至建造时长、生产中、未知、修复、回收、创建时<br>move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits、Unknown, repair, reclaim, created | onActions : Unknown<br>onActions : queuedUnits | string |  |
| onActionsQueuedUnitPlayAt | 在队列中有单位播放 | 当使用onAction:queueedUnits时，动画开始之前需要达到值，设置为0-1之间 | onActionsQueuedUnitPlayAt :1 | float |  |
| blendIn | 融入时间 | 与上一个动画融合时间。 | blendIn : time | time |  |
| blendOut | 融出时间 | 与下一个动画融合时间。 | blendOut : time | time |  |
| pingPong | 反复播放 | 结束后反向播放动画，它一般用来做生物的呼吸效果。 | pingPong:true | bool |  |
| playbackRate | 重复播放频率 | 重复播放该动画的频率 | playbackRate:1 | integer |  |
| KeyframeTimeScale | 帧时长缩放 | 缩放所有关键帧时间，这有助于在不更改所有内容的情况下更快/更慢地制作动画 | KeyframeTimeScale : float | float |  |
|  |  | 关键帧-根据需要创建多个 |  |  |  |
| arm#_[time] | 胳膊关键帧 | 添加一个关键帧。用来创建多个动作的动画。 | arm1_5s: {x: 5, dir: 90, y: 20, alpha:0.4, height:50} | list |  |
| leg#_[time] | 腿关键帧 | 添加一个关键帧。用来创建多个动作的动画。 | leg1_5s: {x: 5, dir: 90, y: 20, alpha:0.4, height:50} | list |  |
| body_[time] | 主体关键帧 | 随时为主体添加关键帧。身体仅允许使用frame和scale | body_4s: {frame: 4, scale: 0.5} | list |  |
| effect#_[time]（#处可以为空） | 效果关键帧 | 在播放动画时产生效果 | eg: effect_2s: {x: 0,y: 5, name: explode} | list |  |
| turret#_[time] | 炮塔关键帧 | 添加一个关键帧。用来创建多个动作的动画。（没有明显效果） | turret1_5s: {x: 5, y: 90 } | list |  |
|  |  | 多向动画（指单位转到特定角度所播放的动画） |  |  |  |
| direction_useMainTurret | 多向动画使用主炮塔 | 覆盖[graphics] animation_direction_useMainTurret，多向动画的执行将以单位主炮塔的角度为基准 | direction_useMainTurret:true | bool |  |
| direction_units | 多向动画度数 | 播放此动画时，覆盖[graphics] animation_direction_units。多向动画度数	45个代表8个方向，90个代表4个方向的动画。 | direction_units:45 | float |  |
| direction_strideX | 多向动画x向 | 覆盖[graphics] animation_direction_strideX，动画帧取值在方向改变时偏移。一般填0 | direction_strideX:0 | integer |  |
| direction_strideY | 多向动画y向 | 覆盖[graphics] animation_direction_strideY，动画帧在方向改变Y轴偏移偏移。与frame_height一起使用。一般填1 | direction_strideY:1 | integer |  |
| direction_starting | 多向动画朝向 | 覆盖[graphics] animation_direction_starting，第一帧的方向，取决于您的素材。 | direction_starting:90 | float |  |
|  |  | 《《《不建议使用的代码》》》 |  |  |  |
| start | 开始 | 开始图像框。不推荐使用，用于类似此形式的动画。animation_TYPE_pingPong | start:1 | integer |  |
| end | 结束 | 结束图像帧。不推荐使用 | end:3 | integer |  |
| scale_start | 缩放开始 | 开始规模。不推荐使用，而是使用主体关键帧。 | scale_start:2 | float |  |
| scale_end | 缩放结束 | 最终规模。不推荐使用，而是使用主体关键帧。 | scale_end:2 | float |  |
| speed | 速度 | 速度越小越快。仅效果开始，结束，scale_start，scale_end | speed:1 | float |  |
|  |  |  |  |  |  |
| 行动/隐藏行动 | [action_NAME] / [hiddenAction_NAME] | [hiddenAction_ID] |  |  |  |
| 代码 | 代码翻译 | 一个单位最多同时进行11个行动事件 | 例子 | 值类型 |  |
| text | 文本 | 界面中显示的文字 | text:chemms | string |  |
| textPostFix | 文本后缀 | 显示为后缀的文本，与textAddUnitName一起用于创建文本UI | text: [ <br>textPostFix: ] <br>textAddUnitName: unitRef self.attachment(slot="${slotId}") | string |  |
| text_[Language] | 文字多语言 | 界面中显示的文字，多语言 | text_zh:chemms | string |  |
| description | 描述 | 选中时显示的文本，用于解释其用途。 | description:chemms翻译 | string |  |
| description_[Language] | 描述 | 描述多语言。 | description_en:shibainu | string |  |
| displayType | 显示类型 | 行动的显示类型正常模式为无(绿色)、集结(白色R)、升级(蓝色U)、单位队列（绿色）、建筑(绿色)、行为(蓝色)、仅信息(灰色)、无框信息、仅信息库存（灰色）<br>none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox,infoOnlyStockpile | displayType:infoOnly | string |  |
| displayRemainingStockpile | 显示剩余库存 | 显示剩余库存,显示为根据资源计算可以触发操作的次数。 | displayRemainingStockpile:true | bool |  |
| pos | 位置 | 此动作在用户界面排序。 | pos:0 | float |  |
| iconImage | 图标 | 使用图像作为此动作图标。 | iconImage:shiba.png | image |  |
| iconExtraImage | 额外图标图像 | 使用图像作为此动作图标。和上一个一致,但显示更靠上。绘制在图标图像上方。对升级图标等有用 | iconExtraImage:shibaUPD.png | image |  |
| iconExtraColor | 额外图标颜色 | 将图标叠加上额外的颜色。默认为#64FFFFFF | iconExtraColor:#FFAAAAAA | color |  |
| iconExtraIsVisible | 额外图标显示条件 | 设置图标什么时候可显示。 | iconExtraIsVisible:if self.hasFlag(id=${slotid}) | LogicBoolean |  |
| unitShownInUI | UI中显示的单位 | 使用此单位作为动作图标。 | unitShownInUI: unitRef self.transporting(slot=0)<br>unitShownInUI:shibainu | unit |  |
| setBuilt | 设置完成度 | 默认为1。填0-1之间的数字，将指定单位建造完成度。比如填0.5，执行完操作后单位自身建造完成度就成了50% | setBuilt:1 | float |  |
| guiBuildUnit | 界面显示单位 | 将action图标和鼠标指针改为指定单位，这就像您用建造者去造建筑，会受地形影响，可为action或路径点提供坐标。 | guiBuildUnit:turret_artillery | unit |  |
| tags | 标签 | (在使用队列大小时可以用withActionTag=x来获取数量)<br>Used with queueSize(withActionTag=x) and queueItemAdded(withActionTag=x) | tags:customTag1,customTag2 | string(s) |  |
| id | 编号 | 允许在单位之间转换时更容易的连接动作（action的id，应该有对应的引用词） | id:1 | string |  |
| aiTags | AI的标签 | 随便填一个得了(专门给AI用的) | aiTags:doge | string(s) |  |
|  |  | 单位参考-从已经存在的单位动态的组成部分，有用的/也可以被敌人看到 |  |  |  |
|  |  | self, self.parent(), self.transporting(slot=S), self.attachment(slot=S) |  |  |  |
| textAddUnitName | 从单元添加名称 | 从指定单位添加名称。 | textAddUnitName:${section.convertTo} | unit ref/unit |  |
| descriptionAddFromUnit | 从单元添加描述 | 从指定单位添加单位描述。 | descriptionAddFromUnit:unitRef self.attachment(slot="unitSlot${slotId}") | unit ref/unit |  |
| descriptionAddUnitStats | 从单元添加属性 | 从指定单位添加详细信息描述，比如攻击力，攻击范围。 | descriptionAddUnitStats:unitRef self.attachment(slot="unitSlot${slotId}") | unit ref/unit |  |
| unitShownInUIWithHpBar | 单元在UI显示Hp条 | 在ui中显示单位血条。默认true,仅当unitShownInUI是unitRef时使用 | unitShownInUIWithHpBar:true | bool |  |
| unitShownInUIWithProgressBar | 单元在UI显示进度条 | 在ui中显示单位进度条。默认true,仅当unitShownInUI是unitRef时使用。如果激活，则替换HP bar | unitShownInUIWithProgressBar:true | bool |  |
|  |  | 在UI中显示/ AI的要求 |  |  |  |
| price | 价格 | 此行为需要的价格，可以是多种资源或自定义资源。如果不满足则行为不可用。如果没设定资源类型则默认为资金。如果价格为0，AI可能很少甚至不会使用。 | price: credits=5, energy=5, hp=100, shield=5, ammo=1 | resources |  |
| isActive | 可用 | 默认为true。如果为false，则会禁用操作，并在用户界面中以红色显示。 | isActive:true | LogicBoolean |  |
| isVisible | 可见 | 默认为true。如果false则从UI中隐藏并被禁用。 | isVisible:true | LogicBoolean |  |
| isLocked | 锁定 | 默认为false。如果true则禁用操作，则会显示一个锁定文本。可用作禁核或者科技树，或是条件限制。 | isLocked:true | LogicBoolean |  |
| isLockedMessage | 锁定消息 | 显示锁定的原因。 | isLockedMessage:您不够可爱 | string |  |
| isLockedAlt | 更多锁定 | 另一个原因被锁定。用于显示不同的消息。 | isLockedAlt:if not self.isFlying() | LogicBoolean |  |
| isLockedAltMessage | 更多锁定消息 | 显示更多锁定的原因。 | isLockedAltMessage:上天才给您施展。 | string |  |
| isLockedAlt2 | 更多锁定2 | 另一个原因被锁定。用于显示更多锁定的原因。 | isLockedAlt2:if self.isInWater() | LogicBoolean |  |
| isLockedAlt2Message | 更多锁定消息2 | 显示更多锁定的原因。 | isLockedAlt2Message:水中自然要划水了~ | string |  |
| allowMultipleInQueue | 允许多个队列 | 允许多次点击此行为形成队列，false时则只能点一次，不能累加。 | allowMultipleInQueue:true | bool |  |
| onlyOneUnitAtATime | 一次只有一个单位 | 填true时选中多个同类单位时，只有一个执行此行为。 | onlyOneUnitAtATime:true | bool |  |
| isGuiBlinking | 界面闪烁 | 此行为在界面中闪烁。 | isGuiBlinking:true | LogicBoolean |  |
| alwaysSinglePress | 总是按一次 | 点击就执行，不需要确认。默认false,不需要在手机上确认，使用canPlayerCancel: false和allowMultipleInQueue: false也隐藏队列接口。 | alwaysSinglePress | bool |  |
| isAlsoViewableByAllies | 显示给盟友 | 允许盟友玩家看到这个单位的动作，对显示其他玩家有用(例如导抛射体数量，收集的物品) | isAlsoViewableByAllies:false | bool |  |
| isAlsoViewableByEnemies | 显示给敌人 | 允许敌方玩家看到这个单位的动作，对显示其他玩家有用(例如导抛射体数量，收集的物品) | isAlsoViewableByEnemies:false | bool |  |
| extraLagHidingInUI | 消除ui额外延迟 | 用于联机，在UI中立即更新而不需要从服务器确认的等待时间。 | extraLagHidingInUI:true | bool |  |
| streamingCost | 流式造价 | 就像价格，但在建造时逐渐消耗资金，如果在构建过程中资源耗尽，建造或生产队列将暂停。就像是红警中那样。铁锈默认是预先扣除资金。 | streamingCos:100 | integer(price) |  |
| switchPriceWithStreamingCost | 切换价格为流造价 | 快捷设置为默认资金消耗方式或为流式建造方式。建议使用模板快速将一个模组为所有单位切换流资源。 | switchPriceWithStreamingCost:true | bool |  |
| aiUse | AI对该行动的使用方式 | 可填：auto(自动)，launch（发射），launchAmmo（发射弹药），disabled（残缺），upGrade(升级)，movementChange(运动改变)，sameAsBuilding（与建筑物相同） | aiUse:launch | use type |  |
|  |  | AI使用方式 |  |  |  |
| ai_isDisabled | AI被禁用 | 默认为false。使用此操作停止AI使用此动作。 | ai_isDisabled:true | LogicBoolean |  |
| ai_isHighPriority | AI高优先级 | AI将优先执行此动作。 | ai_isHighPriority:true | LogicBoolean |  |
| ai_considerSameAsBuilding | AI作为建筑 | 填建筑。考虑动作的优先级将会跟建筑物建优先级一样。 | ai_considerSameAsBuilding:BU_cq | unit |  |
|  |  | 触发器-这些触发器跳过队列并且不使用价格，忽略isLocked，buildTime等 |  |  |  |
| autoTriggerOnEvent | 自动触发事件 | 满足此条件则自动触发。参数表：<br>创建，完成且激活，销毁，杀死任何单位，队列中单位完成，队列添加项目，队列项目取消，传送，接触目标成功，玩家指定路径，队伍变更，运输新单位，卸载或移除单位，受到伤害[支持可选的(withTag=x)]，进入载具，离开载具，新消息（withTag=x），移除附属，无<br>created, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded(1,15p9中添加了withActionTag和queueItemCancelled两个参数,用于触发动作时检测标签.), queueItemCancelled, teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit，transportUnloadedOrRemovedUnit，tookDamage[支持可选的(withTag=x)],enteredTransport,leftTransport,newMessage(withTag=x),attachmentRemoved，NONE | autoTriggerOnEvent:destroyed | event type |  |
| alsoTriggerOrQueueActionWithTarget | 也可以使用单位参考触发或队列操作 | 更改其他触发动作的目标，默认为当前动作的目标。影响诸如 fireTurretXAtGround、spawnUnits、thisActionTarget()等。 | alsoTriggerOrQueueActionWithTarget:nearestUnit() | unit ref |  |
| autoTriggerOnEventRecursionLimit | 自动触发事件递归限制(默认为1) | 自己触发自己的限制次数，默认为1 | autoTriggerOnEventRecursionLimit:1 | integer |  |
| autoTrigger | 自动触发 | 如果为true，则立即触发此操作的效果（忽略价格，isActive，isVisible，buildSpeed等） | autoTrigger: if self.overWater() | LogicBoolean |  |
| autoTriggerCheckRate | 自动触发检查率 | 选项:everyFrame(默认)，every4Frames, every8Frames。<br>注意:所有触发器无论检查率都是在第一次创建和自动触发冷却之后检查的。<br>注:使用模板添加[core]autoTriggerCheckRate:every8Frames到所有单位。可以使使用了复杂autoTriggers的mod有巨大的性能提升。 | autoTriggerCheckRate:everyFrame | enum |  |
|  |  | 当在队列时(准备)时 |  |  |  |
| buildSpeed | 建造速度 | 建造此动作所需要的时间，这个读条过程下面称之为准备以区分建造，机翻或是多个动作称之为队列。完成时的效果称为结果。 | buildSpeed:1s | time |  |
| buildSpeed_ignoreFactorySpeedModifiers | 建造速度忽略工厂乘数 | 建造此动作所需要的时间忽略[core]的工厂速度乘数以及工厂倍数 | buildSpeed_ignoreFactorySpeedModifiers:true | bool |  |
| refundAllQueuedItems | 取消所有队列项目 | 并返还资源 | refundAllQueuedItems:true | bool |  |
| removeAllQueuedItemsWithoutRefund | 移除所有未建造完成的队列项目 | 不返还资源 | removeAllQueuedItemsWithoutRefund:true | bool |  |
| highPriorityQueue | 高优先级队列 | 默认为false。如果为true，则此操作将跳过队列中的所有其他低优先级操作。适用于fireTurret类动作。 | highPriorityQueue:true | bool |  |
| canPlayerCancel | 玩家可以取消 | 玩家可以取消此动作。 | canPlayerCancel:true | bool |  |
| whenBuilding_cannotMove | 建造时无法移动 | 执行操作准备时停止单位移动。适用于类似部署类动作。 | whenBuilding_cannotMove:true | bool |  |
| whenBuilding_playAnimation | 建造时播放动画 | 准备此动作时，播放[animation]中自定义的动画。 | whenBuilding_playAnimation:AM_shiba | animation ref |  |
| whenBuilding_rotateTo | 建造时旋转 | 准备此动作时，将单位主体旋转到该方向 | whenBuilding_rotateTo:-180 | float |  |
| whenBuilding_rotateTo_orBackwards | 建造时旋转或反转 | 如果为true，则当角度较小时，允许从whenBuilding_rotateTo旋转180度。 | whenBuilding_rotateTo_orBackwards:true | bool |  |
| whenBuilding_rotateTo_waitTillRotated | 建造时需等待旋转完成 | 暂停准备的行为，直到旋转完成再继续。 | whenBuilding_rotateTo_waitTillRotated:true | bool |  |
| whenBuilding_temporarilyConvertTo | 建造时临时转换为 | 准备此操作时临时转换为另一个单位。原始单位的操作将保留。 | whenBuilding_temporarilyConvertTo:TEM_shiba | unit ref |  |
| whenBuilding_temporarilyConvertTo_keepFields | 建造时保留字段 | 不要在使用whenbuilding_temporaryconvertto时更改这些字段(无论是从或到)，这对setUnitStats很有用 | whenBuilding_temporarilyConvertTo_keepFields:maxHp | fields |  |
| whenBuilding_triggerAction | 建造时触发动作 | 准备时触发另一个动作 | whenBuilding_triggerAction:ACT_shiba | action |  |
| whenBuilding_rotateTo_aimAtActionTarget | 建造时转向直至瞄准目标 | 准备时转向瞄准目标,luke:测试版注意:在某些情况下是坏的 | whenBuilding_rotateTo_aimAtActionTarget:true | bool |  |
| whenBuilding_rotateTo_rotateTurretX | 建造时转向指定炮塔 | 准备此操作时转向指定炮塔。 | whenBuilding_rotateTo_rotateTurretX:shi | turret ref |  |
| spawnEffectsOnQueue | 队列产生效果 | 动作准备开始时产生的效果。 | spawnEffectsOnQueue:custom:shiba | effect ref |  |
| playSoundToPlayerOnQueue | 队列播放声音 | 动作准备时播放给玩家的声音。 | playSoundToPlayerOnQueue:shiba.ogg | file(s) (ogg/wav) |  |
|  |  | 杂项结果/结果（发生的情况）<br>（注意：要显示的动作必须至少有一项结果，或者有isVisible:true） |  |  |  |
| requireConditional | 需要条件 | 如果结果为false，则跳过此操作所有结果。 | requireConditional:if not numberOfUnitsInTeam(withTag='shiba',withinRange=233,greaterThan=0) | LogicBoolean |  |
| convertTo | 转换成 | 将您的单位转换为另一个单位。许多属性被保留。 | convertTo:SC_shiba | unit |  |
| convertTo_keepCurrentTags | 转换时保留标签 | 将单位转换为另一个单位。并且保留拥有的标签。 | convertTo_keepCurrentTags:true | bool |  |
| convertTo_keepCurrentFields | 转换时保留字段 | 转换时不要更改这些字段，这在setUnitStats中很有用 | convertTo_keepCurrentFields:maxHp | fields |  |
| addEnergy | 增加能量 | 为单位增加能量。需要设置了energyMax，否则不起作用。（与addResources相同：energy = X） | addEnergy:1 | float |  |
| addResources | 添加资源 | 操作完成后，添加这些资源。 | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 | resources |  |
| addResourcesScaledByAIHandicaps | 根据AI难度添加资源。 | 与addResources类似，但根据AI难度级别增加或减少。比例：最简单40%、简单70%、中等100%、困难140%、很困难180%、不可能370% | addResourcesScaledByAIHandicaps:true/[resource] | bool/resource |  |
| addResourcesWithLogic | 用逻辑添加资源 | 与addResources类似，但允许对资源值使用逻辑 | addResourcesWithLogic: hp = select( self.parent.energy>5, 10, 20 ) | LogicOperation |  |
| setResourcesWithLogic | 用逻辑设置资源 | 将目标资源设置为此值，而不是添加。小心对全局资源使用。 | setResourcesWithLogic: hp=self.parent.hp - 10, energy = self.energy / 2 | LogicOperation |  |
|  |  |  |  |  |  |
| deleteSelf | 删除自身 | 删除执行此操作的单位，没有死亡效果，不执行死亡触发。 | deleteSelf:true | bool |  |
| resetCustomTimer | 重置自定义计时器 | 重置自定义计时器，与self.customTimer() | resetCustomTimer:if self.customTimer(laterThanSeconds=5) | LogicBoolean |  |
| setBodyRotation | 设置躯干旋转 | 设置单位旋转度数。单位朝右为0度。因为是结果而不是准备过程，所以很突然。（支持动态数字比如memory） | setBodyRotation:memory.dir | LogicNumber |  |
| setHeight | 设置高度 | 新增设置高度，可以使用逻辑 | setHeight:self.hp | LogicNumber |  |
| setUnitStats | 设置单位状态 | 字段值。允许在不转换的情况下动态更改选定的字段数量。支持=/+=/-=，动态数学/逻辑。可以改变的领域:maxHp(血量上限)，hp(血量)，selfRegenRate(自身回血速度)，maxShield(护盾上限)，shield(护盾)，shieldRegen(护盾恢复速度)，maxEnergy(能量上限)，energy(能量)，armour(装甲)，mass(质量)，shootDelayMultiplier(开火间隔倍数)，shootDamageMultiplier(开火伤害倍数)，movespeed(最大移动速度)，maxTurnSpeed(最大转弯速度)，maxAttackRange(最大攻击距离)，nanoRange(修复范围)，fogOfWarSightRange(迷雾视野)，nanoFactorySpeed(工厂制造速度倍数)，targetHeight(单位最终高度) | setUnitStats: maxHp+=self.energy+100, hp+=50, shieldRegen=0.5 | fields values |  |
| resetUnitStats | 重置单位状态 | 将setUnitStats所做的更改重置为基本值 | resetUnitStats:true | bool |  |
| shrinkArrays | 简化数组 | 去掉null项或死亡单位项还有为零的项，然后向前压缩 | shrinkArrays:<array memory:name> | array memory name |  |
| setUnitMemory | 设置单位内存 | 键值对。改变此单元的内存，值可以用逻辑设定。内存必须首先用defineUnitMemory或@memory定义。<br>注：<br>设置内存时 需要加上数组下标<br>eg. setUnitMemory: numArray[0]=2<br>数组下标从0开始 | setUnitMemory: """<br>customText=memory.customText+'hello',<br>nukeActive=true, <br>nextTarget=self.attacking.nearestUnit(withinRange=300, withTag='x', relation='enemy')<br>""" | key value pairs |  |
|  |  | 结果-连锁动作 |  |  |  |
| alsoTriggerAction | 也执行动作 | 触发其他动作的结果。忽略行动的要求。 | alsoTriggerAction: addCredits, playSound | action ref |  |
| alsoTriggerActionRepeat | 重复"也触发行动(alsoTriggerAction)"调用 | logic number (Repeats the alsoTriggerAction call, index changed on each repeat) - Useful to create loops or work with arrays<br>（动态数字）（每次重复时改变索引 用于创建循环或处理数组） | alsoTriggerActionRepeat:self.hp | logicNumber |  |
| alsoQueueAction | 也添加进队列 | 将另一个动作添加到序列中。忽略行动的要求 | alsoQueueAction | action ref |  |
| alsoTriggerOrQueueActionConditional | 也执行队列或需执行条件 | 将此操作添加到序列。如果条件不满足(false)则忽略alsoQueueAction。默认true. | alsoTriggerOrQueueActionConditional:if not self.isFlying() | LogicBoolean |  |
|  |  | 结果-声音 |  |  |  |
| playSoundAtUnit | 播放声音至单位 | 动作结束时在当前位置播放声音。 | playSoundAtUnit:shiba.ogg | file(s) (ogg/wav) |  |
| playSoundGlobally | 播放声音至全图 | 播放全局声音，所有玩家都能听到。 | playSoundGlobally:shiba.ogg:0.5 | file(s) (ogg/wav) |  |
| playSoundToPlayer | 播放声音至玩家 | 播放声音，只有自己能听到。 | playSoundToPlayer:shiba.ogg:999 | file(s) (ogg/wav) |  |
|  |  | 结果-炮塔发射抛射体 |  |  |  |
| fireTurretXAtGround | 指定攻击地面炮塔 | 使用此炮塔攻击玩家所指定的地面。 | fireTurretXAtGround: nukeSilo | turret ref |  |
| fireTurretXAtGround_withOffset | 指定攻击地面坐标 | 攻击指定坐标所在地面，不需要手动选择， | fireTurretXAtGround_withOffset: 0,0 | pointeger |  |
| fireTurretXAtGround_withProjectile | 指定攻击地面抛射体 | 设定使用的抛射体，如果不设置则为炮塔默认的抛射体。 | fireTurretXAtGround_withProjectile:PRO_1 | projectile ref |  |
| fireTurretXAtGround_showGuideDecals | 指定攻击地面时显示贴花 | 当选择发射位置时显示贴花(参考核抛射体选择发射地点时长按显示) | fireTurretXAtGround_showGuideDecals:<decal:name> | decal name(贴花名称) |  |
| fireTurretXAtGround_withTarget | 指定攻击目标 | 炮塔瞄准指示的单位或标记的位置发射 | fireTurretXAtGround_withTarget:self.lastDamagedBy | unitref |  |
| fireTurretXAtGround_count | 指定攻击地面数量 | 设置发射的抛射体数量，默认为1 | fireTurretXAtGround_count:9 | integer |  |
| fireTurretXAtGround_onlyOverPassableTileOf | 指定攻击地面类型 | 设置手动选择的地面需要满足这种运动方式。列表：无，陆地，建筑，空军，水。两栖，跨悬崖，跨悬崖和度水。<br>NONE LAND BUILDING AIR WATER HOVER OVER_CLIFF OVER_CLIFF_WATER | fireTurretXAtGround_onlyOverPassableTileOf:LAND | string |  |
|  |  | 结果-生成单位 |  |  |  |
| spawnUnits | 产生单位 | 产生指定单位，可用是多种。 | eg: spawnUnits: heavyTank, tank*5, hoverTank(offsetX=10) | units |  |
| spawnEffects | 产生效果 | 产生指定效果 | spawnEffects:custom:shiba | effect ref |  |
| produceUnits | 生产单位 | 类似spawnUnits，但是单位像正常生产一样，并获得路径的移动。1.13只对非建筑物生成的单位有效。 | produceUnits:bigshibainu | units |  |
|  |  | 结果-位置 |  |  |  |
| offsetSelfAbsolute | 自身位置偏移 | 使用时将修改单位当前位置，以单位为中心的绝对坐标。 | offsetSelfAbsolute: 0, 0, 40 [x,y,height] | integer list |  |
| teleportTo | 传送到 | 传送到(填单位参考) | teleportTo:nearestUnit | unit ref |  |
|  |  | 结果-运输变化 |  |  |  |
| transportTargetNow | 主动装运目标 | 主动装运目标(填单位参考)（luke考虑在1.16p1及以后版本删除该代码） | transportTargetNow:nearestUnit | unit ref |  |
| addUnitsIntoTransport | 添加单位到载具 | 将单位添加到运输槽中，在添加之前会检查空间是否够。 | addUnitsIntoTransport: tank*3, heavyTank | unit list |  |
| deleteNumUnitsFromTransport | 从载具中删除单位数 | 从载具中删除指定数量单位。 | deleteNumUnitsFromTransport:3 | integer |  |
| deleteNumUnitsFromTransport_onlyWithTags | 从载具删除带标签单位 | 从载具中删除具有此标签的指定数量单位。 | deleteNumUnitsFromTransport_onlyWithTags:cat | string |  |
| startUnloadingTransport | 开始卸载单位 | 开始卸载单位 | startUnloadingTransport:true | bool |  |
| forceUnloadTransportNow | 强制卸载单位 | 立即强制卸载单位 | forceUnloadTransportNow:true | bool |  |
| forceUnloadTransportNow_onlyOnSlot | 强制卸载指定槽位单位 | 强制卸载指定槽位单位 | forceUnloadTransportNow_onlyOnSlot:1 | integer |  |
|  |  | 结果-路径点 |  |  |  |
| clearAllWaypoints | 清除所有路径点 | 清除当前所有路径。 | clearAllWaypoints:true | bool |  |
| clearActiveWaypoint | 清除当前路径点 | 清除当前路径，也就是停止当前动作，执行下一个路径点。 | clearActiveWaypoint:true | bool |  |
| addWaypoint_type | 添加路径点类型 | 添加的路径点类型。值列表：移动，移动攻击，防守，进入载具，主动装载，攻击，回收，维修，靠近目标，建造，跟随，设置被动目标，卸载至，巡逻，防守至，触发行动，在范围内时触发行动<br>move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow，setPassiveTarget，unloadAt，patrol，guardAt，triggerAction，triggerActionWhenInRange | addWaypoint_type:move | waypostatic type |  |
| addWaypoint_unitType | 添加路径点所建造的单位类型 | 用于让当前单位去建造指定单位。仅用于addWaypoint_type:build | addWaypoint_unitType:BU_shiba | unit |  |
| addWaypoint_prepend | 添加路径点序列位置 | 添加到路径点的开头或结尾 | addWaypoint_prepend:true | bool |  |
| addWaypoint_triggerActionIfFailed | 添加路径点失败触发 | 如果target_nearestUnit找不到匹配项，因此无法添加路径点，则触发此操作 | addWaypoint_triggerActionIfFailed:act_fail | actions |  |
| addWaypoint_triggerActionIfMatched | 添加路径点匹配触发 | 如果操作添加的路径点是有效的，则执行指定操作。 | addWaypoint_triggerActionIfMatched:act_suc | actions |  |
| addWaypoint_maxTime | 添加路径点检索时间 | 如果此路径点这么久还无法执行完成，则取消。 | addWaypoint_maxTime:10s | time |  |
| addWaypoint_target_nearestUnit_tagged | 添加路径点检索标签 | 添加的路径点目标为靠近有此标签的单位。 | addWaypoint_target_nearestUnit_tagged:tag_shiba | tags |  |
| addWaypoint_target_nearestUnit_team | 添加路径点靠近队伍 | 添加的路径点目标需要的所属方：己方\|除自己外任何\|中立\|除自己外盟友\|盟友\|敌人\|任何，own\|notOwn\|neutral\|allyNotOwn\|ally\|enemy\|any | addWaypoint_target_nearestUnit_team:own | relation |  |
| addWaypoint_target_nearestUnit_maxRange | 添加路径点检索范围 | 添加的路径点靠近某目标时考虑的最大范围。 | addWaypoint_target_nearestUnit_maxRange:999 | float |  |
| addWaypoint_target_mapMustBeReachable | 添加路径点路径可达 | 添加的路径点靠近某目标时必须是有可到达路径的。 | addWaypoint_target_mapMustBeReachable:true | bool |  |
| addWaypoint_target_fromReference | 添加路径点来自参考 | 添加路径点来自单位信息引用。 | addWaypoint_target_fromReference: memory.lastDock | unit ref |  |
| addWaypoint_position_offsetFromSelf | 添加路径点坐标偏移 | 添加的路径点相对于自身偏移的坐标。 | addWaypoint_position_offsetFromSelf:10,10 | pointeger |  |
| addWaypoint_position_fromAction | 添加路径点动作坐标 | 将当前动作指定的坐标添加进路径序列中。 | addWaypoint_position_fromAction:true | bool |  |
| addWaypoint_position_randomOffsetFromSelf | 添加路径点随机偏移 | 添加坐标进路径点时的随机值。 | addWaypoint_position_randomOffsetFromSelf:5,5 | integer(s) |  |
| addWaypoint_position_relativeOffsetFromSelf | 添加路径点相对偏移 | 添加路径点位置相对自身偏移量。 | addWaypoint_position_relativeOffsetFromSelf:10,10 | integer(s) |  |
| addWaypoint_target_randomUnit_tagged | 添加指定标签的随机单位 | 添加路径点单位为指定标签的随机单位 | addWaypoint_target_randomUnit_tagged:shibaInu | unit |  |
| addWaypoint_target_randomUnit_team | 添加指定队伍的随机单位 | 添加路径点单位为指定队伍的随机单位 | addWaypoint_target_randomUnit_team:own | string |  |
| addWaypoint_target_randomUnit_maxRange | 添加指定范围的随机单位 | 添加路径点单位为指定范围的随机单位 | addWaypoint_target_randomUnit_maxRange:999 | integer |  |
|  |  | 结果-冷却 |  |  |  |
| addAllActionCooldownsTime | 增加所有动作冷却时间 | 增加所有action的冷却时间。 | addAllActionCooldownsTime:10s | time |  |
| addAllActionCooldownsFor | 对于所有动作而言增加冷却时间 | 增加所有action的冷却时间。 | addAllActionCooldownsFor:10s | time |  |
| addActionCooldownTime | 增加动作冷却时间 | 增加动作冷却时间，制作先充能再使用的action更加容易了。 | addActionCooldownTime:10s | time |  |
| addActionCooldownFor | 对于动作而言增加冷却时间 | 增加动作冷却时间，制作先充能再使用的action更加容易了。 | addActionCooldownFor:10s | time |  |
| addActionCooldownsFor | 对于动作而言增加冷却时间 | 增加动作冷却时间，制作先充能再使用的action更加容易了。 | addActionCooldownsFor:10s | time |  |
| addActionCooldownApplyToActions | 添加指定动作冷却时间 | action id，设置addActionCooldownTime的目标。默认情况下是当前操作本身。 | addActionCooldownApplyToActions: | action ref |  |
| clearAllActionCooldowns | 清除所有动作冷却时间 | 清除所有动作冷却时间，使其立即可用。 | clearAllActionCooldowns:true | bool |  |
|  |  | 结果-动画 |  |  |  |
| playAnimation | 播放动画 | 播放[animation_xx]类型动画。 | playAnimation:shiba | animation ref |  |
| playAnimationIfNotPlaying | 如果未播放动画则播放动画 | 如果没有播放该动画，就播放该动画 | playAnimationIfNotPlaying:shiba | animation ref |  |
| finishPlayingLastAnimation | 完成最后一个动画 | 完成最后一个动画，包括融合 | finishPlayingLastAnimation:true | bool |  |
| stopLastAnimation | 停止最后一个动画 | 停止最后一个动画，跳过融合 | stopLastAnimation:true | bool |  |
|  |  | 结果-中立 |  |  |  |
| switchToNeutralTeam | 切换至中立队伍 | 将队伍更改为中立。该队伍与其他所有队伍结盟。除非使用[core]stayNeutral:true，否则它将被附近的单位捕获。 | switchToNeutralTeam:true | bool |  |
| switchToAggressiveTeam | 切换至侵略性队伍 | 将此单位队伍更改为侵略性的内置队伍。不能被其它单位捕获。 | switchToAggressiveTeam:true | bool |  |
| switchToTeam | 切换至特定队伍 | 切换到小队id。从0开始。(中立-1，敌对中立-2) | switchtoteam:-1 | Logicinteger |  |
|  |  | 结果-从其他单位获取资源，多数代码我并没有实验。 |  |  |  |
| takeResources | 提取资源 | 提取资源，至少写一种资源。 | takeResources: hp=5, gold=10 | customPrice |  |
| takeResources_includeUnitsInTransport | 提取资源包括载具内 | 提取资源，包括载具内单位。 | takeResources_includeUnitsInTransport:true | bool |  |
| takeResources_includeParent | 提取资源包括父单位或载具 | 提取资源，包括父单位和运输载具。 | takeResources_includeParent:true | bool |  |
| takeResources_includeReference | 提取资源包括引用 | 提取资源包括指定单位。 | [action]takeResources_includeReference: self.lastDamagedBy | unit ref |  |
| takeResources_triggerActionForEach | 每找到一个提取目标触发行动 | 引用动作(找到带有资源的目标单位并提取时) | takeResources_triggerActionForEach:<action:name> | action name(行动名称) |  |
| takeResources_includeUnitsWithinRange | 提取资源范围 | 提取资源，在此范围内。 | takeResources_includeUnitsWithinRange:350 | float |  |
| takeResources_includeUnitsWithinRange_team | 提取资源队伍 | 提取在此范围内队伍的资源。与“includeUnitsWithinRange”一起使用，默认为own。可以是：<br>己方\|除自己外任何\|中立\|除自己外盟友\|盟友\|敌人\|任何，own\|notOwn\|neutral\|allyNotOwn\|ally\|enemy\|any | takeResources_includeUnitsWithinRange_team:own | TeamRelation |  |
| takeResources_excludeUnitsWithoutTags | 提取资源需要标签 | 提取资源，但只提取有此标签的单位 | takeResources_excludeUnitsWithoutTags:TAG_shiba | tags |  |
| takeResources_excludeUnitsWithoutCustomTarget1EqualTo | 仅提取自定义目标一为 | 提取资源，但仅提取自定义目标一为此代码所填值的单位 | takeResources_excludeUnitsWithoutCustomTarget1EqualTo:self | unit ref |  |
| takeResources_excludeUnitsWithTheseResources | 提取资源排除资源 | 提取资源，不包括拥有这些资源的单位。 | takeResources_excludeUnitsWithTheseResources:CP_shiba | customPrice |  |
| takeResources_excludeUnitsWithoutAllResources | 提取资源排除不足 | 提取资源，排除缺乏资源者。默认为true. | takeResources_excludeUnitsWithoutAllResources:true | bool |  |
| takeResources_triggerActionIfAnyCollected | 提取资源成功触发 | 如果有任何收集，则触发动作。 | takeResources_triggerActionIfAnyCollected:ACT_shiba | action ref |  |
| takeResources_triggerActionIfNoneCollected | 提取资源失败触发 | 如果没有收集，则触发操作。 | takeResources_triggerActionIfNoneCollected:act_shibainu | action ref |  |
| takeResources_discardCollected | 提取资源删除 | 从目标中获取资源，但不向自身添加也就是删除。 | takeResources_discardCollected:true | bool |  |
| takeResources_keepResourcesOnTarget | 提取资源克隆 | 不从目标添加或删除资源。但克隆资源。与takeResources_discardCollected和takeResources_triggerActionIfAnyCollected一起使用以创建资源检测器。 | takeResources_keepResourcesOnTarget:true | bool |  |
| takeResources_maxUnits | 提取资源目标量 | 最多从多少单位提取资源，默认为1。 | takeResources_maxUnits:1 | integer |  |
| takeResources_directTransferStoppingAtZero | 提取资源直接转换至零 | 提取资源直接转换至0,用于完全转换。如果目标上的资源少于转帐金额，则只有剩余的资源将被转帐。不支持使用其他一些takeResources_*代码 | takeResources_directTransferStoppingAtZero:true | bool |  |
| takeResources_searchOnly | 获取资源仅供搜索 | #新增快捷方式 eg. (<br>takeResources_maxUnits=200<br>takeResources_discardCollected=true<br>takeResources_keepResourcesOnTarget=true<br>)<br>注意:填写本代码时必须包含至少一下的其中一个代码<br>takeResources_includeUnitsWithinRange:# | takeResources_searchOnly:true | bool |  |
| takeResources_saveFirstUnitToCustomTarget1 | 提取资源保存第一个单元自定义目标1 | 提取资源保存第一个单元一定是自定义目标1 | takeResources_saveFirstUnitToCustomTarget1:true | bool |  |
| takeResources_saveFirstUnitToCustomTarget2 | 提取资源保存第一个单元自定义目标2 | 提取资源保存第一个单元一定是自定义目标2 | takeResources_saveFirstUnitToCustomTarget2:true | bool |  |
|  |  | 结果-转换资源 |  |  |  |
| convertResource_from | 转换资源来源 | 将此资源转换资源为别的资源。 | convertResource_from:SP_cat | customResource |  |
| convertResource_to | 转换资源至 | 将资源转后为此资源，要提供的自定义资源的名称 | convertResource_to:SP_shiba | customResource |  |
| convertResource_minAmount | 转换资源至少 | 如果来源中资源小于该数量，则跳过。默认为0。在大多数情况下可能不需要。 | convertResource_minAmount:0 | integer |  |
| convertResource_maxAmount | 转换资源至多 | “来源资源”和“转换后资源”之间的最大转化量 | convertResource_maxAmount:999 | integer |  |
| convertResource_multiplyAmountBy | 转换资源倍率 | 资源转换倍率，不影响提取的数量。默认值为1。 | convertResource_multiplyAmountBy:0.1 | float |  |
|  |  | 结果-设置资源 |  |  |  |
| resourceAmount | 资源类型 | 自定义资源的名称，使用以下3个键进行设置。所有键都是可选的，可以一起使用。 | resourceAmount:SP_cat | customResource |  |
| resourceAmount_setValue | 资源类型设置数值 | 设置此资源的绝对值，忽略资源的当前值。默认忽略。 | resourceAmount_setValue:99 | float |  |
| resourceAmount_addOtherResource | 资源类型添加至 | 添加到其中的另一个自定义资源的名称。可以不使用resourceAmount_setValue，只是添加资源。或者使用resourceAmount_setValue:0复制一个资源值。 | resourceAmount_addOtherResource:SP_shiba | customResource |  |
| resourceAmount_multiplyBy | 资源类型乘数 | 默认值为1。将当前资源值乘上此值。 | resourceAmount_multiplyBy:1 | float |  |
|  |  | 结果-附件(附属，子单位)更改 |  |  |  |
| attachments_addNewUnits | 附属添加单位 | 添加单位作为其子单位，需要定义附属位置。 | attachments_addNewUnits:shiba | unit |  |
| attachments_deleteNumUnits | 附属删除单位数 | 删除单位数量 | attachments_deleteNumUnits:1 | integer |  |
| attachments_onlyOnSlots | 附属添加于槽位 | 只将附属物添加于特定的槽位 | attachments_onlyOnSlots:SL_shiba | string |  |
| disconnectFromParent | 脱离父单位 | 用于子单位脱离父单位 | disconnectFromParent:true | bool |  |
| attachments_unload | 卸载附属 | 卸载所有附属。可以与attachments_onlyonslot一起使用。与运输单位卸载相同 | attachments_unload:true | bool |  |
| attachments_disconnect | 附属断开连接 | 断开所有现在所在位置的附属。可以与attachments_onlyonslot一起使用。 | attachments_disconnect:true | bool |  |
|  |  | 结果-标签变更 |  |  |  |
| temporarilyAddTags | 临时标签添加 | 将标签添加到单位，直到转换或重置。 | temporarilyAddTags:TEM_PD_shiba | tags |  |
| temporarilyRemoveTags | 临时标签删除 | 从单位上删除标签，直到将其转换或重置。 | temporarilyRemoveTags:TEM_PD_shiba | tags |  |
| resetToDefaultTags | 标签重置 | 重置为默认标签。 | resetToDefaultTags:true | bool |  |
| addGlobalTeamTags | 添加全局标签 | 为玩家的团队添加此全局标签。与self.globalTeamTags()一起使用可创建解锁和升级。 | addGlobalTeamTags:TEM_UP_shiba | tags |  |
| removeGlobalTeamTags | 移除全局标签 | 从玩家队伍中删除此全局标签。 | removeGlobalTeamTags:TEM_UP_shiba | tags |  |
|  |  | 结果-显示讯息 |  |  |  |
| showMessageToPlayer | 发送消息至玩家 | 向玩家个人发送信息。自己发给自己。 | showMessageToPlayer:对面傻蛋，您看不到！ | string |  |
| showMessageToPlayer_[Language] | 发送消息至玩家 | 向玩家个人发送信息。自己发给自己。多语言版。注意:这种格式是支持几乎所有字符串显示给玩家，即使当引用不显示它 | showMessageToPlayer_es:text test shiba<br>showMessageToPlayer_zh:文本测试chemms | string |  |
| showMessageToAllPlayers | 发送消息至所有 | 向所有玩家发送消息。 | showMessageToAllPlayers:对面傻猫，队友说是不是？ | string |  |
| showMessageToAllEnemyPlayers | 发送消息给所有敌人 | 发送消息给所有敌人。 | showMessageToAllEnemyPlayers:我投靠，收不？ | string |  |
| showQuickWarLogToPlayer | 发送战争快报至玩家 | 向玩家个人发送战争快报。（在左下角） | showQuickWarLogToPlayer:对面制杖，您看不到。 | string |  |
| showQuickWarLogToAllPlayers | 发送战争快报至所有 | 向所有玩家发送战争快报。（在左下角） | showQuickWarLogToAllPlayers:这是单位全局嘲讽。 | string |  |
| debugMessage | 调试信息 | 仅在启用调试模式的沙盒模式中显示。 | debugMessage:[string] | string |  |
|  |  | 结果-发送数据 |  |  |  |
| sendMessageTo | 发送信息至 | 填单位/单位引用 | sendMessageTo:self.lastDamagedBy | unit ref |  |
| sendMessageWithData | 发送信息与数据 | 填变量=XXX | sendMessageWithData:XXX=XXX | variable List（变量菜单） |  |
| sendMessageWithTags | 发送标签 | 填指定标签 | sendMessageWithTags:cheems | tag List（标签菜单） |  |
|  |  | 结果-设置自定义目标 |  |  |  |
| setCustomTarget1 | 设置自定义目标1 | 建议填单位引用 | setCustomTarget1:self | unit ref/unit |  |
| setCustomTarget2 | 设置自定义目标2 | 建议填单位引用 | setCustomTarget2:self | unit ref/unit |  |
| swapCustomTarget1And2 | 交换自定义目标1和2 | 填布尔值 | swapCustomTarget1And2:true | bool |  |
|  |  |  |  |  |  |
| 生成单位 | 位于括号中 | Spawn units line |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| spawnUnits | 产生单位 | 用于action生成单位，大多数单位的生成键都支持多个单位且带有参数。注意：与spawnUnit不能混用spawnUnit用于抛射体。 | spawnUnits:crates*10(neutralTeam=true), tank(spawnChance=0.5) | unitlist |  |
| neutralTeam | 中立 | 生成这个单位归属于中立队伍而不是所属玩家。 | spawnUnits:cat(neutralTeam=true) | bool |  |
| aggressiveTeam | 敌对队伍 | 生成这个单位归属于敌对中立队伍而不是所属玩家。 | spawnUnits:cat(aggressiveTeam=true) | bool |  |
| setToTeamOfLastAttacker | 所属攻击者 | 生成单位归属于攻击者。（在[core] unitsSpawnedOnDeath上有用） | spawnUnits:cat(setToTeamOfLastAttacker=true) | bool |  |
| spawnChance | 产生几率 | 生成这个单位几率。 默认为1。 | spawnUnits:cat(spawnChance=0.5) | float |  |
| spawnSource | 产生源 | 改变产生地点和产生单位的队伍到这个单位参考。 | [action]spawnUnits: tank(spawnSource=memory.lastLocation) | unit ref |  |
| maxSpawnLimit | 最大生成数量 | 与spawnChance一起使用时，总共可以产生的最大单位数。 | spawnUnits:treeA(spawnChance=0.5, maxSpawnLimit=1) | integer |  |
| gridAlign | 对齐网格 | 将生成位置与网格对齐，对建筑物有用 | spawnUnits:cat(gridAlign=true, skipIfOverlapping=true) | bool |  |
| skipIfOverlapping | 跳过条件 | 如果在无效的位置忽略单位生成。 例如基于LAND的单位不会产生在水中。 | spawnUnits:cat(gridAlign=true, skipIfOverlapping=true) | bool |  |
| falling | 降落 | 让单位在生成时从天而降 | spawnUnits:cat(falling=true) | bool |  |
| offsetX | X偏移 | 生成单位位置X偏移量，单位像素 | spawnUnits:cat(offsetX=10,offsetY=10) | float |  |
| offsetY | Y偏移 | 生成单位位置Y偏移量 | spawnUnits:cat(offsetX=10,offsetY=10) | float |  |
| offsetRandomX | X随机偏移 | 生成单位位置X随机偏移量 | spawnUnits:cat(offsetRandomX=10,offsetRandomY=10) | float |  |
| offsetRandomY | Y随机偏移 | 生成单位位置Y随机偏移量 | spawnUnits:cat(offsetRandomX=10,offsetRandomY=10) | float |  |
| offsetRandomXY | XY随机偏移 | 生成出的抛射体在两个方向的偏移随机偏移，使真正的在一个区域随机化。 | spawnUnits:cat(offsetRandomXY=10) | float |  |
| offsetRandomDir | 角度随机偏移 | 生成单位时角度随机偏移量 | spawnUnits:cat(offsetRandomDir=10) | dir |  |
| offsetHeight | 高度偏移 | 生成此单位的高度偏移量。 | spawnUnits:cat(offsetRandomDir=10) | integer |  |
| offsetDir | 角度偏移 | 生成单位时角度偏移量。单位度。 | spawnUnits:cat(offsetHeight=10) | dir |  |
| addResources | 增加资源 | 给生成单位这些资源，可用于设置触发动作的标志 | spawnUnits:crates(addResources=gold:30\|stone:10, spawnChance=0.5) | customResource |  |
| transportedUnitsToTransfer | 转移自身载员至生成载具 | 将指定数量的单元放入生成出的单元的运输槽位中。 | spawnUnits:transporter(transportedUnitsToTransfer=5) | integer |  |
| copyWaypointsFrom | 复制路径来自 | 复制目标上的所有路径点到创建的单位。 | spawnUnits: tank(copyWaypointsFrom=self) | unit ref |  |
| alwaysStartDirAtZero | 朝向总是为零 | 生成出的单位朝向总是设置为零度。即朝右。 | spawnUnits:wolf(alwayStartDirAtZero=true) | bool |  |
| alwayStartDirAtZero | 朝向总是零度 | 生成出的单位朝向总是设置为零度。即朝右。 | spawnUnits:wolf(alwayStartDirAtZero=true) | bool |  |
|  |  |  |  |  |  |
| techLevel | 圈大小（科技等级） | 只能给 damagingBorder（伤害边界，也称毒圈，红圈）和zoneMarker（预缩圈，也称白圈）使用的特殊值，填数字，计算方式是数值X地块5格。最小值为0，圈不可见。如填1则半径为5格。 | spawnUnits: damagingBorder(techLevel=100), zoneMarker(techLevel=40) | integer |  |
|  |  |  |  |  |  |
| 生成抛射体 | 位于括号中 | Spawn Projectiles line |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
|  |  | 大多数生成抛射体代码可用于抛射体参数。 | spawnProjectilesOnEndOfLife: secondary*3(spawnChance=0.5) |  |  |
| spawnChance | 产生机会 | 抛射体产生几率，默认为1 | spawnProjectilesOnCreate:1(spawnChance=0.5) | float |  |
| maxSpawnLimit | 最大产生限制 | 抛射体的最大产生数量 | spawnProjectilesOnCreate:1(maxSpawnLimit=4) | integer |  |
| recursionLimit | 递归限制 | 用于限制抛射体生成抛射体自身的上限,而不会产生死循环。这对自动生成很有用，因为不会无限生成，有利于链条爆炸 | spawnProjectilesOnCreate:1(recursionLimit=5) | integer |  |
| offsetX | 偏移量x | 生成出的抛射体的x轴偏移量 | spawnProjectilesOnCreate:1(offsetX=10) | float |  |
| offsetY | 偏移量y | 生成出的抛射体的y轴偏移量 | spawnProjectilesOnCreate:1(offsetY=11) | float |  |
| offsetRandomX | 偏移随机X | 生成出的抛射体的x轴的随机偏移量 | spawnProjectilesOnCreate:1(offsetRandomX=12) | float |  |
| offsetRandomY | 偏移随机Y | 生成出的抛射体的y轴的随机偏移量 | spawnProjectilesOnCreate:1(offsetRandomY=13) | float |  |
| offsetRandomXY | 偏移随机XY | 生成出的抛射体在两个方向的偏移随机偏移，使真正的在一个区域随机化。 | spawnProjectilesOnCreate:1(offsetRandomXY=14) | float |  |
| offsetHeight | 偏移高度 | 生成出的抛射体的z轴也就是高度偏移 | spawnProjectilesOnCreate:1(offsetHeight=15) | float |  |
| offsetDir | 偏移角度 | 生成出的抛射体的角度偏移 | spawnProjectilesOnCreate:1(offsetDir=16) | float |  |
| offsetRandomDir | 偏移随机角度 | 生成出的抛射体的角度随机偏移量 | spawnProjectilesOnCreate:1(offsetRandomDir=17) | float |  |
| xOffsetRelative | x相对偏移 | 生成出的抛射体的x轴的相对偏移量 | spawnProjectilesOnCreate:1(xOffsetRelative=19) | float |  |
| yOffsetRelative | y相对偏移 | 生成出的抛射体的y轴的相对偏移量 | spawnProjectilesOnCreate:1(yOffsetRelative=20) | float |  |
| xOffsetAbsolute | x绝对偏移 | 生成出的抛射体的x轴的绝对偏移量 | spawnProjectilesOnCreate:1(xOffsetAbsolute=19) | float |  |
| yOffsetAbsolute | y绝对偏移 | 生成出的抛射体的y轴的绝对偏移量 | spawnProjectilesOnCreate:1(yOffsetAbsolute=20) | float |  |
|  |  |  |  |  |  |
| 逻辑 | Logic | LogicBoolean |  |  |  |
| 代码 | 代码翻译 | 许多参数可以写等于，但luke没有正式写在代码表中 | 例子 | 值类型 |  |
| true | 是 | 满足/是/对/为真/1，不建议使用1或0，不是所有代码都支持。 | autoTrigger:true | boolean |  |
| false | 非 | 不满足/非/错/假/0 | autoTrigger:false | boolean |  |
| if | 如果 | 所有逻辑布尔值使用if开始，除非仅使用true/false | autoTrigger:if self.hp != 0 | IfEvent |  |
| and | 和 | 需要and两边条件都满足执行。 | if self.isInWater() and self.energy(greaterThan=1) | connect |  |
| or | 或者 | or两边条件满足一个即可执行。 | if self.energy(greaterThan=1) or self.ammo(greaterThan=1) and self.isFlying() | connect |  |
| not | 非 | 将逻辑结果取反。 | if not self.isOverLiquid() | connect |  |
| < | 小于 | 如果左边的数字较小则返回真 | autoTrigger:if self.hp < 0 | bool |  |
| > | 大于 | 如果右侧的数字较小则返回真 | autoTrigger:if self.hp > 0 | bool |  |
| <= | 小于或等于 | 如果左边的数字小于或等于右边，则返回真 | autoTrigger:if self.hp <= 0 | bool |  |
| >= | 大于或等于 | 如果右侧的数字小于或等于右边，则返回真 | autoTrigger:if self.hp >= 0 | bool |  |
| == | 等于 | 如果两边的数字、单位、字符串、布尔值相同，则返回真 | autoTrigger:if self.hp == 0 | bool |  |
| != | 不等于 | 如果两边的数字、单位、字符串、布尔值不同，则返回真 | autoTrigger:if self.hp != 0 | bool |  |
| + | 加 | 添加两个数字或连接两个字符串（可以在${x}中使用，用法和logic中一样，在此不做例子解释） | autoTrigger:if self.hp + self.shield == 0 | same type |  |
| - | 减 | 两个数字相减所得值（可以在${x}中使用，用法和logic中一样，在此不做例子解释） | autoTrigger:if self.hp - self.shield == 0 | same type |  |
| / | 除 | 两个数字相除所得值（可以在${x}中使用，用法和logic中一样，在此不做例子解释） | autoTrigger:if self.hp * self.shield == 0 | same type |  |
| * | 乘 | 两个数相乘所得值（可以在${x}中使用，用法和logic中一样，在此不做例子解释） | autoTrigger:if self.hp / self.shield == 0 | same type |  |
| % | 求余 | 将两个数字相除并取余数部分作为计算所得值（可以在${x}中使用，用法和logic中一样，在此不做例子解释） | autoTrigger:if self.hp % self.shield == 0 | same type |  |
| ^ | 幂运算 | 将后一个数字的值作为前一个数的幂来进行运算（只能在${x}中使用） | price:${a^b}（这里假设我们设置了a是2，b是3，那么这一段则返回8） | same type |  |
| () | 囊括符 | 用于囊括逻辑，可以把诸多逻辑用囊括符囊括成一个逻辑 可以避免像“or”这种衔接字符的烦人问题（可以在${x}中使用，用法和logic中一样，在此不做例子解释） | autoTrigger：if (self.hp(empty=true) and self.energy(full=true)) or (self.energy(empty=true) and self.hp(full=true)) | include |  |
|  |  | 单位位置和移动 |  |  | 原本的值类型 |
| self.isUnderwater() | 自身在水下 | 单位在水下，深水单位如潜艇。 | if self.isUnderwater() | bool | bool |
| self.underwater() | 自身在水下 | 同上 |  |  |  |
| self.gound() | 自身在地上 | 单位在陆地上 |  |  |  |
| self.ground() | 自身在地上 | 同上 |  |  |  |
| self.isAtGroundHeight() | 自身在地面高度 | 单位在地面,触发范围是-1~4，如果您单位高度在不断变化时超过此值的话，此条不一定触发，因为铁锈执行频率默认是1s.<br>等同于self.gound()或self.ground() | if self.isAtGroundHeight() | bool | float |
| self.flying() | 自身在天上 | 同下 |  |  |  |
| self.isFlying() | 自身在天上 | 如果单位在天上飞行，则执行。 | if self.isFlying() | bool | bool |
| self.isMoving() | 自身在移动 | 如果自身在移动则执行。 | if self.isMoving() | bool | bool |
| self.isAtTopSpeed() | 自身到最高速度 | 如果到达最高速度则执行。等同self.maxspeed() | if self.isAtTopSpeed() | bool | bool |
| self.isInWater() | 自身在水中 | 如果自身在水中则执行。等同于self.inwater()。 | if self.isInWater() | bool | bool |
| self.inWater() | 自身在水中 | 如果自身在水中则执行。等同于self.isinwater()。 | if self.inWater() | bool | bool |
| self.isOverwater() | 自身在水上 | 如果自身投影在水面这种地形则执行。 | if self.isOverwater() | bool | bool |
| self.overWater() | 自身在水上 | 同上 | if self.overWater() | bool | bool |
| self.isOverLiquid() | 自身在液体上 | 如果自身在液体则执行。岩浆算为液体。 | if self.isOverLiquid() | bool | bool |
| self.isOverClift() | 自身在悬崖上 | 如果自身在悬崖上则执行。等同self.isOverCliff() | if self.isOverClift() | bool | bool |
| self.isOverPassableTile() | 自身在地块类型上 | 如果自身在这类通行地块上则执行，类型：无、陆地、建筑、空中、水面、两栖、跨悬崖、跨水和悬崖<br>NONE、LAND、BUILDING、AIR、WATER、HOVER、OVER_CLIFF、OVER_CLIFF_WATER | if self.isOverPassableTile(type="WATER") | bool | bool |
| self.isOverOpenLand() | 自身在开阔地带 | 如果自身在开阔地带则执行。self.isOverPassableTile（type ='LAND'）的快捷方式 | if self.isOverOpenLand() | bool | bool |
| self.height() | 自身高度 | 如果自身在特定高度则执行。参数:greaterThan,lessThan,equalTo,empty,full(参数，超过，少于，等于，空，满)) | if self.height(lessThan=50) | bool | float |
|  |  | 单位统计 |  |  |  |
| self.hasResources() | 自身有资源 | 可以检查多种资源（所有价格参数） | if self.hasResources(credits=5000) | bool | resource ref |
| self.resource() | 自身资源 | 检查单个资源条件。（参数：greaterThan,lessThan,equalTo）参数，超过，少于，等于 | if self.resource(type="NAMMO",greaterThan=35) | bool | resource ref |
| self.resource.RESOURCE_TYPE | 自身资源类型 | 此为快捷方式，可直接使用，原代码为self.resource(type='RESOURCE_TYPE') | addResourcesWithLogic: hp += self.resource.gold | bool | resource ref |
| self.isResourceLargerThan() | 自身资源大于 | 比较两个资源，注意，multiplyTargetBy不造成资源改变。(参数：来源，比较目标，超过，乘数 source=x, compareTarget=x, byMoreThan=x, multiplyTargetBy=x) | if self.isResourceLargerThan(compareTarget=nearestUnit) | bool | compare |
| self.maxHp() | 自身最大血量 | 自身最大血量条件。 | if self.maxHp >= 10000 | bool | integer |
| self.hp() | 自身血量 | 自身血量条件。参数:greaterThan,lessThan,equalTo,empty,full(超过，少于，等于，空，满) | if self.hp(lessThan=100) | bool | float |
| self.ammo() | 自身弹药 | 自身弹药条件。参数:greaterThan,lessThan,equalTo,empty,full(参数，超过，少于，等于，空，满) | if self.ammo(lessThan=100) | bool | integer |
| self.maxShield() | 自身最大护盾 | 自身最大护盾 | if self.maxShield >= 10000 | bool | integer |
| self.maxEnergy() | 自身最大能量 | 自身最大能量 | if self.maxEnergy >= 10000 | bool | integer |
| self.isEnergyRecharging() | 自身正在充能 | 自身正在充能 | if self.isEnergyRecharging() | bool | bool |
| self.isAmmoEmpty() | 自身弹药空 | 自身弹药为空。self.ammo(empty=true)的快捷方式 | if self.isAmmoEmpty() | bool | bool |
| self.ammoIncludingQueued() | 自身弹药包括队列 | 自身弹药数量，包括还在队列中的。参数:greaterThan,lessThan,equalTo,empty,full(参数：大于，小于，等于，空，满) | if self.ammoIncludingQueued(lessThan=12) | bool | integer |
| self.energy() | 自身能量 | 自身能量数值。参数:greaterThan,lessThan,equalTo,empty,full(参数，超过，少于，等于，空，满) | if self.energy(empty=true) | bool | float |
| self.energyIncludingQueued() | 自身能量包括队列 | 自身能量数值，包括还在队列中的。(参数:greaterThan,lessThan,equalTo,empty,full)参数：大于，小于，等于，空，满 | if self.energyIncludingQueued(lessThan=12) | bool | float |
| self.isEnergyFull() | 自身能量满 | 自身能量为满。self.energy(full=true)的快捷方式 | if self.isEnergyFull() | bool | bool |
| self.isEnergyEmpty() | 自身能量空 | 自身能量为空。self.energy(empty=true)的快捷方式。 | if self.isEnergyEmpty() | bool | bool |
| self.shield() | 自身护盾 | 自身护盾数值。(参数:greaterThan,lessThan,equalTo,empty,full)参数：大于，小于，等于，空，满 | if self.shield(greaterThan=233) | bool | float |
| self.kills() | 自身杀敌数 | 自身杀敌数量。(参数:greaterThan,lessThan,equalTo)（参数：大于，小于，等于） | if self.kills(greaterThan=99) | bool | integer |
| self.queueSize() | 自身队列量 | 自身队列数量。(参数:greaterThan,lessThan,equalTo,empty,full,withActionTag)参数：大于，小于，等于，空，满，有行动标签 | if self.queueSize(greaterThan=2) | bool | integer |
| self.id() | 自身id | 返回自身的单位id，每个单位的id都不一样，如果id小的死了，后面生成的单位就会占用那个id | if self.id == 1246 | bool | integer |
| self.teamId() | 自身队伍id | 返回单位或标记的团队 ID。 从0开始。 | if self.teamId == 1 | bool | team id |
| self.playerName() | 玩家名称 | 返回游戏中玩家的昵称，类型为字符串 | if self.playerName == "N.D.T." | bool | string |
| self.teamName() | 队伍名称 | 返回自身队伍的名称，一般情况下，铁锈默认的都是ABCDEF | if self.teamName == "A" | bool | string |
| self.x(), self.y(), self.z() | 自身坐标分量 | 返回单位的坐标分量 | if self.x() == 0 and self.y() == 0 and self.z() == 0 | bool | float |
| self.dir() | 自身角度 | 返回单位的方向 | if self.dir() == 0 | bool | float |
| self.priceCredits() | 自身资源价格 | 返回单位的资源价格 | if self.priceCredits() <= 10000 | bool | integer |
|  |  | 杂项 |  |  |  |
| self.hasFlag() | 自身有标志 | 自身拥有标志。可用通过增加资源和价格修改。（参数：id = 0-31/[logicNumber]），使用addResources在action中更改此vaule | if self.hasFlag(id=self.ammo) | bool | bool |
| self.tags() | 自身有标签 | 自身拥有标签。等同self.hasTags() | if not self.tags(includes='TAG_shiba') | bool | bool |
| self.hasTags() | 自身有标签 | 自身拥有标签。等同self.tags() | if not self.hasTags(includes='TAG_shiba') | bool | bool |
| self.globalTeamTags() | 有全局标签 | 有全局标签，(parameters: includes)参数:包括 | if self.globalTeamTags(includes="GLBTAG_shiba") | bool | bool |
| self.transportingCount() | 自身运输数量 | 载具运输单位数量(parameters: greaterThan, lessThan,equalTo,empty)（参数：大于，小于，等于，为空） | if self.transportingCount(greaterThan=1) | bool | integer |
| self.numberOfAttachedUnits() | 自身子单位数量 | 自身有子单位数量。（withTag,greaterThan,lessThan,equalTo）参数:标签，大于、小于、等于 | if self.numberOfAttachedUnits(withTag=ANM_cat',lessThan=1) | bool | bool |
| self.isAttacking() | 自身在攻击 | 单位正在攻击。 | if self.isAttacking() | bool | bool |
| self.hasActiveWaypoint() | 自身有活动的路径点 | 单位当前活动的路径点为此类型。类型=路径点类型。（[type = WAYPOINT_TYPE]） | if self.hasActiveWaypoint(type='touchTarget') | bool | bool |
| self.transportingUnitWithTags() | 自身运输单位有标签 | 自身运输单位有标签(parameters: includes)参数:包括 | if self.transportingUnitWithTags(includes='human') | bool | bool |
| self.isTransportUnloading() | 自身在卸载单位 | 卸载单位时 | if self.isTransportUnloading() | bool | bool |
| self.hasParent() | 自身有父单位 | 用于子单位和载员逻辑。有父单位时执行。可选参数:需要标签。withTag ="unit" | if self.hasParent() | bool | bool |
| self.hasTakenDamage() | 受到伤害 | 单位受到伤害。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X) | if self.hasTakenDamage(withinSeconds=1) | bool | bool |
| self.timeAlive() | 存活时间 | 单位存活时间。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X) | if self.timeAlive(laterThanSeconds=10) | bool | time(s) |
| self.lastConverted() | 最后转换时间 | 单位最后转换时间。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X) | if self.lastConverted(laterThanSeconds=10) | bool | time(s) |
| self.customTimer() | 自身自定义计时器 | 自身自定义计时器。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X) | if self.customTimer(laterThanSeconds=99) | bool | time(s) |
| self.isOnNeutralTeam() | 自身在中立队伍 | 自身在中立队伍。 | if self.isOnNeutralTeam() | bool | bool |
| numberOfUnitsInTeam() | 队伍中此单位数量 | 玩家自身拥有单位数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue)<br>参数：标签，超过，少于，范围，建造中，队列中 | if numberOfUnitsInTeam(withTag='techUnlockBuilding', greaterThan=0) | bool | integer |
| self.numberOfUnitsInAllyTeam() | 我方有单位数量 | 我方拥有此单位的数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue) | if self.numberOfUnitsInAllyTeam(withTag="cat",greaterThan=0,withinrange=99) | bool | integer |
| self.numberOfUnitsInAllyNotOwnTeam() | 盟友有单位数量 | 盟友拥有此单位的数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue) | if self.numberOfUnitsInAllyNotOwnTeam(withTag="cat",greaterThan=0,withinrange=99) | bool | integer |
| numberOfUnitsInEnemyTeam() | 敌人有单位数量 | 敌人拥有此单位的数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue) | if numberOfUnitsInEnemyTeam(withTag="cat",greaterThan=0,withinrange=99) | bool | integer |
| numberOfUnitsInNeutralTeam() | 中立有单位数量 | 中立队伍拥有单位数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue) | if numberOfUnitsInNeutralTeam(withTag="cat",greaterThan=0,withinrange=99) | bool | integer |
| numberOfUnitsInAggressiveTeam() | 敌对中立拥有单位数量 | 特殊的“对所有人都有侵略性”的队伍,这与numberOfUnitsInEnemyTeam不同.(参数:withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue | if numberOfUnitsInAggressiveTeam() | bool | integer |
| numberOfUnitsInAllTeams() | 所有队伍拥有单位数量 | 所有队伍拥有单位数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue) | if self.numberOfUnitsInAllTeams(withTag="tech") | bool | integer |
| self.hasUnitInTeam() | 自身队伍有单位 | 自身队伍拥有单位数量。(参数:withTag，withinRange，incompleteBuildings，factoryQueue)numberOfUnitsInTeam的别名 | if self.hasUnitInTeam(withTag="tech") | bool | bool |
| self.noUnitInTeam() | 自身队伍无单位 | 自身队伍单位数量不满足。(参数:withTag，withinRange，incompleteBuildings，factoryQueue)numberOfUnitsInTeam的别名 | if self.noUnitInTeam(withTag="tech") | bool | bool |
| self.isInMap() | 自身在地图内 | 判断自身是否在地图内：地图外指那些黑色的边缘外面 | if self.isInMap() | bool | bool |
| game.mapWidth() | 正在游戏的地图宽度 | 检测正在游戏的地图宽度 | if game.mapWidth() == 10000 | bool | float |
| game.mapHeight() | 正在游戏的地图高度 | 检测正在游戏的地图高度 | if game.mapHeight() == 10000 | bool | float |
| self.isReversing() | 自我正在反转 | 逻辑布尔值 | if self.isReversing() | bool | bool |
| self.isControlledByAI() | 自身属于AI控制 | 单位归属于AI所属方控制。 | if self.isControlledByAI() | bool | bool |
| self.readUnitMemory() | 读取单位内存 | (name:string, type:string{boolean,unit,float,string}, [default])<br>注：从1.15p11更新了数组后，更新三个数组的引用方式，以及数组条件判断<br>数组引用方式一：self.readUnitMemory('numArray', type='number', index=<value:number>)<br>数组引用方式二：self.readUnitMemory('numArray', type='float[]')[<value:number>]<br>数组引用方式三：self.readUnitMemory('numArray', type='float[]').get(self.hp)<br>关于数组其他函数：<br>self.readUnitMemory('numArray', type='float[]').size()<br>self.readUnitMemory('numArray', type='float[]').length()<br>self.readUnitMemory('numArray', type='float[]').contains(self.hp) | if parent.readUnitMemory('boostTarget', type='unit') == self | bool | memory type |
| self.eventData() | 事件数据 | 与sendMessageWithData连用，从严格意义上来讲，这个key并不属于内存(name:string, type:string{boolean,unit,float,string}, [default]) | if parent.eventData('boostTarget', type='unit' , default=nearestUnit) == self | bool | message data type |
| memory.NAME | 内存 | 使用当前defineUnitMemory以及@memory类型读取自身的快捷方式。 不能在其他单元上使用，为此使用 readUnitMemory。 不要调用自身。 | autoTrigger: if memory.experience > 100 | bool | memory type |
| memory.NAME[<Array_Lower_Limit>] | 返回内存数组 | 使用当前defineUnitMemory以及@memory类型读取自身的快捷方式。 不能在其他单元上使用，为此使用 readUnitMemory。 不要调用自身。 | autoTrigger: if memory.experience[1] > 100 | bool | memory array type |
| memory.MEMORY_NAME.size() | 数组内存大小 | 对于类型是数组的内存使用，告诉你当前数组有几个不同的值 | if memory.array.size() >= 1 | bool | integer |
| memory.MEMORY_NAME.length() | 数组内存长度 | 对于类型是数组的内存使用，告诉你当前数组有几个不同的值 | if memory.array.length() >= 1 | bool | integer |
| memory.MEMORY_NAME.get() | 数组内存获取 | 括号里填logic或者integer，返回该索引所代表的值 | if memory.array.get(1) == 1 | bool | index |
| memory.MEMORY_NAME.contains() | 数组内存包含 | 填与内存类型相应的值，也可以填logic，用于检测数组里面有没有该值，如果有则返回TRUE，否则返回FALSE | if memory.array.contains(nearestUnit) == true | bool | logic |
| self.numberOfQueuedWaypoints() | 自身某种路径点的队列数量 | 小括号里写路径点种类(parameters: greaterThan, lessThan,equalTo,empty,full)（参数：大于，小于，等于，为空，为满） | if self.numberOfQueuedWaypoints(type='move',full=true) | bool | integer |
| self.speed() | 自身速度 | Current unit speed（目前的单位速度） | if self.speed() >= 0 | bool | float |
| self.maxspeed() | 自身达到最大速度 | 单位已经到达单位所能到达的最大速度 | if self.maxspeed() == true | bool | bool |
| self.isAtTopSpeed() | 自身到达最大速度 | 单位已经到达单位所能到达的最大速度 | if self.isAtTopSpeed() | bool | bool |
| self.builtAmount() | 自身建造数量 | (似乎不包括使用autoTrigger建造的数量)How much this unit is built.  1  when complete. Note only events trigger on incomplete units, not autoTrigger（这个单位建造了多少。  1  完成后。仅注意不完整单位触发的事件，） | if self.builtAmount() > 0 | bool | integer |
| self.completed() | 自身建造完成 | (比如建造者造了一半的建筑就是0,建造完成就是1)Shortcut for checking built is（是检查已建成的快捷方式） | if self.completed() | bool | integer/bool |
| self.maxMoveSpeed() | 自身最大移动速度 | 自身最大移动速度 | if self.maxMoveSpeed() >= 0 | bool | float |
| self.teamDefeatedTech() | 队伍失败 | 队伍失败 | if self.teamDefeatedTech() | bool | bool |
| self.teamWipedOut() | 队伍无单位 | (ps:都没单位了哪个单位检测队伍没单位?所以应该是只能由禁止受到攻击的单位(此单位不计入总数)来判断) | if self.teamWipedOut() | bool | bool |
| self.numberOfConnections | 自身连接数 | 括号里填写行动名称 | if self.numberOfConnections(name="XXX") >= 10 | bool | integer |
| self.teamVictory() | 队伍获胜 | 队伍获胜 | if self.teamVictory() | bool | bool |
|  |  | 单位引用，例子太长，写描述里面 |  |  |  |
| thisActionTarget | 当前动作目标 | 当前目标或定位的位置。<br>    • alsoTriggerAction: x (thisActionTarget==Same as original action(与原动作相同))<br>    • [turret]onShoot_triggerActions: x  (thisActionTarget==Target that was shot at(被击中的目标))<br>    • takeResources_triggerActionIfAnyCollected: x (thisActionTarget==Target with resources(带有资源的目标))<br>    • addWaypoint_triggerActionIfMatched: x (thisActionTarget == Marker for move/Target for attack, etc.  Note: use addWaypoint_maxTime:0 if you want to search only<br>    • 移动动作的标记/攻击的目标等。<br>注：如果只是想搜索，请使用addWaypoint_maxTime: 0 | setResourcesWithLogic:Res=(thisActionTarget.resource.credits) | unit / marker |  |
| eventSource | 事件来源 | 来自 autoTriggerOnEvent 的当前触发器，否则为 null<br>autoTriggerOnEvent: tookDamage (thisActionTarget==Unit that caused damage（使单位受到伤害的单位）)<br>autoTriggerOnEvent: killedAnyUnit (thisActionTarget==Unit that was killed（使单位击杀了任意一个其他单位的单位）)<br>autoTriggerOnEvent: transportingNewUnit (thisActionTarget==Unit that was transported（使单位被运输的单位）)<br>autoTriggerOnEvent: transportUnloadedOrRemovedUnit (thisActionTarget==Unit unloaded（使单位转载其他单位的单位）)<br>autoTriggerOnEvent: queuedUnitFinished (thisActionTarget==New unit made（使新的单位制造的单位）)<br>autoTriggerOnEvent: touchTargetSuccess (thisActionTarget==Target touched（是碰撞到了目标单位的单位）)<br>•所有的事件均可以以此类推 | addResourcesWithLogic:Res=(eventSource.resource.credits) | unit / marker |  |
| attachment | 附件 | （参数：[slot(槽位)]、[withTag(带有标签)]）<br>self.attachment(withTag='x').lastDamagedBy.getAsMarker() | setResourcesWithLogic:Res=(attachment(slot=0).resource.credits) | unit |  |
| transporting | 运输 | （参数：[slot]）<br>if self.transporting(slot=0).hasResources(gold=100) | addResourcesWithLogic:Res=(transporting(slot=0).resource.credits) | unit |  |
| attacking | 攻击 | 当前正在攻击的目标，可能不是当前的路径点目标。<br>if attacking.tags(includes='bug') and attacking.hp < 20 | setResourcesWithLogic:Res=(attacking.resource.credits) | unit |  |
| lastDamagedBy | 最后伤害源 | 最后一个攻击这个的单位。 | addResourcesWithLogic:Res=(lastDamagedBy.resource.credits) | unit |  |
| parent | 父单位 | 传输器或附件父级。 （注：单元在无连接槽位时运输时处于暂停状态）<br>Eg autoTrigger: if parent.energy > 100 | setResourcesWithLogic:Res=(parent.resource.credits) | unit |  |
| activeWaypointTarget | 活动路径点目标 | 当前活动航路点目标。 包括攻击、运输、修理等。<br>if distanceBetween(self, activeWaypointTarget) < 100 | addResourcesWithLogic:Res=(activeWaypointTarget.resource.credits) | unit |  |
| customTarget1 | 自定义目标1 | 自定义内存，默认为创建该单位的单位。<br>if parent.customTarget1 == self | setResourcesWithLogic:Res=(customTarget1.resource.credits) | unit |  |
| customTarget2 | 自定义目标2 | 自定义内存，默认为空 | addResourcesWithLogic:Res=(customTarget2.resource.credits) | unit |  |
| nearestUnit | 距离自己最近的单位 | (withinRange=500, withTag='x',relation='any',incompleteBuildings=true,withoutTag="xg") 搜索一个距离自己最近的单位（不推荐在 autoTrigger 中进行检查） | setResourcesWithLogic:Res=(nearestUnit.resource.credits) | unit |  |
| globalSearchForFirstUnit | 全局检查第一个单位 | (withTag=x,relation=any,incompleteBuildings=true) - 返回找到的与过滤器匹配的第一个（也是最旧的）单元。 慢，避免在 autoTrigger 检查中使用 | addResourcesWithLogic:Res=(globalSearchForFirstUnit.resource.credits) | unit |  |
| nullUnit | 空单位 | 返回一个空单位引用，用于比较 | if self.parent == nullUnit | compare value |  |
| null | 空 | 返回一个零值，可以用来检测单位引用为空 | if self.parent == null | compare value |  |
|  |  | 标记功能 |  |  |  |
| getAsMarker() | 获取为标记 | 在一个单位现在所在的位置创建一个临时标记。 标记的创建速度非常快，不再需要时会自动删除。 不链接到任何单位并且在单位死亡时仍然存在，并且在源移动时保持不变。 | if self.lastDamagedBy.getAsMarker() == nearestUnit() | marker |  |
| getOffsetAbsolute() | 获取绝对偏移 | ([x],[y],[height]) 返回具有绝对偏移量的标记（-y 是北，+x 是东） | if lastDamagedBy.getOffsetAbsolute() == self | marker |  |
| getOffsetRelative() | 获取相对偏移 | ([x],[y],[height],[dirOffset]) 返回具有相对偏移量的标记。 (y+ 是向前)<br>self.getOffsetRelative(y=100).nearestUnit(withinRange=70, withTag='mouse') != null | if lastDamagedBy.getOffsetRelative() == self | marker |  |
|  | 创造记号 | ([x],[y],[height],[dir],[teamId]) 返回地图标记。 (y+是向下)<br>createMarker(teamId=self.teamId).nearestUnit(withinRange=70, withTag='mouse') != null | if createMarker(x=1,y=1).nearestUnit == null | marker |  |
|  |  | 全局功能 |  |  |  |
| distance(x1, y1, x2, y2) | 点距离 | 计算两点之间的距离 | autoTrigger:if distance(self.x(),self.y(),memory.target.x(),memory.target.y()) < 400 | float |  |
| distanceSquared(x1, y1, x2, y2) | 点距离方差 | 返回两点之距离差的平方。 比distance快，因为少了开方这一步。 | autoTrigger:if distanceSquared(self.x(),self.y(),memory.target.x(),memory.target.y()) < 400 | float |  |
| distanceBetween(unit1, unit2) | 单位距离 | 返回两个单位之间的距离 | distanceBetween(self, activeWaypointTarget) < 100 | float |  |
| distanceBetweenSquared(unit1, unit2) | 单位距离方差 | 返回两个单位之间的平方距离。 比 distanceBetween 快一点 | if distanceBetweenSquared(self, self.attacking) > 1000 | float |  |
| game.nukesEnabled() | 核武启用 | 如果在此游戏的设置中启用了核武器，则返回 true。 | if game.nukesEnabled() | bool |  |
| int([float]) | 取整 | 从数字中删除小数位。（可以在${x}中使用） | if int(4.2) == 4<br>price:${int(a)}（这里我们假设a是1.4，则该值返回1） | float |  |
| select(LogicBoolean, logicA, logicB) | 选择 | 如果布尔值为真则返回 textA 否则返回 textB | if select(self.isMoving,5,-5) == 5 | condition string |  |
| debug(LogicBoolean) | 调试 | 返回一个文本，显示该单位有关于这个逻辑的数据 | if str(debug(self.hp)) == "Hp=2400" | logic |  |
| debugPassthrough(LogicBoolean) | 调试通行 | 显示这个逻辑在该单位上的值，并在调试模式中发送单位本身关于这个逻辑的调试消息，请打开调试模式选中单位后查看 | if str(debugPassthrough(self.hp)) == "2400" | logic / message |  |
| str(x) | 转为字符串 | 将数字、单位、布尔值、逻辑显示值等转换为字符串 | if str(self.energy)+'x' == '100x' | string |  |
| substring(string,logicNumber(start),logicNumber(end)) | 子字符串 | 提取指定字符串长度内的字符串，例如 substring('hello',0,2) == 'he' | if substring('hello',0,2) == 'he' | string |  |
| length(string) | 字符串长度 | 以数字形式返回字符串或者值类型是字符串的逻辑长度 | if length("string") == 6 | integer |  |
| squareRoot(num) | 开方 | 返回一个数的平方根 | if squareRoot(4) == 2 | float |  |
| sqrt(num) | 开方 | 返回一个数的平方根（只能在${x}中使用） | price:${sqrt(a)}（这里我们假设a是4，则该值返回2） | float |  |
| min(num1, min2) | 最小值 | 返回最小的数字 | damage = min(self.hp, self.energy) | float |  |
| max(num1, min2) | 最大值 | 返回最大的数字 | max(5, 10) == 10 | float |  |
| cos([float]) | 算余弦 | 返回填入的值的余弦（可以在${x}中使用） | if cos(60) == 0.5<br>price:${cos(a)}（这里我们假设a是0，则该值返回1） | float |  |
| sin([float]) | 算正弦 | 返回填入的值的正弦（可以在${x}中使用） | if sin(30) == 0.5<br>price:${sin(a)}（这里我们假设a是0，则该值返回0） | float |  |
| thisActionIndex/index | 行动索引/索引 | 由alsoTriggerActionRepeat和alsoTriggerAction连用来改变该logic的值（通俗点来讲，就是被also触发的顺序位） | if index/thisActionIndex == 1 | integer |  |
| uppercase(string) | 字符大写 | 给字符串中的所有小写字母进行大写处理 | if uppercase("abc") == "ABC" | string |  |
| lowercase(string) | 字符小写 | 给字符串中的所有大写字母进行小写处理 | if lowercase("ABC") == "abc" | string |  |
| direction(x1,y1,x2,y2) | 点朝向 | 给出两个点之间的直线相对于前者的点朝向的角度 | if direction(1,1,10,10) == 45 | float |  |
| directionBetween(unit1,unit2) | 单位朝向 | 给出两个单位参考之间的直线相对于前者单位朝向的角度 | if directionBetween(self,self.customTarget1) == 90 | float |  |
| true() | 真() | if语句里套一个true()...... | if true() and true() == true | TRUE |  |
| false() | 假() | if语句里套一个false()...... | if false() and true() == false | FALSE |  |
| rnd(min[float],max[float]) | 范围内随机取数 | 可能会是浮点值，可以使用int()取整数部分 | if rnd(1,100) == 50 | random float |  |
|  |  |  |  |  |  |
| 放置规则 | [placementRule_NAME] | 建造建筑物需要的条件 |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| anyRuleInGroup | 放置规则组 | 放置规则组名。（仅需要通过此组规则中的1条，而不是全部通过。在其他放置规则中可使用相同的组名称来创建组。） | anyRuleInGroup:DogFoodPlace | string |  |
| searchTags | 检索标签 | 搜索至少包含这些标签之一的任何单位 | searchTags:redFox | tag list |  |
| searchTeam | 检索队伍 | 要搜索的团队可以是：自身\|中立\|盟友非自身\|盟友\|敌人\|任何。  own\|neutral\|allyNotOwn\|ally\|enemy\|any | searchTeam:own | relation |  |
| searchOffsetX | 检索偏移 | 检索偏移，默认为0 | searchOffsetX:0 | float |  |
| searchOffsetY | 检索偏移 | 检索偏移，默认为0 | searchOffsetY:0 | float |  |
| searchDistance | 搜索距离 | 搜索距离 | searchDistance:99 | float |  |
| excludeIncompleteBuildings | 排除不完整建筑 | 排除不完整的建筑 | excludeIncompleteBuildings:true | bool |  |
| excludeNonBuildings | 排除非建筑 | 排除非建筑 | excludeNonBuildings:true | bool |  |
| minCount | 最小数量 | 设定需要在搜索中找到的单位的最小数量。(如需要靠近某物)。默认值为0 | minCount:1 | integer |  |
| maxCount | 最大数量 | 在匹配失败前设置最大单位数量(例如不能接近某个值)。默认为无限的 | maxCount:1 | integer |  |
| blocksPlacement | 禁止放置 | 锁定放置。默认为true。 | blocksPlacement:true | bool |  |
| cannotPlaceMessage | 失败信息 | 如果此放置规则失败，则会向玩家显示消息（将成为mergedRuleGroup中的第一个失败规则） | cannotPlaceMessage:您不能睡觉，因为附近有chemms在游荡~ | LocaleString |  |
| cannotPlaceMessage_[Language] | 失败信息(多语言) | 如果此放置规则失败，则会向玩家显示消息（将成为mergedRuleGroup中的第一个失败规则）（支持多种语言显示） | cannotPlaceMessage_zh:您不能睡觉，因为附近有chemms在游荡~ | LocaleString |  |
| checkEachTile | 检查每个地块 | [true / false]默认为true（仅对测试单元中心设置为false，true会检查显示在放置网格上的单元下方的每个图块） | checkEachTile:true | bool |  |
| aiSuggestionOnly | 仅限ai建议 | 不能与blocksPlacement一起使用，仅仅只是建议AI这么做 | aiSuggestionOnly:true | bool |  |
|  |  |  |  |  |  |
| 内置资源&价格可用资源 | Resources | Built in Resources&Price Available Resources |  |  |  |
| 代码 | 代码翻译 | 由addResources，price等使用 | 例子 | 值类型 |  |
| credits | 资金 | 铁锈中默认用于全局的资金。 | credits | Resources |  |
| energy | 能量 | 单位使用的能量，如可用于开火限制。 | energy | Resources |  |
| hp | 血量 | 单位血量，一般血量归零时就会销毁单位。 | hp | Resources |  |
| shield | 护盾 | 单位护盾，一般用于抵挡敌人攻击。 | price: hp=-100, shield=100 | Resources |  |
| ammo | 弹药 | 弹药，每个单位的隐藏值，供mod使用。 | ammo=1 | integer |  |
| setFlag | 设置标志 | 设置标志，范围0-31。标志存储在每个单元中，与addResources，resourceUsage或price等一起使用。 | setFlag:1，setFlag=1,3 | integer |  |
| unsetFlag | 取消标志 | 取消已经设置的标志 | unsetFlag=1 , unsetFlag:1-5 | integer |  |
| hasFlag | 拥有标志 | 拥有标志。 | hasFlag:1，hasFlag=1\|2 | integer |  |
| hasMissingFlag | 没有标志 | 没有标志。 | hasMissingFlag:1，hasMissingFlag=1\|13 | integer |  |
| [CustomResources] | [CustomResources] | [global_resource_x]或[resource_x]节中定义的任何资源。 | gold=5, stone=20 | Resources |  |
|  |  |  |  |  |  |
| 全局资源 | [global_resource_NAME] | [global_resource_Golds] |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| stackHorizontal | 堆叠水平 | 定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到"all-units.template"（位于mod根目录） | stackHorizontal:true | bool |  |
| displayName | 显示名称 | 用户界面中此资源的名称 | displayName:资金 | string |  |
| displayNameShort | 显示短名称 | 在较小的UI上显示的文本（如action的悬浮文本）默认为displayName | displayNameShort:￥ | string |  |
| hidden | 隐藏 | 向玩家隐藏此资源 | hidden:true | bool |  |
| priority | 优先级 | 如果多个mod单元中定义了同名的资源，则使用具有最高优先级的displayName/displayColor | priority:1 | float |  |
| displayColor | 显示颜色 | 颜色，可以是十六进制，带有可选的alpha | displayColor:#FF0000 | color |  |
| displayRoundedDown | 显示为整数 | 对资源进行舍入显示为整数。 | displayRoundedDown:true | bool |  |
| displayWhenZero | 为零时显示 | 资源为零时也显示。 | displayWhenZero:true | bool |  |
| iconImageUseInText | 在动作(action)的描述中显示资源图标 | 默认为true | iconImageUseInText:false | bool |  |
| iconImage | 图标 | 自定义该资源的象征图像 | iconImage:chemms.png | image |  |
| displayNameHideWhenIconShownInText | 显示名称在文本中显示图标时隐藏 | (默认为false) - 有助于缩短说明文本 | displayNameHideWhenIconShownInText:true | bool |  |
| displayNameHideWhenIconShownInHUD | 文本显示名称在HUD中显示图标时隐藏 | 默认为false | displayNameHideWhenIconShownInHUD:true | bool |  |
| displayColorUseInText | 在动作(action)的描述中显示资源颜色 | 默认为true | displayColorUseInText:false | bool |  |
| appendResourceInHUD | 在HUD中追加资源 | 使用后，在游戏界面中这个资源值将会叠在目标资源值的后面，并且继承目标资源的颜色和图标。这个资源值后面也能继续叠加其它资源值 | appendResourceInHUD:<resources:name> | resource ref |  |
| displayPrefixInHUD | 在HUD中显示前缀 | 在资源数值前显示的文本，会替换掉资源原本的名称以及冒号，和appendResourceInHUD一同使用时可以用来显示资源限制之类的内容 | displayPrefixInHUD:321 | string |  |
| displayPostfixInHUD | 在HUD中显示后缀 | 在资源数值之后显示的文本 | displayPostfixInHUD:123 | string |  |
| displayTextAppendResourceWithGap | 显示具有间隙的附加资源文本 | 默认为false。将不相关的资源放在同一行时，在资源之间添加空格。 | displayTextAppendResourceWithGap:true | bool |  |
| appendResourceInHUD_whenThisZero | 在此为零时在HUD中追加资源 | 默认为true。为false时附加资源（如用于显示最大值的资源）与父资源一起隐藏。 | appendResourceInHUD_whenThisZero:false | bool |  |
| includeInStats | 包括值 | 包括该资源，与valueInStats类似 | includeInStats:true | bool |  |
| valueInStats | 统计值 | (如果全局且未隐藏，则默认为 1(true)，否则默认为 0(false)） - 用于游戏后的统计和回放的排行榜 | valueInStats:true | bool/integer |  |
| displayInHud | 在HUD里显示 | - 用于 appendResourceInHUD（在HUD中追加资源） 中的资源，而不会隐藏它们，这有其他副作用 | displayInHud:true | bool |  |
| displayDigitGrouping | 资源数字分组 | none/comma/space--(空,逗号,空格)(例如资源数量10000,空格分组就是10 000) | displayDigitGrouping:none | display type |  |
| displayTextAppendResource | 显示文本里添加资源 | 往文本里添加一个资源 | displayTextAppendResource:<resource:name> | resource ref |  |
| displayPos | 显示排序 | 显示优先级，越小越居上 | displayPos:1 | integer |  |
| displayWithRounding | 四舍五入取整 | 将资源的小数部分用四舍五入法变成整数，此代码为真后，该资源数字一定是整数 | displayWithRounding:true | bool |  |
| displayTextPrefix | 显示文本前缀 | 与displayPrefixInHUD有着相同的作用，而且它俩不能共存 | displayTextPrefix:321 | string |  |
| displayTextPostfix | 显示文本后缀 | 与displayPostfixInHUD有着相同的作用，而且它俩不能共存 | displayTextPostfix:123 | string |  |
|  |  |  |  |  |  |
| 局部资源 | [resource_NAME] | [resource_MyMoney] |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| stackHorizontal | 堆叠水平 | 将此代码为真的资源统一排列到同一水平线上。 | stackHorizontal:true | bool |  |
| displayName | 显示名称 | UI中此资源的名称(如悬停在单元信息上) | displayName:计数器 | string |  |
| displayNameShort | 显示短名称 | 在较小的UI上显示的文本（如action的悬浮文本）默认为displayName | displayNameShort:s | string |  |
| hidden | 隐藏 | 对玩家隐藏这个资源 | hidden:true | bool |  |
| equivalentGlobalResourceForAI | 作为AI的全局资源 | 用于向AI提示具有本地资源的资源节点可用于获取不同的全局资源。例如，当一台收割机卸载资源 | equivalentGlobalResourceForAI:gold,diamond | resource ref |  |
| displayRoundedDown | 显示为整数 | 对资源进行舍入显示为整数。 | displayRoundedDown:true | bool |  |
| iconImageUseInText | 在动作(action)的描述中显示资源图标 | 默认为true | iconImageUseInText:false | bool |  |
| iconImage | 图标 | 自定义该资源的象征图像 | iconImage:chemms.png | image |  |
| displayNameHideWhenIconShownInText | 显示名称在文本中显示图标时隐藏 | (默认为false) - 有助于缩短说明文本 | displayNameHideWhenIconShownInText:true | bool |  |
| displayNameHideWhenIconShownInHUD | 文本显示名称在HUD中显示图标时隐藏 | 默认为false | displayNameHideWhenIconShownInHUD:true | bool |  |
| displayColorUseInText | 在动作(action)的描述中显示资源颜色 | 默认为true | displayColorUseInText:false | bool |  |
| appendResourceInHUD | 在HUD中追加资源 | 使用后，在游戏界面中这个资源值将会叠在目标资源值的后面，并且继承目标资源的颜色和图标。这个资源值后面也能继续叠加其它资源值 | appendResourceInHUD:<resources:name> | resource ref |  |
| displayPrefixInHUD | 在HUD中显示前缀 | 在资源数值前显示的文本，会替换掉资源原本的名称以及冒号，和appendResourceInHUD一同使用时可以用来显示资源限制之类的内容 | displayPrefixInHUD:321 | string |  |
| displayPostfixInHUD | 在HUD中显示后缀 | 在资源数值之后显示的文本 | displayPostfixInHUD:123 | string |  |
| displayTextAppendResourceWithGap | 显示具有间隙的附加资源文本 | 默认为false。将不相关的资源放在同一行时，在资源之间添加空格。 | displayTextAppendResourceWithGap:true | bool |  |
| appendResourceInHUD_whenThisZero | 在此为零时在HUD中追加资源 | 默认为true。为false时附加资源（如用于显示最大值的资源）与父资源一起隐藏。 | appendResourceInHUD_whenThisZero:false | bool |  |
| includeInStats | 包括值 | 包括该资源，与valueInStats类似 | includeInStats:true | bool |  |
| valueInStats | 统计值 | (如果全局且未隐藏，则默认为 1(true)，否则默认为 0(false)） - 用于游戏后的统计和回放的排行榜 | valueInStats:1 | bool/integer |  |
| displayTextAppendResource | 显示文本里添加资源 | 在显示的UI中添加该资源 | displayTextAppendResource:<resource:name> | resource ref |  |
| displayDigitGrouping | 资源数字分组 | none/comma/space--(空,逗号,空格)(例如资源数量10000,空格分组就是10 000) | displayDigitGrouping:none | display type |  |
| displayPos | 显示排序 | 显示优先级，越小越居上 | displayPos:1 | integer |  |
| displayWithRounding | 四舍五入取整 | 将资源的小数部分用四舍五入法变成整数，此代码为真后，该资源数字一定是整数 | displayWithRounding:true | bool |  |
| displayTextPrefix | 显示文本前缀 | 与displayPrefixInHUD有着相同的作用，而且它俩不能共存 | displayTextPrefix:321 | string |  |
| displayTextPostfix | 显示文本后缀 | 与displayPostfixInHUD有着相同的作用，而且它俩不能共存 | displayTextPostfix:123 | string |  |
|  |  |  |  |  |  |
| 贴图/贴花 | 1.15p9新增 | [decal_NAME] |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
| layer | 绘制图层 | 可以填入的值：shadow(阴影), beforeBody(在主体之下), afterBody(在主体之上), onTop(在最顶端), beforeUI(在显示界面之上)，inactive(无效) | layer:beforeUI | layer type |  |
| order | 排序(默认为0并且按照ini里的顺序) | Order with other decals, defaults 0 and uses order it appears in ini（使用其他贴花排序，默认为0，并使用其在ini中显示的顺序） | order:1 | float |  |
| onlyWhenSelectedByOwnPlayer | 仅在被拥有者选中时绘制 | Only draw if the viewing player is the same as this unit.（只有当玩家查看本单位时，才可绘制贴花。） | onlyWhenSelectedByOwnPlayer:true | bool |  |
| onlyWhenSelectedByEnemyPlayer | 被敌方玩家选中时绘制 | 被敌方玩家选中时绘制 | onlyWhenSelectedByEnemyPlayer:true | bool |  |
| onlyWhenSelectedByAllyNotOwnPlayer | 非自身队伍的盟友选中时绘制 | 非自身队伍的盟友选中时绘制 | onlyWhenSelectedByAllyNotOwnPlayer:false | bool |  |
| onlyWhenSelectedByAnyPlayer | 被任意玩家选中时绘制 | Show when any player selects this unit.（在任何玩家选中本单位值绘制贴花） | onlyWhenSelectedByAnyPlayer:false | bool |  |
| includeParentsSelection | 包括被父单位选中 | onlyWhenSelected*also check parents selection（仅当选定时*还检查父项选择） | includeParentsSelection:true | bool |  |
| onlyPlayersWithUnitControl | 仅在查看者能够控制此单位时绘制 | Only draw if viewing player could control this unit（仅当观看者可以控制此单元时才绘制贴花） | onlyPlayersWithUnitControl:false | bool |  |
| onlyTeam | 仅在查看者为特定队伍时显示 | Only draw when this relation between unit and viewing player，Can be filled in:own\|notOwn\|neutral\|allyNotOwn\|ally\|enemy\|any         (仅当单位和查看玩家之间的关系时绘制，可以填写：己方\|非己方\|中立方\|除自己外盟友\|盟友\|敌方\|任意) | onlyTeam:any | TeamRelation |  |
| onlyWithZoomLevelOrMore | 仅当缩放到当前大小或更大时绘制 | onscreen. Recommended to be set on decals for 3d voxel style units, small details or small shadows.Would hide decal when zoomed out a bit. Useful to reduce draw calls for performance when a lot of units might be<br>（屏幕上。建议设置在三维立体体积元素样式单位、小细节或小阴影的贴花上。缩小一点时会隐藏贴花。当许多单元可能需要时，有助于减少性能的调用） | onlyWithZoomLevelOrMore:2.5 | float |  |
| onlyWhileActive | 仅在单位建造完成时绘制 | Only draw when unit has been completed（仅在单位完成时绘制，比如建造者建造一般的建筑就不算) | onlyWhileActive:true | bool |  |
| onlyOnBodyFrameOf | 只在主体关键帧时绘制 | 只有在主体到某个关键帧时绘制 | onlyOnBodyFrameOf:1 | integer |  |
| onlyWhileAlive | 仅在存活时绘制 | (If beforeUI layer default true, else default false)(如果图层(layer)为beforeUI默认为true,否则false，为ture死后消失) | onlyWhileActive:false | bool |  |
| onlyInPreview | 仅在侧边栏和建筑放置预览中显示 | Only show in sidebar, and building placement preview（仅在侧边栏中显示，以及建筑布局预览） | onlyInPreview:true | bool |  |
| onlyOnNonPreview | 仅在非预览中显示(与上一条相反) | Only show on real unit, not action sidebar, etc（仅在真实单元上显示，而不是动作侧边栏等） | onlyOnNonPreview:true | bool |  |
| imageScale | 图像缩放(倍数) | 图像缩放(倍数) | imageScale:self.hp | LogicFloat |  |
| imageScaleX | 图像X缩放 | 图像X缩放 | imageScaleX:self.shield | LogicFloat |  |
| imageScaleY | 图像Y缩放 | 图像Y缩放 | imageScaleY:self.energy | LogicFloat |  |
| image | 图像 | 图像 | image:XXX.png | file(image) |  |
| teamColors | 阵营色 | bool. Enable team coloring on image and imageStack（布尔值。在图像和图像堆栈上启用队伍色） | teamColors:true | bool |  |
| imageStack | 图像堆栈 | list of images recommended for 3d voxel style units as images can be batch drawn when using the same sprite sheet.（推荐用于三维立体体积元素样式单位的图像列表，因为当使用相同的子画面时，可以批量绘制图像。）(目前没有实例所以不清楚,但确定是用于3d单位) | imageStack:XXX.png | file(image) |  |
| stack_hOffset | 列表图像高度偏移 | for 3d voxel style units.（用于三维立体体积元素样式单位。） | stack_hOffset:1 | float |  |
| stack_frameOffset | 列表图像帧偏移 | for 3d voxel style units.（用于三维立体体积元素样式单位。） | stack_frameOffset:2 | integer |  |
| stack_drawInReverseOrder | 列表图像绘图顺序 | 列表图像绘图顺序 | stack_drawInReverseOrder:0 | integer |  |
| stack_indexStart | 列表图像起始图像 | logic int (Starting image of the image stack)（动态整数（图像堆栈的起始图像）） | stack_indexStart:self.x | logic integer |  |
| stack_indexCount | 列表图像数量 | logic int (Number of images to draw. Could be set to 1 to use stack_indexStart as an image picker)（动态整数（要绘制的图像数。可以设置为1以使用堆栈索引开始作为图像选择器）） | stack_indexCount:self.y | logic integer |  |
| total_frames | 总帧数(跟后面两个二选一使用) | Use total_frames or frame_width/frame_height（使用 总帧数 或者 帧宽度/帧高度） | total_frames:12 | integer |  |
| frame_verticalOrdering | 帧清单 | 是否列出帧清单 | frame_verticalOrdering:true | bool |  |
| frame_width | 帧宽度 | 帧宽度（不可与总帧数一起设置） | frame_width:2 | integer |  |
| frame_height | 帧高度 | 帧高度 | frame_height:2 | integer |  |
| frame | 帧 | (与total_frames相比,frame是动值,可以改变内存来修改第几帧) | frame:self.maxHp | logic integer |  |
| addBodyFrameMultipliedBy | 添加主体帧乘数 | 添加主体帧时的乘数 | addBodyFrameMultipliedBy:1.2 | float |  |
| isVisible | 可见 | 表明该帖花是否可以被我们看见(可以使用逻辑) | isVisible:if self.isMoving | LogicBoolean |  |
| xOffsetRelative | X相对偏移 | (note use basePosition with createMarker/etc for logic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等）） | xOffsetRelative:200 | float |  |
| yOffsetRelative | Y相对偏移 | (note use basePosition with createMarker/etc for logic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等）） | yOffsetRelative:200 | float |  |
| xOffsetAbsolute | X绝对偏移 | (note use basePosition with createMarker/etc for logic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等）） | xOffsetAbsolute:self.hp | LogicFloat |  |
| yOffsetAbsolute | Y绝对偏移 | (note use basePosition with createMarker/etc for logic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等）） | yOffsetAbsolute:self.hp | LogicFloat |  |
| hOffset | 高度偏移 | height offset（高度偏移） | hOffset:2 | float |  |
| dirOffset | 角度偏移 | 角度偏移 | dirOffset:25 | float |  |
| pivotOffset | 坐标系旋转 | (相当于把单位定位的直角坐标系旋转该角度,然后重新确定xy) 只影响X/Y相对偏移,不旋转图像-----only effects xOffsetRelative/yOffsetRelative without rotating image | pivotOffset:125 | float (180>X>-180) |  |
| alwaysStartDirAtZero | 总是固定角度为零(总是朝上) | Useful for UI(对UI有用) | alwaysStartDirAtZero:true | bool |  |
| alwayStartDirAtZero | 总是角度为零(总是朝上) | Useful for UI(对UI有用) | alwayStartDirAtZero:true | bool |  |
| alwaysStartHeightAtZero | 总是固定高度为零 | Useful for UI on air and hover units（对空中和两栖单位的UI有用） | alwaysStartHeightAtZero:false | bool |  |
| basePosition | 中心位置(填单位参考) | unit or marker to draw from as the base（作为基础绘制的单位或标记） | basePosition:nearestUnit | unit ref |  |
| basePositionFromLeg | 以脚为中心位置 | Use a leg/arm position instead of unit body as base（使用 腿/脚 位置而不是单位身体作为基础） | basePositionFromLeg:1 | leg ref |  |
| basePositionFromTurret | 以炮塔为中心位置 | Use a turret position instead of unit body as base（使用炮塔位置而不是单元主体作为底座） | basePositionFromTurret:5 | turret ref |  |
| basePositionFromLegEnd | 以腿为中心位置 | 填腿脚/胳膊节 | basePositionFromLegEnd:leg_1 | leg/arm ref |  |
| drawLineTo | 绘制线条到(受到颜色和宽度影响) | Draws a line to this location affected by color and width（在此位置绘制一条受颜色和宽度影响的线） | drawLineTo:nearestUnit | unit or marker |  |
| image_shadow | 阴影图像 | 阴影图像 | image_shadow:XXX.png | image |  |
| shadowOffsetX | 阴影偏移X | 阴影偏移X | shadowOffsetX:12 | float |  |
| shadowOffsetY | 阴影偏移Y | 阴影偏移Y | shadowOffsetY:21 | float |  |
| color | 颜色(影像图像和线条) | affects image and line.（影响图像和线条。） | color:#acefdb | color |  |
| alpha | 不透明度(影像颜色和线条) | LogicFloat (0-1). Stacks with alpha in color. affects image and line.（动态浮点值（0-1）。以颜色堆叠透明度。影响图像和线条。） | alpha:self.shield | LogicFloat (0-1) |  |
| lineWidth | 线宽度 | 表明这条线的宽度 | lineWidth:21.564 | float |  |
|  |  |  |  |  |  |
| 模板 | [template_NAME] |  |  |  |  |
| 代码 | 代码翻译 | 描述 | 例子 | 值类型 |  |
|  |  | 模板部分可以具有任何键，并且其自身无效。 |  |  |  |
|  |  | 可以使用[core]copyFrom从其他文件中引用模板。例如：[core]copyFrom:ROOT:effects/explodeEffects.template。copyFrom可以一次引用多个文件。 |  |  |  |
|  |  | -以下所有这些功能都可以与任何部分一起使用，而不仅仅是模板- |  |  |  |
| @copyFromSection | 复制节 | 在任何节中使用，以引用节或模板的代码。如@copyFromSection template_name/action_name/projectile_name | @copyFromSection:projectile_1 |  |  |
| @copyFrom_skipThisSection | 复制但跳过节 | 在任何节中使用，例如，在引用时候不复制某个action. | [action_test]<br>@copyFrom_skipThisSection:true |  |  |
| @define X | 局部变量 | 在一个节中定义一个局部变量(最好在模板外部) | @define targetEffect: boom |  |  |
| @global X | 全局变量 | 定义在所有节中使用的全局变量。注意：局部变量具有更高的优先级 | @global targetEffect: pop |  |  |
| ${X} | 变量引用 | 该方法用于引用section中@define或者@global定义的变量的值，运算符和数学方法的使用请在代码表logic区中背景颜色为肉色或紫色处查看 | spawnEffects:effect_${targetEffect} |  |  |
| ${section.key} | 值引用 | 该方法用于引用指定section下的key所填的值，运算符和数学方法的使用请在代码表logic区中背景颜色为肉色或紫色处查看，冷知识请跳转“其他”工作簿第二栏目底部寻找 | addResources:credits=${core.price * 2 + 10} |  |  |
| %{X} | %{X} | 可用于将动态逻辑添加到某些字符串中（此方式只能用于字符串(mod-info.txt的除外)）。 该值将每一帧更新。<br> [action]text: Missing hp %{self.maxHp - self.hp} |  |  |  |
| """[文本]""" | 多行字符串<br>多行注释 | 可用于多行字符填写。 从最终结果中删除换行符。ini文件任意地方均可使用。但需注意，您在打了一个"""后，必须要有一个"""与之对应，否则一定报错，不能用'''，否则也报错<br>"""在位于最行首时，作用将会改为多行注释 | copyFrom:"""<br>ROOT:a.ini,<br>ROOT:b.ini,<br>ROOT:c.ini<br>""" |  |  |
|  |  |  |  |  |  |
| 注释 | [comment_NAME] |  |  |  |  |
| 啥都不是的玩意儿 |  | 描述 |  |  |  |
|  |  | 注释部分可以有任何键，但没有效果。 |  |  |  |
| 游戏默认声音列表(用于炮塔开火声或其他音效参考) |  | bug_attack, bug_die, building_explode, cannon_firing, click, click_add, click_remove, firing3, firing4, gun_fire, interface_error, large_gun_fire1, large_gun_fire2, laser_deflect, laser_deflect2, lighting_burst, message, missile_fire, missile_hit, move, nuke_explode, nuke_launch, plasma_fire, plasma_fire2, tank_firing, unit_explode, unit_explode_old, warning | 这是luke加上的，更多内置效果、内部参数我在"参数表"内列出。 |  |  |
|  |  | 特殊参数 |  |  |  |
| techLevel | 边界大小 | “techLevel”单位生成参数,主要用于内置的单元和设置damagingBorder大小。 |  |  |  |
|  |  | 特殊单位 |  |  |  |
| damagingBorder | 伤害边界 | 此内部单位会生成一个圆形的安全区域，所有区域外的单位会不断收到伤害直到死亡。 | spawnUnits:damagingBorder(techLevel=4,offsetRandomX=1,offsetRandomY=1) |  |  |
| zonemarker | 预备伤害边界 | 此单位用于指示伤害边框移动到何处，是放大还是缩小，可使用“techLevel”控制大小。 | spawnUnits:zonemarker(techLevel=2,offsetRandomX=1,offsetRandomY=1) |  |  |
| setRally | 设置集结点 | 用于设置建造完成的单位的集结点，而不是建筑门口 | canBuild_1_name:setRally<br>canBuild_1_pos:1 |  |  |
| reclaim | 回收 | 回收建筑并返还75%资金 | canBuild_1_name:reclaim<br>canBuild_1_pos:1 |  |  |
| repair | 维修 | 主动维修建筑 | canBuild_1_name:repair<br>canBuild_1_pos:1 |  |  |
|  |  | 一些额外无效代码 |  |  |  |
| attackMovementSpeed | 攻击时移动速度 | 几乎无影响 |  | float |  |
| attackMovementSpread | 攻击时移动散布 | 几乎无影响 |  | float |  |
| 以上为攻击节，以下为图像节（填写均没有什么效果，不建议使用） |  |  |  |  |  |
| imageSmoothing | 图像平滑 | 让图像变得平衡，这在可以避免一些情况产生的锯齿。（这影响渲染性能） |  | bool |  |
| imageSmoothingWhenZoomedIn | 在缩放时图像依然平滑 | 几乎无影响 |  | bool |  |
| 模组 | section（mod-info.txt） | [mod] |  |  |  |
| 代码 | 翻译 | 描述 | 例子 | 值类型 |  |
| title | 标题 | 模组标题，会显示到加载页面里面，代表模组的名称 | title:模组名称 | string |  |
| description | 描述 | 对于的模组描述 | description:模组描述 | string |  |
| tags | 标签 | 模组标签，方便和其他模组进行区分（给steam用的） | tags:模组,自制,肉鸽(?) | tag(s) |  |
| minVersion | 最低版本 | 告诉你该模组支持的最低版本，decal为1.15p9，数组为1.15p11，但凡这两个没有在minVersion后面写上相应版本，一定会报错 | minVersion:v1.15 | version |  |
| thumbnail | 略图 | 模组略图，在游戏里不会显示，因为这个是给steam用的 | thumbnail:xxx.png | image |  |
|  |  |  |  |  |  |
| 音乐 | section（mod-info.txt） | [music] |  |  |  |
| 代码 | 翻译 | 描述 | 例子 | 值类型 |  |
| sourceFolder | 源文件夹 | 填文件夹路径，游戏将会播放此文件夹内的音乐（仅支持.ogg或.wav） | sourceFolder:music/background\ | floder path |  |
| whenUsingUnitsFromThisMod_playExclusively | 当使用本模组时强制播放 | 使用该代码，游戏将仅播放这个文件夹内的ogg音频（手机端只要是音频就能播放） | whenUsingUnitsFromThisMod_playExclusively:true | bool |  |
| addToNormalPlaylist | 将音乐添加至默认播放列表 | 使用该代码，游戏的音乐播放列表将添加所填的目录下的ogg音频（手机端只要是音频就能播放） | addToNormalPlaylist:true | bool |  |
|  |  |  |  |  |  |
| 地图（压根没有这个节） |  |  |  |  |  |
| 未知代码(不可用(?)) | 从dex的unitCLASS文件夹里搜出来的似乎并不属与单位的代码 |  |  |  |  |
| maxSpeed | 最大速度 |  |  | float |  |
| enabled | 启用 |  |  | LogicBoolean |  |
| movement_repelFromUnits | 单位运动排斥来自 |  |  | bool |  |
| onlySameTeam | 仅相同队伍可言 |  |  | bool |  |
| otherUnitHasTag | 其他单位有标签 |  |  | tags |  |
| movement_random | 随机移动 |  |  | bool |  |
| awayFromEdge | 边缘距离 |  |  | integer |  |