<?php

require_once __DIR__ . '/../src/router.php';
require_once __DIR__ . '/../src/functions.php';

router('GET', '^/validar-rut/(?<rut>.+)$', function ($params) {
    $rut = $params['rut'];
    $length = strlen($rut);

    if (5 > $length || $length > 12) {
        echo json_encode(['error' => 'El RUT debe contener entre 5 y 12 caracteres.']);
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
