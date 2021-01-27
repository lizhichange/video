$(function () {
    function onBridgeReady() {
        WeixinJSBridge.call('hideOptionMenu');
    }
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }

    function changeUrlArg(url, arg, val) {
        var pattern = arg + '=([^&]*)';
        var replaceText = arg + '=' + val;
        return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[\?]') ? url + '&' + replaceText : url + '?' + replaceText);
    }

    let player = new Player({
        "id": "mse",
        "autoplay": false,
        "volume": 0.3,
        "fluid": true,
        "preloadTime": 15, // 默认预加载 15 秒
        "closeVideoTouch": true,
        "closeVideoDblclick": true,
        "closeVideoClick": true,
        "lang": 'zh-cn',
        "videoInit": true,
        "keyShortcut": 'on',
        "cssFullscreen": false,
        'x5-video-player-fullscreen': false,
        "x5-video-player-type": "h5",
        "x5-video-orientation": "portraint",
        "playsinline": true,
        //图片地址
        "poster": document.getElementById("imgUrl").value ? document.getElementById("imgUrl").value : '',
        "url": document.getElementById("videoUrl").value ? document.getElementById("videoUrl").value : "//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4",
        "whitelist": [
            ""
        ],
        "execBeforePluginsCall": [() => {
            console.log('Execute before plugins call')
        }]
    });

    //是否为PC端,如果是scrollbar端,默认自定义滚动条
    var isPC = typeof window.orientation == 'undefined';
    //创建MeScroll对象,内部已默认开启下拉刷新,自动执行up.callback,刷新列表数据;
    var mescroll = new MeScroll("mescroll", {
        //下拉刷新的所有配置项
        down: {
            use: true, //是否初始化下拉刷新; 默认true
            auto: true, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
            autoShowLoading: true, //如果在初始化完毕之后自动执行下拉回调,是否显示下拉刷新进度; 默认false. (需配置down的callback才生效)
            isLock: false, //是否锁定下拉,默认false;
            isBoth: false, //下拉刷新时,如果滑动到列表底部是否可以同时触发上拉加载;默认false,两者不可同时触发;
            callback: function (mescroll) {
                console.log("down --> callback");
                //下拉刷新的回调,默认重置上拉加载列表为第一页(down的auto默认true,初始化Mescroll之后会自动执行到这里,而mescroll.resetUpScroll会触发up的callback)
                mescroll.resetUpScroll();
            },
            hardwareClass: "mescroll-hardware", //硬件加速样式;解决iOS下拉因隐藏进度条而闪屏的问题,参见mescroll.css
            mustToTop: false, // 是否滚动条必须在顶部,才可以下拉刷新.默认false. 当您发现下拉刷新会闪白屏时,设置true即可修复.
            warpId: null, //可配置下拉刷新的布局添加到指定id的div;默认不配置,默认添加到mescrollId
            warpClass: "mescroll-downwarp", //容器,装载布局内容,参见mescroll.css
            resetClass: "mescroll-downwarp-reset", //高度重置的动画,参见mescroll.css
            textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本
            textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本
            textLoading: '加载中 ...', // 加载中的提示文本
            htmlContent: '<p class="downwarp-progress"></p><p class="downwarp-tip"></p>', // 布局内容
            inited: function (mescroll, downwarp) {
                console.log("down --> inited");
                //初始化完毕的回调,可缓存dom
                // mescroll.downTipDom = downwarp.getElementsByClassName("downwarp-tip")[0];
                // mescroll.downProgressDom = downwarp.getElementsByClassName("downwarp-progress")[0];
            },
            inOffset: function (mescroll) {
                console.log("down --> inOffset");
                //进入指定距离offset范围内那一刻的回调
                if (mescroll.downTipDom) mescroll.downTipDom.innerHTML = mescroll.optDown.textInOffset;
                if (mescroll.downProgressDom) mescroll.downProgressDom.classList.remove("mescroll-rotate");
            },
            outOffset: function (mescroll) {
                console.log("down --> outOffset");
                //下拉超过指定距离offset那一刻的回调
                if (mescroll.downTipDom) mescroll.downTipDom.innerHTML = mescroll.optDown.textOutOffset;
            },
            onMoving: function (mescroll, rate, downHight) {
                //下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离offset的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
                console.log("down --> onMoving --> mescroll.optDown.offset=" + mescroll.optDown.offset + ", downHight=" + downHight + ", rate=" + rate);
                if (mescroll.downProgressDom) {
                    var progress = 360 * rate;
                    mescroll.downProgressDom.style.webkitTransform = "rotate(" + progress + "deg)";
                    mescroll.downProgressDom.style.transform = "rotate(" + progress + "deg)";
                }
            },
            beforeLoading: function (mescroll, downwarp) {
                console.log("down --> beforeLoading");
                //准备触发下拉刷新的回调
                return false; //如果要完全自定义下拉刷新,那么return true,此时将不再执行showLoading(),callback();
            },
            showLoading: function (mescroll) {
                console.log("down --> showLoading");
                //触发下拉刷新的回调
                if (mescroll.downTipDom) mescroll.downTipDom.innerHTML = mescroll.optDown.textLoading;
                if (mescroll.downProgressDom) mescroll.downProgressDom.classList.add("mescroll-rotate");
            },
            afterLoading: function (mescroll) {
                console.log("down --> afterLoading");
                // 结束下拉之前的回调. 返回延时执行结束下拉的时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去结束下拉的场景, 参考案例【dotJump】
                return 0
            }
        },
        //上拉加载的所有配置项
        up: {
            use: true, //是否初始化上拉加载; 默认true
            auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认true
            isLock: false, //是否锁定上拉,默认false
            isBoth: true, //上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认false,两者不可同时触发; 这里为了演示改为true,不必等列表加载完毕才可下拉;
            isBounce: false, //是否允许ios的bounce回弹;默认true,允许回弹; 此处配置为false,可解决微信,QQ,Safari等等iOS浏览器列表顶部下拉和底部上拉露出浏览器灰色背景和卡顿2秒的问题
            callback: getListData, //上拉回调,此处可简写; 相当于 callback: function (page, mescroll) { getListData(page); }
            page: {
                num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
                size: 10, //每页数据条数
                time: null //加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
            },
            noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
            offset: 100, //离底部的距离
            toTop: {
                //回到顶部按钮,需配置src才显示
                warpId: null, //父布局的id; 默认添加在body中
                src: "/img/mescroll-totop.png?v=1", // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )
                offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000px
                warpClass: "mescroll-totop", //按钮样式,参见mescroll.css
                showClass: "mescroll-fade-in", //显示样式,参见mescroll.css
                hideClass: "mescroll-fade-out", //隐藏样式,参见mescroll.css
                duration: 300, //回到顶部的动画时长,默认300ms
                supportTap: false, //默认点击事件用onclick,会有300ms的延时;如果您的运行环境支持tap,则可配置true;
            },
            loadFull: {
                use: false, //列表数据过少,不足以滑动触发上拉加载,是否自动加载下一页,直到满屏或者无更多数据为止;默认false,因为可通过调高page.size或者嵌套mescroll-bounce的div避免这个情况
                delay: 500 //延时执行的毫秒数; 延时是为了保证列表数据或占位的图片都已初始化完成,且下拉刷新上拉加载中区域动画已执行完毕;
            },
            empty: {
                //列表第一页无任何数据时,显示的空提示布局; 需配置warpId或clearEmptyId才生效;
                warpId: null, //父布局的id; 如果此项有值,将不使用clearEmptyId的值;
                icon: "http://www.mescroll.com/img/mescroll-empty.png?v=1", // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )
                tip: "暂无相关数据~", //提示
                supportTap: false, //默认点击事件用onclick,会有300ms的延时;如果您的运行环境支持tap,则可配置true;
                customId: null // 自定义空布局的id; 如果此项有值,将不使用empty所有配置;空布局的显示隐藏只控制customId元素的显示隐藏;用于完全自定义empty的场景
            },
            clearId: null, //加载第一页时需清空数据的列表id; 如果此项有值,将不使用clearEmptyId的值;
            clearEmptyId: "list_videos_most_recent_videos_items", //相当于同时设置了clearId和empty.warpId; 简化写法;默认null; 注意vue中不能配置此项
            hardwareClass: "mescroll-hardware", //硬件加速样式,动画更流畅,参见mescroll.css
            warpId: null, //可配置上拉加载的布局添加到指定id的div;默认不配置,默认添加到mescrollId
            warpClass: "mescroll-upwarp", //容器,装载布局内容,参见mescroll.css
            htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>', //上拉加载中的布局
            htmlNodata: '<p class="upwarp-nodata">-- END --</p>', //无数据的布局
            inited: function (mescroll, upwarp) {
                console.log("up --> inited");
                //初始化完毕的回调,可缓存dom 比如 mescroll.upProgressDom = upwarp.getElementsByClassName("upwarp-progress")[0];
            },
            showLoading: function (mescroll, upwarp) {
                console.log("up --> showLoading");
                //上拉加载中.. mescroll.upProgressDom.style.display = "block" 不通过此方式显示,因为ios快速滑动到底部,进度条会无法及时渲染
                upwarp.innerHTML = mescroll.optUp.htmlLoading;
            },
            showNoMore: function (mescroll, upwarp) {
                console.log("up --> showNoMore");
                //无更多数据
                upwarp.innerHTML = mescroll.optUp.htmlNodata;
            },
            onScroll: function (mescroll, y, isUp) { //列表滑动监听,默认onScroll: null;
                //y为列表当前滚动条的位置
                console.log("up --> onScroll 列表当前滚动的距离 y = " + y + ", 是否向上滑动 isUp = " + isUp);
            },
            scrollbar: {
                use: isPC, //默认只在PC端自定义滚动条样式
                barClass: "mescroll-bar"
            }
        }
    });
    //当前关键词
    var curWord = null;
    //搜索按钮
    $("#search").click(function () {
        var word = $("#keyword").val();
        curWord = word; //更新关键词
        mescroll.resetUpScroll(); //重新搜索,重置列表数据

    });

    /*初始化菜单*/
    var categoryId;//
    var flagClick;
    $(".category").click(function () {
        var i = $(this).attr("data");
        if (categoryId != i) {
            //更改列表条件
            categoryId = i;
            $(".category").removeClass("active");
            $(this).addClass("active");
            //重置列表数据
            mescroll.resetUpScroll();
        }
    });

    /*联网加载列表数据  page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    function getListData(page) {
        //联网加载数据
        getListDataFromNet(categoryId, curWord, page.num, page.size, function (data) {
            //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
            var curPageData = data.rows; // 接口返回的当前页数据列表
            var totalPage = data.totalPage; // 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
            var totalSize = data.total; // 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
            console.log("categoryId=" + categoryId + ", page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length);
            mescroll.endBySize(curPageData.length, totalSize);
            //设置列表数据
            setListData(curPageData);
        }, function () {
            //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
            mescroll.endErr();
        });
    }


    /*设置列表数据*/
    function setListData(curPageData) {
        var listDom = document.getElementById("list_videos_most_recent_videos_items");
        for (var i = 0; i < curPageData.length; i++) {
            var row = curPageData[i];
            // last-grid
            var grid = (i & 1) != 0 ? '<div class="content-grid last-grid">' : '<div class="content-grid">';
            var str = grid
                + '<a href="javascript:void(0)" data-author=' + row.userId + '  data-id=' + row.id + ' data-poster=' + row.imgUrl + ' data-src=' + row.videoUrl + ' >'
                + '<img  src="' + row.imgUrl + '" title="allbum-name" /></a>'
                + '<h3>' + beautySub(row.name, 10) + '</h3>'
                + '<ul>'
                + '<li><a href="javascript:void(0)">' + row.mockNum + '</a></li>'
                + '	<li><a href="javascript:void(0)">' + row.money + '</a></li>'
                + '</ul>'
                + '<a class="button" href="javascript:void(0)">Watch now</a>'
                + '</div>';
            var liDom = document.createElement("div");
            liDom.innerHTML = str;
            listDom.appendChild(liDom);//加在列表的后面,上拉加载
            //转jquery
            var $itemDom = $(liDom);

            $itemDom.click(function (event) {
                var $self = $(this);
                var $a = $self.find('a');
                var dataId = $a.attr("data-id");
                //视频地址
                var src = $a.attr("data-src");
                //poster 图片地址
                var poster = $a.attr("data-poster");

                var author = $a.attr("data-author");

                $.ajax({
                    type: "post",
                    url: "/video/queryOrder",
                    data: {
                        "id": dataId,
                        "author": author,
                        "redirect_uri": window.location.href
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                    },
                    success: function (r) {
                        console.log(r);
                        if (r.code === 0) {
                            var rep = r.data;
                            if (rep.status === 0 || rep.status === 2) {
                                var value = document.getElementById('wxPayUrl').value;
                                var flag = value.indexOf("?") !== -1;
                                var callbackUrl = window.location.href;
                                var flagCallbackUrl = callbackUrl.indexOf("?") !== -1;
                                var flagVideoIdCallbackUrl = callbackUrl.indexOf("videoId") !== -1;
                                //如果有这个参数值
                                if (flagVideoIdCallbackUrl) {
                                    callbackUrl = changeUrlArg(callbackUrl, 'videoId', dataId);
                                    console.log("callbackUrl=" + callbackUrl);
                                } else {
                                    if (flagCallbackUrl) {
                                        callbackUrl = callbackUrl + "&videoId=" + dataId;
                                    } else {
                                        callbackUrl = callbackUrl + "?videoId=" + dataId;
                                    }
                                }
                                if (flag) {
                                    window.location.href = value + "&orderId=" + rep.orderId + "&callbackUrl=" + encodeURIComponent(callbackUrl);
                                } else {
                                    window.location.href = value + "?orderId=" + rep.orderId + "&callbackUrl=" + encodeURIComponent(callbackUrl);
                                }


                            } else if (rep.status === 1) {
                                flagClick = true;
                                $("#videoId").val(dataId);
                                //图片
                                $("#imgUrl").val(poster);
                                //视频
                                $("#videoUrl").val(src);
                                //图片地址
                                player.poster = poster;
                                //视频地址
                                player.src = src;
                                //设置/返回视频当前播放时间
                                player.currentTime = 0;
                                //是否开始播放
                                player.hasStart = true;
                                //设置/返回 自动播放属性
                                player.autoplay = true;
                            }
                        }
                    }
                });
            });
        }
    }

    player.on('play', function () {
        console.log("play");
        var dataId = $("#videoId").val();
        var author = $("#author").val();
        if (dataId === null || dataId === undefined || dataId == '') {
            return;
        }
        if (flagClick) {
            return;
        }

        $.ajax({
            type: "post",
            url: "/video/queryOrder",
            data: {
                "id": dataId,
                "author": author,
                "redirect_uri": window.location.href
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            },
            success: function (r) {
                if (r.code === 301) {
                    player.pause();
                    return;
                }
                if (r.code === 0) {
                    var rep = r.data;
                    if (rep.status === 0 || rep.status === 2) {
                        var value = document.getElementById('wxPayUrl').value;
                        var flag = value.indexOf("?") !== -1;
                        var callbackUrl = window.location.href;
                        var flagCallbackUrl = callbackUrl.indexOf("?") !== -1;
                        var flagVideoIdCallbackUrl = callbackUrl.indexOf("videoId") !== -1;
                        //如果有这个参数值
                        if (flagVideoIdCallbackUrl) {
                            callbackUrl = changeUrlArg(callbackUrl, 'videoId', dataId);
                            console.log("callbackUrl=" + callbackUrl);
                        } else {
                            if (flagCallbackUrl) {
                                callbackUrl = callbackUrl + "&videoId=" + dataId;
                            } else {
                                callbackUrl = callbackUrl + "?videoId=" + dataId;
                            }
                        }
                        if (flag) {
                            window.location.href = value + "&orderId=" + rep.orderId + "&callbackUrl=" + encodeURIComponent(callbackUrl);
                        } else {
                            window.location.href = value + "?orderId=" + rep.orderId + "&callbackUrl=" + encodeURIComponent(callbackUrl);
                        }
                    }
                    if (rep.status === 1) {
                        player.play();
                    }
                }
            }
        });

    });
    /**
     *  js中字符串超长作固定长度加省略号（...）处理
     * @param str 需要进行处理的字符串，可含汉字
     * @param len 需要显示多少个汉字，两个英文字母相当于一个汉字
     * @returns {string}
     */
    function beautySub(str, len) {
        var reg = /[\u4e00-\u9fa5]/g,   //专业匹配中文
            slice = str.substring(0, len),
            chineseCharNum = (~~(slice.match(reg) && slice.match(reg).length)),
            realen = slice.length * 2 - chineseCharNum;
        return str.substr(0, realen) + (realen < str.length ? "..." : "");
    }


    function getListDataFromNet(categoryId, curWord, pageNum, pageSize, successCallback, errorCallback) {
        if (categoryId === 'buy') {
            $.ajax({
                dataType: 'json',
                type: 'post',
                url: '/video/buy',
                data: {
                    "pageNum": 1,
                    "pageSize": 100
                },
                success: function (data) {
                    if (data && data.code === 0) {
                        //回调
                        successCallback(data);
                    }
                },
                error: errorCallback
            });
        } else {
            $.ajax({
                dataType: 'json',
                type: 'post',
                url: '/video/list',
                data: {
                    "categoryId": categoryId,
                    "pageNum": pageNum,
                    "pageSize": pageSize,
                    "name": curWord
                },
                success: function (data) {
                    if (data && data.code === 0) {
                        //回调
                        successCallback(data);
                    }
                },
                error: errorCallback
            });
        }
    }
});