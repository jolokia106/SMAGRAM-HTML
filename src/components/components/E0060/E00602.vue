<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-bs5';
DataTable.use(DataTablesLib);

const columns = [
    { data: '案件ID' },
    { data: '案件名' },
    { data: '都道府県' },
    { data: 'ステータス' },
    { data: 'BP' },
    { data: '施工日' },
];
</script>

<template>
    <div>
        <DataTable :columns="columns" ajax="D00201.json" class="table dt-responsive table-hover table-striped" width="100%">
            <thead>
                <tr>
                    <th>案件ID</th>
                    <th>案件名</th>
                    <th>都道府県</th>
                    <th>ステータス</th>
                    <th>BP</th>
                    <th>施工日</th>
                </tr>
            </thead>
            <tfoot>
            </tfoot>
        </DataTable>
    </div>
</template>

<style>
@import 'datatables.net-bs5';
</style>