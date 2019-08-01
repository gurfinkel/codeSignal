#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub ballsDistribution {
    my ($colors, $ballsPerColor, $boxSize) = @_;

    my $result = 0;
    my $c = 0;
    my $d = $boxSize;

    for (my $i = 0; $colors > $i; ++$i) {
        my $e = $c;
        for (my $j = 0; $ballsPerColor > $j; ++$j) {
            --$d;
            if (!$d) {
                $d = $boxSize;
                ++$c;
            }
        }
        if ($e < $c && ($boxSize > $d || $e + 1 < $c)) {
            ++$result;
        }
    }

    return $result;
}
