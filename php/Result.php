<?php
function drawResult($answer)
{ ?>
    <tr class="resultFromPhp">
        <th class="X"><?php echo $answer[0] ?></th>
        <th class="Y"><?php echo $answer[1] ?></th>
        <th class="R"><?php echo $answer[2] ?></th>
        <th class="Res"><?php echo $answer[3] ?></th>
        <th class="Time"><?php echo $answer[4] ?></th>
        <th class="Bench"><?php echo $answer[5] ?> мсек</th>
    </tr>
    <?php
}