<?php

date_default_timezone_set("America/Santiago");

function logger(string $file)
{
    return fn (string $where) => fn (string $message) =>
        file_put_contents(
            $file,
            "[" . date("Y-m-d H:i:s") . "] ($where) $message" . PHP_EOL,
            FILE_APPEND
        );
}
