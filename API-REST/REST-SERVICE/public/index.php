<?php

require_once __DIR__ . '/../src/router.php';
require_once __DIR__ . '/../src/functions.php';

router('GET', '^/validar-rut/(?<rut>.+)$', function ($params) {
    $rut = $params['rut'];
    $has_only_digits = preg_match('/^(\d+)$/', $rut);
    $length = strlen($rut);

    if (!$has_only_digits) {
        echo json_encode(['error' => 'El RUT sólo debe contener dígitos.']);
    } else if (5 > $length || $length > 9) {
        echo json_encode(['error' => 'El RUT debe contener entre 5 y 9 dígitos.']);
    } else {
        echo json_encode(['isValid' => is_valid_rut($rut)]);
    }
});

router('GET', '^/separar-nombre/(?<name>.+)$', function ($params) {
    $name = str_replace('%20', ' ', $params['name']);
    echo json_encode(split_full_name($name));
});

header("HTTP/1.0 404 Not Found");
echo '404 Not Found';
