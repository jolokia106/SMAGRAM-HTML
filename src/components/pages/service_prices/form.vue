<style lang="scss" scoped>
    @use "/src/assets/css/style.css";
</style>
<script setup>
    import confirmModal from '@/components/components/layouts/modal/confirm.vue';
</script>
<template>
    <div class="content-title">
        <h5>サービス料金マスタ</h5>
    </div>

    <div class="content-body">
        <form action="/service_prices/list" method="GET">
            <div class="content-body-title">
                <h5>基本情報</h5>
            </div>

            <div class="row">
                <div class="row mb-3 col-md-6 pe-0">
                    <div class="column">対象事業</div>
                    <div class="col-md-6 grow-1">
                        <select name="" id="" class="form-select">
                            <option value="">smileガーデン</option>
                            <option value="">smileエクステリア</option>
                            <option value="">植木市場</option>
                            <option value="">GARDEM-JOB</option>
                            <option value="">お庭の達人</option>
                            <option value="">ガーデンビジネス協会</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <button type="reset" class="btn btn-orive ms-1 sp-wide mb-2">表示</button>
                </div>
            </div>

            <div class="content-body-title">
                <h5>剪定・刈込・半伐採</h5>
            </div>
            <table class="service-price-green">

                <!-- 庭木剪定 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        葉張り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >基本剪定単価</th>
                    <th width="8%" >幅広樹木剪定単価<br>(強剪定含む)</th>
                    <th width="8%" >強剪定</th>
                    <th width="8%" ></th>
                </tr>
                <tr>
                    <td rowspan="9">庭木剪定</td>
                    <td>1m未満 (玉物等)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                    <td rowspan="9" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>7m~</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>

                <!-- 【目安】枝割樹木剪定 -->
                <tr class="wakaba">
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        葉張り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr class="wakaba">
                    <th width="8%" >1.0m未満</th>
                    <th width="8%" >1.0~2.0m未満</th>
                    <th width="8%" >2.0~3.0m未満</th>
                    <th width="8%" >3.0m以上</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="7">【目安】<br>枝割樹木剪定<br>(マキ等)</td>
                    <td>2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="7" class="gomi"><input type="number">~<input type="number"></td>
                    <td rowspan="16" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="wakaba">
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 松剪定 -->
                <tr class="wakaba">
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        葉張り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                </tr>
                <tr class="wakaba">
                    <th width="8%" >1.0m未満</th>
                    <th width="8%" >1.0~2.0m未満</th>
                    <th width="8%" >2.0~3.0m未満</th>
                    <th width="8%" >3.0m以上</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="7">【目安】<br>松剪定</td>
                    <td>2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="7" class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 生垣剪定・刈込 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        葉張り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >基本剪定単価</th>
                    <th width="8%" >幅広樹木剪定単価<br>(強剪定含む)</th>
                    <th width="8%" >強剪定</th>
                    <th width="8%" ></th>
                </tr>
                <tr>
                    <td rowspan="6">生垣剪定・刈込</td>
                    <td>1m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                </tr>
                <tr>
                    <td>1~1.5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>1.5~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>2~2.5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>2.5~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>3m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>

                
                <!-- 植込剪定・刈込 -->
                <tr class="wakaba">
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        葉張り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr class="wakaba">
                    <th width="8%" >1.0m未満</th>
                    <th width="8%" >1.0~2.0m未満</th>
                    <th width="8%" >2.0~3.0m未満</th>
                    <th width="8%" >3.0m以上</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="3">植込剪定・刈込</td>
                    <td>1m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="" class="gomi"><input type="number">~<input type="number"></td>
                    <td rowspan="3" class="remarks"><textarea></textarea></td>
                </tr>
                <tr class="wakaba">
                    <td>1~1.5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="" class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>1.5m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="" class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                

                <!-- 半伐採+剪定 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        幹周り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%">20cm未満</th>
                    <th width="8%">20~30cm未満</th>
                    <th width="8%">30~40cm未満</th>
                    <th width="8%">40~50cm未満</th>
                </tr>
                <tr>
                    <td rowspan="22">半伐採+剪定<br>※半伐採箇所の幹周り</td>
                    <td>3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="gomi"><input type="number">~<input type="number"></td>
                    <td rowspan="22" class="remarks"><textarea></textarea></td>
                </tr>
                <tr>
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr>
                    <th width="15%" rowspan="2">
                        幹周り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                </tr>
                <tr>
                    <th width="8%" >20cm未満</th>
                    <th width="8%" >20~30cm未満</th>
                    <th width="8%" >30~40cm未満</th>
                    <th width="8%" >40~50cm未満</th>
                </tr>
                <tr>
                    <td>3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <th width="15%" rowspan="2">
                        幹周り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                </tr>
                <tr>
                    <th width="8%" >20cm未満</th>
                    <th width="8%" >20~30cm未満</th>
                    <th width="8%" >30~40cm未満</th>
                    <th width="8%" >40~50cm未満</th>
                </tr>
                <tr>
                    <td>3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

            </table>




            <!-- 消毒 -->
            <div class="content-body-title mt-5">
                <h5>消毒</h5>
            </div>
            <table class="service-price-green">

                <!-- 庭木消毒 -->
                <tr>
                    <th width="10%" rowspan="">作業内容</th>
                    <th width="15%" colspan="6">消毒単独作業時</th>
                    <th width="20%" rowspan="">備考</th>
                </tr>
                <tr class="wakaba">
                    <td width="15%" rowspan="13">庭木消毒</td>
                    <th width="15%" rowspan="2">
                        幹周り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">本数一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <td rowspan="13" class="remarks"><textarea></textarea></td>
                </tr>
                <tr>
                    <th width="8%" >1~5本未満</th>
                    <th width="8%" >5~10本未満</th>
                    <th width="8%" >10~20本未満</th>
                    <th width="8%" >20~30本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">庭木 3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">庭木 3~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">庭木 5~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">庭木 7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="veludo">
                    <th colspan="6">剪定等他作業同時消毒</th>
                </tr>
                <tr class="veludo">
                    <th width="15%" rowspan="2">
                        本数<br>
                        種類・高さ
                    </th>
                    <th colspan="4">本数一式単価</th>
                    <th rowspan="2">単位</th>
                </tr>
                <tr class="veludo">
                    <th width="8%" >1~5本未満</th>
                    <th width="8%" >5~10本未満</th>
                    <th width="8%" >10~20本未満</th>
                    <th width="8%" >20~30本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">庭木 3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">庭木 3~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">庭木 5~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">庭木 7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 生垣消毒 -->
                <tr>
                    <th width="10%" rowspan="">作業内容</th>
                    <th width="15%" colspan="6">消毒単独作業時</th>
                    <th width="20%" rowspan="">備考</th>
                </tr>
                <tr class="wakaba">
                    <td width="15%" rowspan="17">生垣消毒</td>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">距離別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <td rowspan="17" class="remarks"><textarea></textarea></td>
                </tr>
                <tr>
                    <th width="8%" >15m未満</th>
                    <th width="8%" >15~30m未満</th>
                    <th width="8%" >30~45本未満</th>
                    <th width="8%" >45~60本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">生垣 H3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">生垣 H3~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                
                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">距離別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >60~80m未満</th>
                    <th width="8%" >80~100m未満</th>
                    <th width="8%" >100~150本未満</th>
                    <th width="8%" >150~200本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">生垣 H3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">生垣 H3~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr class="veludo">
                    <th width="15%" colspan="6">剪定等他作業同時消毒</th>
                </tr>
                <tr class="veludo">
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">距離別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr class="veludo">
                    <th width="8%" >15m未満</th>
                    <th width="8%" >15~30m未満</th>
                    <th width="8%" >30~45本未満</th>
                    <th width="8%" >45~60本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">生垣 H3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">生垣 H3~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr class="veludo">
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">距離別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr class="veludo">
                    <th width="8%" >60~80m未満</th>
                    <th width="8%" >80~100m未満</th>
                    <th width="8%" >100~150本未満</th>
                    <th width="8%" >150~200本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">生垣 H3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">生垣 H3~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr>
                    <th width="10%" rowspan="">作業内容</th>
                    <th width="15%" colspan="6">消毒単独作業時</th>
                    <th width="20%" rowspan="">備考</th>
                </tr>
                <tr class="wakaba">
                    <td width="15%" rowspan="17">植込み消毒</td>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">面積別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <td rowspan="17" class="remarks"><textarea></textarea></td>
                </tr>
                <tr>
                    <th width="8%" >30㎡未満</th>
                    <th width="8%" >30~60㎡未満</th>
                    <th width="8%" >60~90㎡未満</th>
                    <th width="8%" >90~120㎡本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">植込み(寄せ植え) H1.2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">面積別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >120~150㎡未満</th>
                    <th width="8%" >150~180㎡未満</th>
                    <th width="8%" >180~210㎡未満</th>
                    <th width="8%" >210~240㎡本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">植込み(寄せ植え) H1.2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr class="veludo">
                    <th width="15%" colspan="6">剪定等他作業同時消毒</th>
                </tr>
                <tr class="veludo">
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">面積別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr class="veludo">
                    <th width="8%" >30㎡未満</th>
                    <th width="8%" >30~60㎡未満</th>
                    <th width="8%" >60~90㎡未満</th>
                    <th width="8%" >90~120㎡本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">植込み(寄せ植え) H1.2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="veludo">
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">面積別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr class="veludo">
                    <th width="8%" >120~150㎡未満</th>
                    <th width="8%" >150~180㎡未満</th>
                    <th width="8%" >180~210㎡未満</th>
                    <th width="8%" >210~240㎡本未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="">植込み(寄せ植え) H1.2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
            </table>


            <!-- 伐採・抜根 -->
            <div class="content-body-title">
                <h5>剪定・刈込・半伐採</h5>
            </div>
            <table class="service-price-green">

                <!-- 庭木剪定 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        葉張り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >幹周り20cm未満</th>
                    <th width="8%" >20~30cm未満</th>
                    <th width="8%" >30~40cm未満</th>
                    <th width="8%" >40~50cm未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="22">庭木伐採<br>※根本周り<br>or伐採箇所の幹周り</td>
                    <td>3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan="6"><input type="number">~<input type="number"></td>
                    <td rowspan="22" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="wakaba">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr>
                    <th width="15%" rowspan="2">
                        葉張り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                </tr>
                <tr>
                    <th width="8%" >50~60cm未満</th>
                    <th width="8%" >60~70cm未満</th>
                    <th width="8%" >70~80cm未満</th>
                    <th width="8%" >80~90cm未満</th>
                </tr>
                <tr class="wakaba">
                    <td>3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan="6"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr>
                    <th width="15%" rowspan="2">
                        葉張り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                </tr>
                <tr>
                    <th width="8%" >90~100cm未満</th>
                    <th width="8%" >100cm以上</th>
                    <th width="8%" ></th>
                    <th width="8%" ></th>
                </tr>
                <tr class="wakaba">
                    <td>3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan="6"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>7m以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 植込みの伐採 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        葉張り<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >幹周り20cm未満</th>
                    <th width="8%" >20~30cm未満</th>
                    <th width="8%" >30~40cm未満</th>
                    <th width="8%" >40~50cm未満</th>
                </tr>
                <tr>
                    <td rowspan="3">植込みの伐採</td>
                    <td>下草</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan=""><input type="number">~<input type="number"></td>
                    <td rowspan="3" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td>1m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan=""><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>1~1.5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan=""><input type="number">~<input type="number"></td>
                </tr>

                <!-- 生垣の伐採 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        面積<br>
                        木の高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >幹周り20cm未満</th>
                    <th width="8%" >20~30cm未満</th>
                    <th width="8%" >30~40cm未満</th>
                    <th width="8%" >40~50cm未満</th>
                </tr>
                <tr>
                    <td rowspan="4">生垣の伐採</td>
                    <td>1m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan=""><input type="number">~<input type="number"></td>
                    <td rowspan="4" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td>1~1.5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan=""><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>1.5~2.0m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan=""><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>2.0~2.5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan=""><input type="number">~<input type="number"></td>
                </tr>


                <!-- 抜根 (切株撤去) -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        株数<br>
                        根本周り(C)
                    </th>
                    <th width="32%" colspan="4">人力作業/1株当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >1株のみ</th>
                    <th width="8%" >2～4株</th>
                    <th width="8%" >5～7株</th>
                    <th width="8%" >8～10株</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="22">抜根 (切株撤去)</td>
                    <td>6cm未満(直径:2cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan="5"><input type="number">~<input type="number"></td>
                    <td rowspan="14" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="wakaba">
                    <td>6~12cm未満(直径:2-4cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>12~18cm未満(直径:4-6cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>18~24cm未満(直径:6-8cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>24cm以上(直径:8cm以上)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>


                <tr>
                    <th width="15%" rowspan="2">
                        株数<br>
                        根本周り(C)
                    </th>
                    <th width="32%" colspan="4">機械作業単価(重機費別途)/1株当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                </tr>
                <tr>
                    <th width="8%" >1株のみ</th>
                    <th width="8%" >2～5株</th>
                    <th width="8%" >6～10株</th>
                    <th width="8%" >11株以上</th>
                </tr>
                <tr class="wakaba">
                    <td>15cm未満(直径:5cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi" rowspan="7"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>15~30cm未満(直径:5~10cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>30~45cm未満(直径:10~15cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>45~60cm未満(直径:15~20cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>60~75cm未満(直径:20~25cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>75~90cm未満(直径:25~30cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>90cm以上(直径:30cm以上)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
            </table>



            <!-- 草刈り・芝刈り・芝メンテ -->
            <div class="content-body-title mt-5">
                <h5>草刈り・芝刈り・芝メンテ</h5>
            </div>
            <table class="service-price-orange">

                <!-- 庭木剪定 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        面積<br>
                        草丈
                    </th>
                    <th width="32%" colspan="4">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >10㎡未満</th>
                    <th width="8%" >11~20㎡未満</th>
                    <th width="8%" >20~30㎡未満</th>
                    <th width="8%" >30㎡以上</th>
                </tr>
                <tr>
                    <td rowspan="5">手抜き除草 (㎡)</td>
                    <td>10cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                    <td rowspan="7" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td>10~30cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>30~50cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>50~100cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <td>100cm以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>

                <!-- 手抜き除草(時間) -->
                <tr>
                    <th width="10%" rowspan="">作業内容</th>
                    <th width="15%" rowspan="">草丈</th>
                    <th width="8%" >1時間当り</th>
                    <th width="8%" ></th>
                    <th width="8%" ></th>
                    <th width="8%" ></th>
                    <th width="8%" rowspan="">単位</th>
                    <th width="15%" rowspan="">ごみ処分費及び清掃費</th>
                </tr>
                <tr class="rose">
                    <td rowspan="">手抜き除草 (時間)</td>
                    <td>全草丈</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>

                </tr>

                <!-- 芝刈り -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        面積<br>
                        作業方法
                    </th>
                    <th width="8%" colspan="">一式単価</th>
                    <th width="24%" colspan="3">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                    <th width="20%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >20㎡未満一式</th>
                    <th width="8%" >20~40㎡未満</th>
                    <th width="8%" >40~60㎡未満</th>
                    <th width="8%" >60~80㎡未満</th>
                </tr>
                <tr>
                    <td rowspan="4">芝刈り</td>
                    <td rowspan="4">機械刈り</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                    <td rowspan="16" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <th width="24%" colspan="4">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                </tr>
                <tr>
                    <th width="8%" >80~100㎡未満</th>
                    <th width="8%" >100~150㎡未満</th>
                    <th width="8%" >150~200㎡未満</th>
                    <th width="8%" >200㎡以上</th>
                </tr>
                <tr>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>

                </tr>

                <!-- 草刈り -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        面積<br>
                        草丈
                    </th>
                    <th width="8%" colspan="">1式単価</th>
                    <th width="24%" colspan="3">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                </tr>
                <tr>
                    <th width="8%" >20㎡未満一式</th>
                    <th width="8%" >20~40㎡未満</th>
                    <th width="8%" >40~60㎡未満</th>
                    <th width="8%" >60~80㎡未満</th>
                </tr>
                <tr class="rose">
                    <td rowspan="10">草刈り</td>
                    <td>50cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>

                </tr>
                <tr class="rose">
                    <td>50~100cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="rose">
                    <td>100~150cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="rose">
                    <td>150cm以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr>
                    <th width="15%" rowspan="2">
                        面積<br>
                        草丈
                    </th>
                    <th width="24%" colspan="4">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="15%" rowspan="2">ごみ処分費及び清掃費</th>
                </tr>
                <tr>
                    <th width="8%" >80~100㎡未満</th>
                    <th width="8%" >100~150㎡未満</th>
                    <th width="8%" >150~200㎡未満</th>
                    <th width="8%" >200㎡以上</th>
                </tr>
                <tr class="rose">
                    <td>50cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="rose">
                    <td>50~100cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="rose">
                    <td>100~150cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>
                <tr class="rose">
                    <td>150cm以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td class="gomi"><input type="number">~<input type="number"></td>
                </tr>


                <!-- 除草剤 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        面積<br>
                        草丈
                    </th>
                    <th width="8%" colspan="">1式単価</th>
                    <th width="24%" colspan="3">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="20%" rowspan="2" colspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >20㎡未満一式</th>
                    <th width="8%" >20~40㎡未満</th>
                    <th width="8%" >40~60㎡未満</th>
                    <th width="8%" >60~80㎡未満</th>
                </tr>
                <tr>
                    <td rowspan="10">除草剤</td>
                    <td rowspan="4">草丈50cm以上</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"  colspan="2">
                        <textarea></textarea>
                    </td>
                </tr>
                
                <tr>
                    <th width="24%" colspan="4">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >80~100㎡未満</th>
                    <th width="8%" >100~150㎡未満</th>
                    <th width="8%" >150~200㎡未満</th>
                    <th width="8%" >200㎡以上</th>
                </tr>
                <tr>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <th width="15%" rowspan="2">
                        面積<br>
                        草丈
                    </th>
                    <th width="24%" colspan="4">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="20%" rowspan="2" colspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >20㎡未満一式</th>
                    <th width="8%" >20~40㎡未満</th>
                    <th width="8%" >40~60㎡未満</th>
                    <th width="8%" >60~80㎡未満</th>
                </tr>

                <!-- 草刈り後 -->
                <tr>
                    <td rowspan="4">草刈り後</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks" colspan="2">
                        <textarea></textarea>
                    </td>
                </tr>
                
                <tr>
                    <th width="24%" colspan="4">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >80~100㎡未満</th>
                    <th width="8%" >100~150㎡未満</th>
                    <th width="8%" >150~200㎡未満</th>
                    <th width="8%" >200㎡以上</th>
                </tr>
                <tr>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 芝のメンテナンス -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        面積<br>
                        草丈
                    </th>
                    <th width="8%" colspan="">1式単価</th>
                    <th width="24%" colspan="3">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="20%" rowspan="2" colspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >20㎡未満一式</th>
                    <th width="8%" >20~40㎡未満</th>
                    <th width="8%" >40~60㎡未満</th>
                    <th width="8%" >60~80㎡未満</th>
                </tr>
                <tr class="rose">
                    <td rowspan="10">芝のメンテナンス</td>
                    <td>エアレーション・目土</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="10" class="remarks" colspan="2">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="rose">
                    <td>施肥</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
            </table>




            <!-- 庭づくり-植栽・庭木メンテ -->
            <div class="content-body-title mt-5">
                <h5>庭づくり-植栽・庭木メンテ</h5>
            </div>
            <table class="service-price-green">

                <!-- 庭木の植栽 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        本数<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="35%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >1本のみ</th>
                    <th width="8%" >2~4本</th>
                    <th width="8%" >5~7本</th>
                    <th width="8%" >8~10本</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="8">庭木の植栽</td>
                    <td>庭木 1.0~1.5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="31" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="wakaba">
                    <td>庭木 1.0~1.5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>庭木 1.5~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>庭木 2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>3m未満 客土 (堆肥・肥料・山砂)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>庭木 3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>庭木 4~5m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>5m未満 客土 (堆肥・肥料・山砂)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 生垣の植栽 -->
                <tr>
                    <td width="10%" rowspan="14">生垣の植栽</td>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">距離別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >5m未満</th>
                    <th width="8%" >5~10m未満</th>
                    <th width="8%" >10~15m未満</th>
                    <th width="8%" >15~20m未満</th>
                </tr>
                <tr class="wakaba">
                    
                    <td>H1.5m未満 植込み・垣根作成</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>H1.5~2m未満 植込み・垣根作成</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>H2~2.5m未満 植込み・垣根作成</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>H2.5~3m未満 植込み・垣根作成</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>客土 (堆肥・肥料・山砂)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                
                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">1本当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >20~25m未満</th>
                    <th width="8%" >25~30m未満</th>
                    <th width="8%" >30~35m未満</th>
                    <th width="8%" >35~40m未満</th>
                </tr>
                <tr class="wakaba">
                    <td>H1.5m未満 植込み・垣根作成</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>H1.5~2m未満 植込み・垣根作成</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>H2~2.5m未満 植込み・垣根作成</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>H2.5~3m未満 植込み・垣根作成</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>客土 (堆肥・肥料・山砂)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 植込み・花壇の植栽 -->
                <tr>
                    <td width="10%" rowspan="4">植込み・花壇の植栽</td>
                    <th width="15%" rowspan="2">
                        面積<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">距離別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >5m未満</th>
                    <th width="8%" >5~10m未満</th>
                    <th width="8%" >10~15m未満</th>
                    <th width="8%" >15~20m未満</th>
                </tr>
                <tr class="wakaba">
                    
                    <td>下草・低木</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>客土 (堆肥・肥料・山砂)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 支柱 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        面積<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">距離別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >5m未満</th>
                    <th width="8%" >5~10m未満</th>
                    <th width="8%" >10~15m未満</th>
                    <th width="8%" >15~20m未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="3">支柱</td>
                    <td>新規植栽時</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>支柱追加時 (補強・更新等)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>立て起こし時 (台風後等)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 施肥 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        本数<br>
                        種類
                    </th>
                    <th width="32%" colspan="4">本数別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="35%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >1~5本</th>
                    <th width="8%" >6~10本</th>
                    <th width="8%" >11~20本</th>
                    <th width="8%" >20~30本</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="7">施肥</td>
                    <td>庭木</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="7" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>

                <tr>
                    <th width="15%" rowspan="2">
                        本数<br>
                        種類
                    </th>
                    <th width="32%" colspan="4">距離別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >距離1~5m</th>
                    <th width="8%" >6~10m</th>
                    <th width="8%" >11~15m</th>
                    <th width="8%" >16~20m</th>
                </tr>
                <tr class="wakaba">
                    <td>生垣</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr>
                    <th width="15%" rowspan="2">
                        本数<br>
                        種類
                    </th>
                    <th width="32%" colspan="4">面積別一式単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >面積1~5㎡</th>
                    <th width="8%" >6~10㎡</th>
                    <th width="8%" >11~15㎡</th>
                    <th width="8%" >16~20㎡</th>
                </tr>
                <tr class="wakaba">
                    <td>植込み</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
               
            </table>
            

            <!-- 庭づくり-移植関係 -->
            <div class="content-body-title mt-5">
                <h5>庭づくり-移植関係</h5>
            </div>
            <table class="service-price-green">

                <!-- ①掘り取り②根巻 (根回しも本単価) -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">人力作業 -1本当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="35%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >1本のみ</th>
                    <th width="8%" >2~4本</th>
                    <th width="8%" >5~7本</th>
                    <th width="8%" >8~10本</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="14">①掘り取り<br>②根巻<br>(根回しも本単価)</td>
                    <td>6cm未満(直径:2cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="33" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="wakaba">
                    <td>6~12cm未満(直径:2~4cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>12~18cm未満(直径:4~6cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>18~24cm未満(直径:6~8cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>24cm以上(直径:8cm以上)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">機械作業単価 (重機費別途) -1本当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >1本のみ</th>
                    <th width="8%" >2~4本</th>
                    <th width="8%" >5~7本</th>
                    <th width="8%" >8~10本</th>
                </tr>
                <tr class="wakaba">
                    <td>15cm未満(直径:5cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>15~30cm未満(直径:5~10cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>30~45cm未満(直径:10~15cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>45~60cm未満(直径:15~20cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>60~75cm未満(直径:20~25cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>75~90cm未満(直径:25~30cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>90cm以上(直径:30cm以上)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- ③移植 (①・②費用含む) -->
                <tr>
                    <td rowspan="16">③移植<br>(①・②費用含む)</td>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">人力作業 -1本当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >1本のみ</th>
                    <th width="8%" >2~4本</th>
                    <th width="8%" >5~7本</th>
                    <th width="8%" >8~10本</th>
                </tr>
                <tr class="wakaba">
                    <td>6cm未満(直径:2cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>6~12cm未満(直径:2~4cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>12~18cm未満(直径:4~6cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>18~24cm未満(直径:6~8cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>24cm以上(直径:8cm以上)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">機械作業単価 (重機費別途) -1本当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >1本のみ</th>
                    <th width="8%" >2~4本</th>
                    <th width="8%" >5~7本</th>
                    <th width="8%" >8~10本</th>
                </tr>
                <tr class="wakaba">
                    <td>15cm未満(直径:5cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>15~30cm未満(直径:5~10cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>30~45cm未満(直径:10~15cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>45~60cm未満(直径:15~20cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>60~75cm未満(直径:20~25cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>75~90cm未満(直径:25~30cm未満)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>90cm以上(直径:30cm以上)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 運搬費 -->
                <tr>
                    <td rowspan="3">④運搬費</td>
                    <th width="15%" rowspan="2">
                        車種<br>
                        距離
                    </th>
                    <th width="8%" colspan="">軽トラ</th>
                    <th width="8%" colspan="">2~3t ダンプ</th>
                    <th width="8%" colspan="">ユニック車</th>
                    <th width="8%" colspan=""></th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >1車当り</th>
                    <th width="8%" >1車当り</th>
                    <th width="8%" >1車当り</th>
                    <th width="8%" ></th>
                </tr>
                <tr class="wakaba">
                    <td>1kmごと</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 鉢の植え替え -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">1鉢当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="35%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >1鉢のみ</th>
                    <th width="8%" >2~4鉢</th>
                    <th width="8%" >5~7鉢</th>
                    <th width="8%" >8~10鉢</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="14">鉢の植え替え</td>
                    <td>内寸直径15cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="wakaba">
                    <td>内寸直径15~20cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>内寸直径20~30cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>内寸直径30~45cm未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
            </table>




            <!-- 庭づくり-その他 -->
            <div class="content-body-title mt-5">
                <h5>庭づくり-その他</h5>
            </div>
            <table class="service-price-blue">

                <!-- 芝張り -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="8%" colspan="1">一式単価</th>
                    <th width="24%" colspan="3">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="35%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >10㎡未満一式</th>
                    <th width="8%" >10~20㎡未満</th>
                    <th width="8%" >20~30㎡未満</th>
                    <th width="8%" >30~45㎡未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="10">芝張り</td>
                    <td>●整地済み - 平面</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="10" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="wakaba">
                    <td>整地済み - 法面 (要目串の場合)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>●デコボコ - 平面</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>デコボコ - 法面 (要目串の場合)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>


                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">人力作業 -1本当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >45~60㎡未満</th>
                    <th width="8%" >60~75㎡未満</th>
                    <th width="8%" >75~80㎡未満</th>
                    <th width="8%" >80㎡以上</th>
                </tr>
                <tr class="wakaba">
                    <td>●整地済み - 平面</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>整地済み - 法面 (要目串の場合)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>●デコボコ - 平面</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>デコボコ - 法面 (要目串の場合)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>


                <!-- 砂利敷き -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        面積<br>
                        種類
                    </th>
                    <th width="8%" colspan="1">一式単価</th>
                    <th width="24%" colspan="3">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="35%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >5㎡未満一式</th>
                    <th width="8%" >5~10㎡未満</th>
                    <th width="8%" >10~20㎡未満</th>
                    <th width="8%" >20~30㎡未満</th>
                </tr>
                <tr class="sky-blue">
                    <td rowspan="6">砂利敷き</td>
                    <td>砕石(約30~40mm厚)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="sky-blue">
                    <td>一般砂利(約30~40mm厚)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">人力作業 -1本当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >30~45㎡未満</th>
                    <th width="8%" >45~60㎡未満</th>
                    <th width="8%" >60~75㎡未満</th>
                    <th width="8%" >75㎡以上</th>
                </tr>
                <tr class="sky-blue">
                    <td>砕石(約30~40mm厚)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>一般砂利(約30~40mm厚)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 防草シート -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="8%" colspan="1">一式単価</th>
                    <th width="24%" colspan="3">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="35%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >10㎡未満一式</th>
                    <th width="8%" >10~20㎡未満</th>
                    <th width="8%" >20~30㎡未満</th>
                    <th width="8%" >30~45㎡未満</th>
                </tr>
                <tr class="wakaba">
                    <td rowspan="10">防草シート</td>
                    <td>格安防草シート ※1</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="10" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="wakaba">
                    <td>通常防草シート ※2</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>強力防草シート ※3</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>超強力防草シート ※4</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>


                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">人力作業 -1本当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >45~60㎡未満</th>
                    <th width="8%" >60~75㎡未満</th>
                    <th width="8%" >75~80㎡未満</th>
                    <th width="8%" >80㎡以上</th>
                </tr>
                <tr class="wakaba">
                    <td>格安防草シート ※1</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>通常防草シート ※2</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>強力防草シート ※3</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="wakaba">
                    <td>超強力防草シート ※4</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <!-- 掘削(芝剥がし)・土入れ・残土処分 -->
                <tr>
                    <th width="10%" rowspan="2">作業内容</th>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="8%" colspan="1">一式単価</th>
                    <th width="24%" colspan="3">1㎡当たりの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                    <th width="35%" rowspan="2">備考</th>
                </tr>
                <tr>
                    <th width="8%" >0.5㎥未満一式</th>
                    <th width="8%" >0.5~1㎥未満</th>
                    <th width="8%" >1~1.5㎥未満</th>
                    <th width="8%" >1.5㎥以上</th>
                </tr>
                <tr class="sky-blue">
                    <td rowspan="10">掘削(芝剥がし)<br>・<br>土入れ<br>・<br>残土処分</td>
                    <td>人力掘削または芝剥がし</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td rowspan="10" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="sky-blue">
                    <td>重機掘削または芝剥がし</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>

                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">人力作業 -1本当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >0.5㎥未満一式</th>
                    <th width="8%" >0.5~1㎥未満</th>
                    <th width="8%" >1~1.5㎥未満</th>
                    <th width="8%" >1.5㎥以上</th>
                </tr>
                <tr class="sky-blue">
                    <td>人力土入れ (材料費含む)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>ユニック等土入れ (材料費含む)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <th width="15%" rowspan="2">
                        距離<br>
                        種類・高さ
                    </th>
                    <th width="32%" colspan="4">人力作業 -1本当りの単価</th>
                    <th width="8%" rowspan="2">単位</th>
                </tr>
                <tr>
                    <th width="8%" >0.5㎥未満一式</th>
                    <th width="8%" >0.5~1㎥未満</th>
                    <th width="8%" >1~1.5㎥未満</th>
                    <th width="8%" >1.5㎥以上</th>
                </tr>
                <tr class="sky-blue">
                    <td>残土処分 (敷地内)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>残土処分 (敷地外)</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
            </table>



            <!-- 冬囲い・雪囲い ~冬季(雪国)サービス~ -->
            <div class="content-body-title mt-5">
                <h5>庭づくり-その他</h5>
            </div>
            <table class="service-price-winter">
                <tr>
                    <th width="15%" rowspan="">作業内容</th>
                    <th width="15%" rowspan="">木の高さ</th>
                    <th width="10%" colspan="">少量単価</th>
                    <th width="10%" rowspan="">単位</th>
                    <th width="10%" colspan="">通常単価</th>
                    <th width="10%" rowspan="">単位</th>
                    <th width="30%" rowspan="">備考</th>
                </tr>
                 <!-- 繩巻き -->
                <tr class="sky-blue">
                    <td rowspan="4">繩巻き</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td rowspan="8" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="sky-blue">
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- 竹囲い -->
                <tr class="sky-blue">
                    <td rowspan="4">竹囲い</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                </tr>
                <tr class="sky-blue">
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- 繩巻き(撤去) -->
                <tr>
                    <td rowspan="4">繩巻き(撤去)</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td rowspan="4" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- 竹囲い(撤去) -->
                <tr>
                    <td rowspan="4">竹囲い(撤去)</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td rowspan="4" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- 生垣(植込み) 竹囲い -->
                <tr class="sky-blue">
                    <td rowspan="4">生垣(植込み)<br>竹囲い</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td rowspan="4" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="sky-blue">
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- 生垣(植込み) 竹囲い(撤去) -->
                <tr>
                    <td rowspan="4">生垣(植込み)<br>竹囲い(撤去)</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="4" class="remarks"><textarea></textarea></td>
                    <td rowspan="4" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- 雪吊り -->
                <tr class="sky-blue">
                    <td rowspan="6">雪吊り</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td rowspan="6" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="sky-blue">
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- 雪吊り(撤去) -->
                <tr>
                    <td rowspan="6">雪吊り(撤去)</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td rowspan="6" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- 幹吊り -->
                <tr class="sky-blue">
                    <td rowspan="6">幹吊り</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td rowspan="6" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="sky-blue">
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- 幹吊り(撤去) -->
                <tr>
                    <td rowspan="6">幹吊り(撤去)</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td rowspan="6" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr>
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                 <!-- ムシロ掛け -->
                <tr class="sky-blue">
                    <td rowspan="6">ムシロ掛け</td>
                    <td>玉物・1m未満</td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td><input type="number"></td>
                    <td rowspan="6" class="remarks"><textarea></textarea></td>
                    <td rowspan="6" class="remarks">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="sky-blue">
                    <td>1~2m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>2~3m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>3~4m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>5~6m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
                <tr class="sky-blue">
                    <td>6~7m未満</td>
                    <td><input type="number"></td>
                    <td><input type="number"></td>
                </tr>
            </table>

            <div class="mt-5 buttons">
                <input type="button" class="btn btn-orive" value="登録" data-bs-toggle="modal" data-bs-target="#confirmModal">
            </div>

            <!-- モーダル -->
            <confirmModal />

        </form>
    </div>



</template>


<script scoped>
    $(function(){
      

    });
</script>