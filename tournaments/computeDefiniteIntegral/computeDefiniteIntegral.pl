#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub computeDefiniteIntegral {
    my ($l, $r, $p) = @_;

    my $result = 0;
    my $left = $l;
    my $right = $r;
    my $len = @$p;

    for (my $i = 0; $len > $i; ++$i) {
        $result += (@$p[$i] * ($right - $left) / ($i + 1));
        $left *= $l;
        $right *= $r;
    }

    return $result;
}
