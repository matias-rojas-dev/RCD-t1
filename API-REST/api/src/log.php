<?php

date_default_timezone_set("America/Santiago");

function logger($file)
{
    return function ($where) use ($file) {
        return function ($message) use ($file, $where) {
            return
                file_put_contents(
                    $file,
                    "[" . date("Y-m-d H:i:s") . "] ($where) $message" . PHP_EOL,
                    FILE_APPEND
                );
        };
    };
}
