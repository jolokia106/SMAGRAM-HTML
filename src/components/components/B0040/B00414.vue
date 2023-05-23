<template>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>法人個人区分:</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">個人</option>
                <option value="2">法人</option>
                <option value="3">個人事業主</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>法人名
            </label>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>法人名カナ</label>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>代表者名</label>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>代表者名カナ</label>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>

    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>住所:</label>
        </div>
        <div class="col-sm-8">
            〒400-0001
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
        </div>
        <div class="col-sm-8">
            愛知県名古屋市中村区那古野1-1-1
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
        </div>
        <div class="col-auto">
            アイチケンナゴヤシナカムラクナコノ
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label></label>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary w-100">住所設定</button>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label></label>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="radio" value="">
                <label class="form-check-label">
                    番地以降を公開しない
                </label>
            </div>
        </div>
    </div>

    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>TEL1（固定番号）</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>TEL2（携帯番号）</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>Email</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>緊急連絡先TEL</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>緊急連絡先名称</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>緊急連絡先関係性</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>LINEID</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>


    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>銀行情報</label>
        </div>
        <div class="col-sm-4">
            銀行コード
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
        </div>
        <div class="col-sm-4">
            銀行名
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
        </div>
        <div class="col-sm-4">
            支店コード
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
        </div>
        <div class="col-sm-4">
            支店名
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
        </div>
        <div class="col-sm-4">
            種目
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
        </div>
        <div class="col-sm-4">
            口座番号
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>造園経験年数起算日</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>外構経験年数起算日</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>研修期間</label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <input type="text" class="form-control">
            </div>
        </div>
    </div>

    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>適格事業者コード
            </label>
        </div>
        <div class="col-auto">
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" value=""
                        aria-label="checkbox button for following text input">
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox button">
            </div>
        </div>
    </div>
</template>