#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub imageTruncation {
    my ($image, $threshold) = @_;

    my $rows = @$image;
    my $cols = @{@$image[0]};

    for (my $i = 0; $rows > $i; ++$i) {
        for (my $j = 0; $cols > $j; ++$j) {
            if ($threshold < @{@$image[$i]}[$j]) {
                @{@$image[$i]}[$j] = $threshold;
            }
        }
    }

    return $image;
}
