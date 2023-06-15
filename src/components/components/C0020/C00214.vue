<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net-bs5';
DataTable.use(DataTablesLib);

const columns = [
    { data: 'BP' },
    { data: '最終チャット' },
];
</script>

<template>
    <div>
        <DataTable :columns="columns" ajax="C00214.json" class="table dt-responsive table-hover table-striped" width="100%">
            <thead>
                <tr>
                    <th>BP</th>
                    <th>最終チャット</th>
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