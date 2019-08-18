#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub digitCharactersSum {
    my ($ch1, $ch2) = @_;

    return ''.(int($ch1) + int($ch2));
}
